'use strict';
import React, {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

import NavigationBar from 'react-native-navigationbar';
import BaseCSS from '../css/BaseCss';
import Test from './Test';

class Home extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this._next = this._next.bind(this);
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
                <TouchableHighlight onPress={this._next}
                >
                    <Text>你好</Text>
                </TouchableHighlight>
            </View>
        );
    }

    _next(){
        this.props.navigator.push({
            component:Test,
        })
    }

}

let styles = StyleSheet.create({
    
});

export default Home;