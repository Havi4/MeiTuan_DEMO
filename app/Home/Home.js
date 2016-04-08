'use strict';
import React, {
    StyleSheet,
    ScrollView,
    ListView,
    Image,
    View,
    Text,
    TouchableOpacity,
    Platform,
    RefreshControl,
    ActivityIndicatorIOS,
} from 'react-native';

import NavigationBar from 'react-native-navigationbar';
import PageControl from 'react-native-page-control';
import AdScrollView from './AdScrollView';
import BaseCSS from '../css/BaseCss';
import Animation from '../customViews/Animation';
import ControlledRefreshableListView from 'react-native-refreshable-listview';
var screen = require('Dimensions').get('window');

import LimitTime from './LimitTime';
import Discount from './Discount';
import Hot from './Hot';
import Recommend from './Recomend';

const recommend_url = 'http://api.meituan.com/group/v2/recommend/homepage/city/10?userId=157535075&userid=157535075&__vhost=api.mobile.meituan.com&position=31.222330%2C121.409775&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=50%3Abd%3A5f%3A39%3A4d%3A2d&ci=10&__skcy=0flGYf3%2BuHTUH3YISzbZkr%2FKmKA%3D&__skua=7c48d372d4cf12e70c996b8b2afacea0&__skts=1459995965.393068&wifi-name=by-002&client=iphone&uuid=088C82665074950B02152378305A6939BC11B996257658B48A8C3999C8904F22&__skno=F82B5EDE-39E3-4A58-9A8C-B39DCD9DE868&utm_content=088C82665074950B02152378305A6939BC11B996257658B48A8C3999C8904F22&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=48E40C05-691C-4595-8F0F-99A44D0CDD212016-04-07-10-25569';


var ds = new ListView.DataSource({
    rowHasChanged:(r1,r2,)=>r1!=r2,
    sectionHeaderHasChanged:(r1,r2,)=>r1!=r2
});


class Home extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            currentPage: 0,
            headerHeight:0,
            datas:[
                {list:null},
                {limitTime:null},
                {discount:null},
                {hot:null},

            ],
            recommendData:null,
            loadData:null,
            loaded:false,
            isFetchMaxId:0,
            isRefreshing:false
        };
        this.onScroll = this.onScroll.bind(this);
        this._renderLists=this._renderLists.bind(this);
        this._reloadLists = this._reloadLists.bind(this);
        this.onVerticalScroll = this.onVerticalScroll.bind(this);
        this._loadMore = this._loadMore.bind(this);
        this.getDiscountData = this.getDiscountData.bind(this);
    }

    componentDidMount(){
        this.getDiscountData();
    }

    getDiscountData(){
        fetch(recommend_url)
            .then((response) => response.json())
            .catch((error) => {
                console.log(error);
            })
            .then((responseData) => {
                if (responseData.data) {
                    console.log(responseData);
                    this.setState({
                        datas:[
                            {list:null},
                            {limitTime:null},
                            {discount:null},
                            {hot:null},
                            responseData.data
                        ],
                    });
                }
            }).done();

    }

    render(){
        return (
            <View style={[BaseCSS.container]}>
                <NavigationBar
                    backHidden={true}
                    barTintColor="white"
                    barStyle={styles.navBar}
                    title="首页"
                />
                <ControlledRefreshableListView
                    dataSource={ds.cloneWithRowsAndSections(this.state.datas)}
                    renderRow={this._renderLists}
                    onRefresh={this._reloadLists}
                    isRefreshing={this.state.isRefreshing}
                    loadData={this._loadMore}
                    refreshingIndicatorComponent={MyRefreshingIndicator}
                    renderSectionHeader={this._renderHeader}
                />

            </View>
        );
    }

    _loadMore(){

    }

    _renderHeader(data,sectionID,rowID){
        if(sectionID==='0'){
            return (<View/>);
        }else{
            return (<View style={{height:15}}/>);
        }
    }

    _renderLists(data,sectionID,rowID){
        switch(parseInt(sectionID)){
            case 0:{
                return (
                    <View style={{}}>
                        <ScrollView
                            ref="ad"
                            pagingEnabled={true}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            bounces={false}
                            onScroll={this.onScroll}
                            scrollEventThrottle={16}>
                            <View style={styles.scrollViewBg}>
                                <AdScrollView/>
                            </View>
                            <View style={styles.scrollViewBg}>
                                <AdScrollView/>
                            </View>
                        </ScrollView>
                        <PageControl style={{flex:1,bottom:10}}
                            numberOfPages={2}
                            currentPage={this.state.currentPage}
                            hidesForSinglePage={true}
                            pageIndicatorTintColor='gray'
                            currentPageIndicatorTintColor='#6897bb'
                            indicatorStyle={{borderRadius: 5}}
                            currentIndicatorStyle={{borderRadius: 5}}
                            indicatorSize={{width:8, height:8}}
                            onPageIndicatorPress={this.onItemTap} />
                    </View>
                )
            }
            case 1:{
                return(
                    <LimitTime/>
                );
            }
            case 2:{
                return(
                    <Discount/>
                );
            }
            case 3:{
                return(
                    <Hot/>
                );
            }
            case 4:{
                switch(parseInt(rowID)){
                    case 0:{
                        return(<View style={{height:40,borderBottomColor:'#d8d8d8',borderBottomWidth:0.5,backgroundColor:'#ffffff',borderTopWidth:0.5,borderTopColor:'#d8d8d8',}}>
                            <View style={{height:40,flexDirection:'row',alignItems:'center',flex:1}}>
                                <Image
                                    style={{height:15,width:15,marginLeft:12}}
                                    source={require('../images/icon_homapage_favor@3x.png')}
                                />
                                <Text style={{marginLeft:5,fontSize:12}}>猜你喜欢</Text>
                            </View>
                        </View>);
                    }
                    default:{
                        return(<Recommend rowData={data}/>);
                    }
                }
            }

            default:{
                return(
                    <TouchableOpacity activeOpacity={0.5} onPress={()=>this.navHandleChange(data.resource)}>
                        <Text>年后啊爱丽丝都放假</Text>
                    </TouchableOpacity>
                );
            }
        }
    }

    _reloadLists(){
        this.setState({
            isRefreshing:true
        });
    }

    onScroll(event){
        var offsetX = event.nativeEvent.contentOffset.x,
            pageWidth = screen.width - 10;
        this.setState({
            currentPage: (Math.floor((offsetX - pageWidth / 2) / pageWidth) + 1)
        });
    }

    onVerticalScroll(event){
        var offsetY = event.nativeEvent.contentOffset.y;
        this.setState({
                headerHeight:offsetY
        });
    }

}

var MyRefreshingIndicator = React.createClass({
    render() {
        return (
            <View style={styles.indicatorWrapper}>
                <Animation timingLenght={50} druation={500} badyColor={'#aaaaaa'}/>
            </View>
        )
    }
})

let styles = StyleSheet.create({
    textStyle:{
        marginTop:5,alignSelf:'center',fontSize:14,color:'#555555',textAlign:'center'
    },
    imageStyle:{
        alignSelf:'center',
        width:44,
        height:44
    },
    scrollViewBg:{
        width:screen.width,
        height:188,
        borderBottomWidth:0.5,
        borderTopWidth:0.5,
        borderBottomColor:'#d8d8d8',
        backgroundColor:'#ffffff',
        borderTopColor:'#d8d8d8'
    },
    scrollCell:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-between'
    },
    indicatorWrapper:{
        height:45,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f4f4f4'
    }
});

export default Home;