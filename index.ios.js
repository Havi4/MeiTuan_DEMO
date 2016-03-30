/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    TabBarIOS,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Home from './app/Home/Home';
import Merchant from './app/Merchant/Merchant';
import Mine from './app/Mine/Mine';
import Misc from './app/Misc/Misc';

const SelectTab = {
    Home:'home',
    Merchant:'merchant',
    Mine:'mine',
    Misc:'misc'
};

class MeiTuan_DEMO extends Component {
    //进行初始化,初始化一些状态
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab:'home'
        };
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
                    renderIcon={() => <Image source={require('./app/images/icon_tabbar_home.png')} style={styles.tabBarImage}/>}
                    renderSelectedIcon={() => <Image source={require('./app/images/icon_tabbar_home_selected.png')} style={styles.tabBarImage}/>}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    {this._renderSubViews()}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'merchant'}
                    title="商家"
                    renderIcon={() => <Image source={require('./app/images/icon_tabbar_merchant_normal.png')} style={styles.tabBarImage}/>}
                    renderSelectedIcon={() => <Image source={require('./app/images/icon_tabbar_merchant_selected.png')} style={styles.tabBarImage}/>}
                    onPress={() => this.setState({ selectedTab: 'merchant' })}>
                    {this._renderSubViews()}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}
                    title="我的"
                    renderIcon={() => <Image source={require('./app/images/icon_tabbar_mine.png')} style={styles.tabBarImage}/>}
                    renderSelectedIcon={() => <Image source={require('./app/images/icon_tabbar_mine_selected.png')} style={styles.tabBarImage}/>}
                    onPress={() => this.setState({ selectedTab: 'mine' })}>
                    {this._renderSubViews()}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'misc'}
                    title="更多"
                    renderIcon={() => <Image source={require('./app/images/icon_tabbar_misc.png')} style={styles.tabBarImage}/>}
                    renderSelectedIcon={() => <Image source={require('./app/images/icon_tabbar_misc_selected.png')} style={styles.tabBarImage}/>}
                    onPress={() => this.setState({ selectedTab: 'misc' })}>
                    {this._renderSubViews()}
                </TabNavigator.Item>
            </TabNavigator>
        );
    }

    _renderSubViews(){
        switch (this.state.selectedTab){
            case SelectTab.Home:{
                return (<Home/>);
            }
            case SelectTab.Merchant:{
                return (<Merchant/>);
            }
            case SelectTab.Mine:{
                return (<Mine/>);

            }
            case SelectTab.Misc:{
                return (<Misc/>);
            }
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    tabBarImage:{
        height:25,
        width:25
    }
});

AppRegistry.registerComponent('MeiTuan_DEMO', () => MeiTuan_DEMO);