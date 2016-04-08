'use strict';
import React, {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

const discount_url = 'http://api.meituan.com/group/v1/deal/topic/discount/city/10?uuid=088C82665074950B02152378305A6939BC11B996257658B48A8C3999C8904F22&msid=48E40C05-691C-4595-8F0F-99A44D0CDD212016-04-07-10-25569&utm_term=6.6&utm_source=AppStore&latlng=31.222330%2C121.409775&utm_content=088C82665074950B02152378305A6939BC11B996257658B48A8C3999C8904F22&userid=157535075&utm_medium=iphone&movieBundleVersion=100&version_name=6.6&__skck=3c0cf64e4b039997339ed8fec4cddf05&__skua=7c48d372d4cf12e70c996b8b2afacea0&__skts=1459995965.632873&utm_campaign=AgroupBgroupD100H0&__skno=B6C68B53-A124-4D40-A487-8A73E77A6868&__skcy=rS%2F550y3ROb6RGj5dVlv7sBsgbQ%3D&ci=10&__vhost=api.mobile.meituan.com&client=iphone';

class Discount extends React.Component {

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            timeData:null
        };
        this.getData();
    }

    getData(){
        fetch(discount_url)
            .then((response) => response.json())
            .catch((error) => {
                console.log(error);
            })
            .then((responseData) => {
                if (responseData.data) {
                    console.log(responseData);
                    this.setState({
                        timeData:responseData
                    })
                }
            }).done();
    }

    render(){
        return (
            <View style={[styles.bgContainer,{flexDirection:'column'}]}>
                <View style={{flex:1,borderBottomColor:'#d8d8d8',borderBottomWidth:0.5,flexDirection:'row'}}>
                    <TouchableOpacity activeOpacity={0.5} style={{flex:1}}>
                        <View style={{flex:1,flexDirection:'row',borderRightWidth:0.5,borderRightColor:'#d8d8d8'}}>
                            <View style={{flexDirection:'column',flex:1.5}}>
                                <Text style={[styles.activityAre_right_main_title,{color:this.state.timeData===null? '#dddddd':this.state.timeData.data[0].typeface_color}]}>
                                    {this.state.timeData===null? '':this.state.timeData.data[0].maintitle}
                                </Text>
                                <Text style={{color:'#666666',fontSize:11,marginLeft:15,marginTop:5}}>
                                    {this.state.timeData===null? '':this.state.timeData.data[0].deputytitle}
                                </Text>
                            </View>
                            <View style={{flex:1,justifyContent:'center'}}>
                                <Image
                                    style={{height:60,width:60,alignSelf:'center'}}
                                    source={{uri:this.state.timeData===null? '':this.getImage(this.state.timeData.data[0].imageurl)}}
                                    resizeMode={Image.resizeMode.contain}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} style={{flex:1}}>
                        <View style={{flex:1,flexDirection:'row',borderRightWidth:0.5,borderRightColor:'#d8d8d8'}}>
                            <View style={{flexDirection:'column',flex:1.5}}>
                                <Text style={[styles.activityAre_right_main_title,{color:this.state.timeData===null? '#dddddd':this.state.timeData.data[1].typeface_color}]}>
                                    {this.state.timeData===null? '':this.state.timeData.data[1].maintitle}
                                </Text>
                                <Text style={{color:'#666666',fontSize:11,marginLeft:15,marginTop:5}}>
                                    {this.state.timeData===null? '':this.state.timeData.data[1].deputytitle}
                                </Text>
                            </View>
                            <View style={{flex:1,justifyContent:'center'}}>
                                <Image
                                    style={{height:60,width:60,alignSelf:'center'}}
                                    source={{uri:this.state.timeData===null? '':this.getImage(this.state.timeData.data[1].imageurl)}}
                                    resizeMode={Image.resizeMode.contain}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={{flex:1,flexDirection:'row'}}>
                    <TouchableOpacity activeOpacity={0.5} style={{flex:1}}>
                        <View style={{flex:1,flexDirection:'row',borderRightWidth:0.5,borderRightColor:'#d8d8d8'}}>
                            <View style={{flexDirection:'column',flex:1.5}}>
                                <Text style={[styles.activityAre_right_main_title,{color:this.state.timeData===null? '#dddddd':this.state.timeData.data[2].typeface_color}]}>
                                    {this.state.timeData===null? '':this.state.timeData.data[2].maintitle}
                                </Text>
                                <Text style={{color:'#666666',fontSize:11,marginLeft:15,marginTop:5}}>
                                    {this.state.timeData===null? '':this.state.timeData.data[2].deputytitle}
                                </Text>
                            </View>
                            <View style={{flex:1,justifyContent:'center'}}>
                                <Image
                                    style={{height:60,width:60,alignSelf:'center'}}
                                    source={{uri:this.state.timeData===null? '':this.getImage(this.state.timeData.data[2].imageurl)}}
                                    resizeMode={Image.resizeMode.contain}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} style={{flex:1}}>
                        <View style={{flex:1,flexDirection:'row',borderRightWidth:0.5,borderRightColor:'#d8d8d8'}}>
                            <View style={{flexDirection:'column',flex:1.5}}>
                                <Text style={[styles.activityAre_right_main_title,{color:this.state.timeData===null? '#dddddd':this.state.timeData.data[3].typeface_color}]}>
                                    {this.state.timeData===null? '':this.state.timeData.data[3].maintitle}
                                </Text>
                                <Text style={{color:'#666666',fontSize:11,marginLeft:15,marginTop:5}}>
                                    {this.state.timeData===null? '':this.state.timeData.data[3].deputytitle}
                                </Text>
                            </View>
                            <View style={{flex:1,justifyContent:'center'}}>
                                <Image
                                    style={{height:60,width:60,alignSelf:'center'}}
                                    source={{uri:this.state.timeData===null? '':this.getImage(this.state.timeData.data[3].imageurl)}}
                                    resizeMode={Image.resizeMode.contain}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }

    getImage(url): string{
        // return ('http://p0.meituan.net/200.120/deal/667c7aa92a0c04779e266bbfa7d77c64316233.jpg');
        if(url.search('w.h') === -1){
            return (url);
        } else {
            url = url.replace('w.h', '200.120');
            return (url);
        }
    }

}

let styles = StyleSheet.create({
    bgContainer:{
        flex:1,
        height:142,
        backgroundColor:'#ffffff',
        borderBottomWidth:0.5,
        borderBottomColor:'#d8d8d8',
        borderTopWidth:0.5,
        borderTopColor:'#d8d8d8',
        flexDirection:'row'
    },
    activityAre_right_main_title:{
        marginTop:18,
        fontSize:17,
        fontWeight:'500',
        marginLeft:15
    },
});

export default Discount;