'use strict';
import React, {
    StyleSheet,
    ScrollView,
    Image,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

import NavigationBar from 'react-native-navigationbar';
import PageControl from 'react-native-page-control';
import BaseCSS from '../css/BaseCss';
var screen = require('Dimensions').get('window');
const titles_first_data=["美食","电影","酒店","KTV","外卖","优惠买单","周边游","休闲娱乐","今日新单","丽人"];
const titles_second_data=["购物","火车票","生活服务","旅游","汽车服务","足疗按摩","小吃快餐","经典门票","境外游","全部分类"];

class Home extends React.Component {



    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            currentPage: 0
        };
        this.onScroll = this.onScroll.bind(this);
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
                <ScrollView>
                    <ScrollView
                        type="ad"
                        pagingEnabled={true}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                        onScroll={this.onScroll}
                        scrollEventThrottle={16}>
                        <View style={styles.scrollViewBg}>
                            {this._renderLeftView()}
                        </View>
                        <View style={styles.scrollViewBg}>
                            {this._renderRightView()}
                        </View>
                    </ScrollView>
                    <PageControl style={{position:'absolute', left:10, right:19, top:176}}
                        numberOfPages={2}
                        currentPage={this.state.currentPage}
                        hidesForSinglePage={true}
                        pageIndicatorTintColor='gray'
                        currentPageIndicatorTintColor='white'
                        indicatorStyle={{borderRadius: 5}}
                        currentIndicatorStyle={{borderRadius: 5}}
                        indicatorSize={{width:8, height:8}}
                        onPageIndicatorPress={this.onItemTap} />
                </ScrollView>

            </View>
        );
    }

    _renderLeftView(){
        return(
            <View>
                <View style={styles.scrollCell}>
                    <View style={{width:70}}>
                        <Image source={require('../images/icon_hotel_logo@2x.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>{titles_first_data[0]}</Text>
                    </View>
                    <View style={{width:70}}>
                        <Image source={require('../images/icon_hotel_logo@2x.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>{titles_first_data[1]}</Text>
                    </View>
                    <View style={{width:70}}>
                        <Image source={require('../images/icon_hotel_logo@2x.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>{titles_first_data[2]}</Text>
                    </View>
                    <View style={{width:70}}>
                        <Image source={require('../images/icon_hotel_logo@2x.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>{titles_first_data[3]}</Text>
                    </View>
                    <View style={{width:70}}>
                        <Image source={require('../images/icon_hotel_logo@2x.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>{titles_first_data[4]}</Text>
                    </View>
                </View>
                <View style={styles.scrollCell}>
                    <View style={{width:70}}>
                        <Image source={require('../images/icon_hotel_logo@2x.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>{titles_first_data[5]}</Text>
                    </View>
                    <View style={{width:70}}>
                        <Image source={require('../images/icon_hotel_logo@2x.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>{titles_first_data[6]}</Text>
                    </View>
                    <View style={{width:70}}>
                        <Image source={require('../images/icon_hotel_logo@2x.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>{titles_first_data[7]}</Text>
                    </View>
                    <View style={{width:70}}>
                        <Image source={require('../images/icon_hotel_logo@2x.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>{titles_first_data[8]}</Text>
                    </View>
                    <View style={{width:70}}>
                        <Image source={require('../images/icon_hotel_logo@2x.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>{titles_first_data[9]}</Text>
                    </View>
                </View>
            </View>
        );
    }

    _renderRightView(){
        return(
            <View>
                <View style={styles.scrollCell}>
                    <View style={{width:70}}>
                        <Image source={require('../images/icon_hotel_logo@2x.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>{titles_first_data[0]}</Text>
                    </View>
                    <View style={{width:70}}>
                        <Image source={require('../images/icon_hotel_logo@2x.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>{titles_first_data[1]}</Text>
                    </View>
                    <View style={{width:70}}>
                        <Image source={require('../images/icon_hotel_logo@2x.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>{titles_first_data[2]}</Text>
                    </View>
                    <View style={{width:70}}>
                        <Image source={require('../images/icon_hotel_logo@2x.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>{titles_first_data[3]}</Text>
                    </View>
                    <View style={{width:70}}>
                        <Image source={require('../images/icon_hotel_logo@2x.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>{titles_first_data[4]}</Text>
                    </View>
                </View>
                <View style={styles.scrollCell}>
                    <View style={{width:70}}>
                        <Image source={require('../images/icon_hotel_logo@2x.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>{titles_first_data[5]}</Text>
                    </View>
                    <View style={{width:70}}>
                        <Image source={require('../images/icon_hotel_logo@2x.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>{titles_first_data[6]}</Text>
                    </View>
                    <View style={{width:70}}>
                        <Image source={require('../images/icon_hotel_logo@2x.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>{titles_first_data[7]}</Text>
                    </View>
                    <View style={{width:70}}>
                        <Image source={require('../images/icon_hotel_logo@2x.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>{titles_first_data[8]}</Text>
                    </View>
                    <View style={{width:70}}>
                        <Image source={require('../images/icon_hotel_logo@2x.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>{titles_first_data[9]}</Text>
                    </View>
                </View>
            </View>
        );
    }

    _next(){
        this.props.navigator.push({
            component:Test,
        })
    }

    onScroll(event){
        if(this.refs['ad']){
            var offsetX = event.nativeEvent.contentOffset.x,
                pageWidth = screen.width - 10;
            this.setState({
                currentPage: (Math.floor((offsetX - pageWidth / 2) / pageWidth) + 1)
            });
        }
    }

}

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
        borderBottomColor:'#999999',
        backgroundColor:'#ffffff',
        borderTopColor:'#999999'
    },
    scrollCell:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-between'
    }
});

export default Home;