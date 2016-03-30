'use strict';
import React, {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

import NavigationBar from 'react-native-navigationbar';
import PageControl from 'react-native-page-control';
import BaseCSS from '../css/BaseCss';
var screen = require('Dimensions').get('window');

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
                <ScrollView
                    ref="ad"
                    pagingEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    onScroll={this.onScroll}
                    scrollEventThrottle={16}>
                    <View style={{width:screen.width,  height:164,backgroundColor:'red'}}>
                        <Text>page1</Text>
                    </View>
                    <View style={{width:screen.width,  height:164,backgroundColor:'yellow'}}>
                        <Text>page2</Text>
                    </View>
                </ScrollView>
                <PageControl style={{position:'absolute', left:10, right:19, top:215}}
                    numberOfPages={2}
                    currentPage={this.state.currentPage}
                    hidesForSinglePage={true}
                    pageIndicatorTintColor='gray'
                    currentPageIndicatorTintColor='white'
                    indicatorStyle={{borderRadius: 5}}
                    currentIndicatorStyle={{borderRadius: 5}}
                    indicatorSize={{width:8, height:8}}
                    onPageIndicatorPress={this.onItemTap} />
            </View>
        );
    }

    _next(){
        this.props.navigator.push({
            component:Test,
        })
    }

    onScroll(event){
        var offsetX = event.nativeEvent.contentOffset.x,
            pageWidth = screen.width - 10;
        this.setState({
            currentPage: (Math.floor((offsetX - pageWidth / 2) / pageWidth) + 1)
        });
    }

}

let styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

export default Home;