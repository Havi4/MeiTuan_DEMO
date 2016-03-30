'use strict';
import React, {
    StyleSheet,
    View,
    Text,

} from 'react-native';

import NavigationBar from 'react-native-tab-navigator';

class Home extends React.Component {

    render(){
        return (
            <View style={{backgroundColor:'red'}}>
                <NavigationBar
                    barTintColor="white"
                    barStyle={styles.navBar}
                    title="历史"
                />
                <Text style={{marginTop:100}}>年后</Text>
            </View>
        );
    }

}

let styles = StyleSheet.create({

});

export default Home;