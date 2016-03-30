'use strict';
import React, {
    StyleSheet,
    View,
    Text,

} from 'react-native';

import NavigationBar from 'react-native-navigationbar';

class Mine extends React.Component {

    render(){
        return (
            <View style={styles.container}>
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
    container:{
        flex:1
    }
});

export default Mine;