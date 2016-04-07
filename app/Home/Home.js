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
import RequestUtil from '../network/RequestUtils';

import LimitTime from './LimitTime';

const discount_url = 'http://api.meituan.com/group/v1/deal/topic/discount/city/10?uuid=088C82665074950B02152378305A6939BC11B996257658B48A8C3999C8904F22&msid=48E40C05-691C-4595-8F0F-99A44D0CDD212016-04-07-10-25569&utm_term=6.6&utm_source=AppStore&latlng=31.222330%2C121.409775&utm_content=088C82665074950B02152378305A6939BC11B996257658B48A8C3999C8904F22&userid=157535075&utm_medium=iphone&movieBundleVersion=100&version_name=6.6&__skck=3c0cf64e4b039997339ed8fec4cddf05&__skua=7c48d372d4cf12e70c996b8b2afacea0&__skts=1459995965.632873&utm_campaign=AgroupBgroupD100H0&__skno=B6C68B53-A124-4D40-A487-8A73E77A6868&__skcy=rS%2F550y3ROb6RGj5dVlv7sBsgbQ%3D&ci=10&__vhost=api.mobile.meituan.com&client=iphone';
const recommend_url = 'http://api.meituan.com/group/v2/recommend/homepage/city/10?userId=157535075&userid=157535075&__vhost=api.mobile.meituan.com&position=31.222330%2C121.409775&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=50%3Abd%3A5f%3A39%3A4d%3A2d&ci=10&__skcy=0flGYf3%2BuHTUH3YISzbZkr%2FKmKA%3D&__skua=7c48d372d4cf12e70c996b8b2afacea0&__skts=1459995965.393068&wifi-name=by-002&client=iphone&uuid=088C82665074950B02152378305A6939BC11B996257658B48A8C3999C8904F22&__skno=F82B5EDE-39E3-4A58-9A8C-B39DCD9DE868&utm_content=088C82665074950B02152378305A6939BC11B996257658B48A8C3999C8904F22&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=48E40C05-691C-4595-8F0F-99A44D0CDD212016-04-07-10-25569';
const timelimit_url = 'http://api.meituan.com/api/entry?uuid=088C82665074950B02152378305A6939BC11B996257658B48A8C3999C8904F22&name=hotcate&utm_term=6.6&utm_source=AppStore&latlng=31.222292%2C121.409874&utm_content=088C82665074950B02152378305A6939BC11B996257658B48A8C3999C8904F22&userid=157535075&utm_medium=iphone&movieBundleVersion=100&version_name=6.6&__skck=3c0cf64e4b039997339ed8fec4cddf05&__skua=7c48d372d4cf12e70c996b8b2afacea0&__skts=1459998611.042855&utm_campaign=AgroupBgroupD100H0&__skno=6544BCBF-74AF-4BBA-9E4A-F9900408AA8E&__skcy=5mCOPeK57CZM7DutawEdA0u1Hfg%3D&ci=10&__vhost=aop.meituan.com&msid=48E40C05-691C-4595-8F0F-99A44D0CDD212016-04-07-10-25569';
const hot2_rul = 'http://api.meituan.com/api/entry?uuid=088C82665074950B02152378305A6939BC11B996257658B48A8C3999C8904F22&name=brandarea&utm_term=6.6&utm_source=AppStore&latlng=31.222292%2C%20121.409874&utm_content=088C82665074950B02152378305A6939BC11B996257658B48A8C3999C8904F22&userid=157535075&utm_medium=iphone&movieBundleVersion=100&version_name=6.6&__skck=3c0cf64e4b039997339ed8fec4cddf05&__skua=7c48d372d4cf12e70c996b8b2afacea0&__skts=1459998611.026719&utm_campaign=AgroupBgroupD100H0&__skno=9BB9BBE6-E6A4-48A5-BE7E-D49AD6B3A136&__skcy=74Di2XRkcBBjg4Mdhi39jE042b8%3D&ci=10&__vhost=aop.meituan.com&msid=48E40C05-691C-4595-8F0F-99A44D0CDD212016-04-07-10-25569';

var screen = require('Dimensions').get('window');
const titles_first_data=["美食","电影","酒店","KTV","外卖","优惠买单","周边游","休闲娱乐","今日新单","丽人"];
const titles_second_data=["购物","火车票","生活服务","旅游","汽车服务","足疗按摩","小吃快餐","经典门票","境外游","全部分类"];

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
                {recommend:null}
            ],
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
        fetch(discount_url)
            .then((response) => response.json())
            .catch((error) => {
                console.log(error);
            })
            .then((responseData) => {
                if (responseData.data) {
                    console.log(responseData);
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
                />

            </View>
        );
    }

    _loadMore(){

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