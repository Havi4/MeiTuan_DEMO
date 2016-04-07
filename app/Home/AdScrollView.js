'use strict';
import React, {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
var screen = require('Dimensions').get('window');
const titles_first_data=["美食","电影","酒店","KTV","外卖","优惠买单","周边游","休闲娱乐","今日新单","丽人"];


class AdScrollView extends React.Component {

    render(){
        return (
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

export default AdScrollView;