'use strict';
import React, {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import NavigationBar from 'react-native-navigationbar';

class Misc extends React.Component {

    render(){
        return (
            <NavigationBar
                backHidden={true}
                barTintColor="white"
                barStyle={styles.navBar}
                title="更多"
            />
        );
    }

}

let styles = StyleSheet.create({
    container:{
        flex:1
    }
});

export default Misc;