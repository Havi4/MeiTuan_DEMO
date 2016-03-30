'use strict';
import React, {
    StyleSheet,
    View,
    Text,

} from 'react-native';

import NavigationBar from 'react-native-navigationbar';
import BaseCSS from '../css/BaseCss';

class Mine extends React.Component {

    render(){
        return (
            <View style={BaseCSS.container}>
                <NavigationBar
                    backHidden={true}
                    barTintColor="white"
                    barStyle={styles.navBar}
                    title="我的"
                />
            </View>
        );
    }

}

let styles = StyleSheet.create({

});

export default Mine;