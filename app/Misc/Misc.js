'use strict';
import React, {
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';

import NavigationBar from 'react-native-navigationbar';
import PageControl from 'react-native-page-control';
import BaseCSS from '../css/BaseCss';

class Misc extends React.Component {

    render(){
        return (
            <View style={BaseCSS.container}>
                <NavigationBar
                    backHidden={true}
                    barTintColor="white"
                    barStyle={styles.navBar}
                    title="更多"
                />
                <ScrollView>
                    <PageControl style={{position:'absolute', left:0, right:0, bottom:10}}
                        numberOfPages={3}
                        currentPage={1}
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

    _setTitlePageView(){
        return(
            <View style={{backgroundColor:'red'}}>

            </View>);
    }

}

let styles = StyleSheet.create({

});

export default Misc;