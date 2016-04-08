'use strict';
import React, {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

const timelimit_url = 'http://api.meituan.com/api/entry?uuid=088C82665074950B02152378305A6939BC11B996257658B48A8C3999C8904F22&name=brandarea&utm_term=6.6&utm_source=AppStore&latlng=31.222292%2C%20121.409874&utm_content=088C82665074950B02152378305A6939BC11B996257658B48A8C3999C8904F22&userid=157535075&utm_medium=iphone&movieBundleVersion=100&version_name=6.6&__skck=3c0cf64e4b039997339ed8fec4cddf05&__skua=7c48d372d4cf12e70c996b8b2afacea0&__skts=1459998611.026719&utm_campaign=AgroupBgroupD100H0&__skno=9BB9BBE6-E6A4-48A5-BE7E-D49AD6B3A136&__skcy=74Di2XRkcBBjg4Mdhi39jE042b8%3D&ci=10&__vhost=aop.meituan.com&msid=48E40C05-691C-4595-8F0F-99A44D0CDD212016-04-07-10-25569';

class LimitTime extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            timeData:null
        };
        this.getData();
    }

    componentWillMount(){

    }

    getData(){
        fetch(timelimit_url)
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
        const activityImgUrl = this.state.timeData===null? '':this.state.timeData.data[0].resource.activityArea.activityImgUrl;
        const mdcLogoUrl = this.state.timeData===null? '':this.state.timeData.data[0].resource.activityArea.deals.mdcLogoUrl;
        return (
            <View style={styles.bgContainer}>
                <View style={[{flex:1,borderRightWidth:0.5,borderRightColor:'#d8d8d8',flexDirection:'column'}]}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            style={[styles.activityArea_image]}
                            source={{uri:this.getImage(activityImgUrl)}}
                            resizeMode={Image.resizeMode.stretch}
                        />
                        <View style={styles.activityArea_deadLine_bg}>
                            <Text style={{fontSize:10,marginLeft:5,color:'#666666'}}>距离结束</Text>
                            <View style={{height:13,width:0.5,backgroundColor:'#d8d8d8',marginLeft:5}}/>
                            <Text style={styles.activityArea_deadLine_text}>05</Text>
                            <Text style={[styles.activityArea_deadLine_text,{color:'#d8d8d8'}]}>:</Text>
                            <Text style={styles.activityArea_deadLine_text}>05</Text>
                            <Text style={[styles.activityArea_deadLine_text,{color:'#d8d8d8'}]}>:</Text>
                            <Text style={styles.activityArea_deadLine_text}>05</Text>
                        </View>
                        <Image
                            style={[styles.activityArea_subImage]}
                            source={{uri:this.getImage(mdcLogoUrl)}}
                            resizeMode={Image.resizeMode.stretch}
                        />
                        <Text style={styles.activityArea_subTitle}>
                            {this.state.timeData===null? '':this.state.timeData.data[0].resource.activityArea.deals.brandname}
                        </Text>
                        <View style={{marginTop:5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:17,color:'#06c1ae'}}>
                                ￥{this.state.timeData===null? '':this.state.timeData.data[0].resource.activityArea.deals.value}
                            </Text>
                            <Image
                                style={styles.activityAre_discount_bg}
                                source={require('../images/discount_num_bg.png')}
                                resizeMode={Image.resizeMode.stretch}
                            />
                            <Text style={{marginLeft:-33,backgroundColor:'#ffedd9',color:'#ff7e16',textAlign:'center',height:18}}>
                                再减{parseInt(this.state.timeData===null? '':this.state.timeData.data[0].resource.activityArea.deals.value-this.state.timeData.data[0].resource.activityArea.deals.price)}{' '}
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={[{flex:1}]}>
                    <TouchableOpacity activeOpacity={0.5} style={{flex:1}}>
                        <View style={{flex:1,borderBottomWidth:0.5,borderBottomColor:'#d8d8d8',flexDirection:'row'}}>
                            <View style={{flexDirection:'column',flex:1}}>
                                <Text style={[styles.activityAre_right_main_title,{color:this.state.timeData===null? '#dddddd':this.state.timeData.data[0].resource.topicArea[0].maintitleColor}]}>
                                    {this.state.timeData===null? '':this.state.timeData.data[0].resource.topicArea[0].mainTitle}
                                </Text>
                                <Text style={{color:'#666666',fontSize:11,marginLeft:15,marginTop:5}}>
                                    {this.state.timeData===null? '':this.state.timeData.data[0].resource.topicArea[0].deputyTitle}
                                </Text>
                            </View>
                            <View style={{flex:1,justifyContent:'center'}}>
                                <Image
                                    style={{height:40,width:80,alignSelf:'center'}}
                                    source={{uri:this.state.timeData===null? '':this.state.timeData.data[0].resource.topicArea[0].entranceImgUrl}}
                                    resizeMode={Image.resizeMode.stretch}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} style={{flex:1}}>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <View style={{flexDirection:'column',flex:1}}>
                                <Text style={[styles.activityAre_right_main_title,{color:this.state.timeData===null? '#dddddd':this.state.timeData.data[0].resource.topicArea[0].maintitleColor}]}>
                                    {this.state.timeData===null? '':this.state.timeData.data[0].resource.topicArea[1].mainTitle}
                                </Text>
                                <Text style={{color:'#666666',fontSize:11,marginLeft:15,marginTop:5}}>
                                    {this.state.timeData===null? '':this.state.timeData.data[0].resource.topicArea[1].deputyTitle}
                                </Text>
                            </View>
                            <View style={{flex:1,justifyContent:'center'}}>
                                <Image
                                    style={{height:40,width:80,alignSelf:'center'}}
                                    source={{uri:this.state.timeData===null? '':this.state.timeData.data[0].resource.topicArea[1].entranceImgUrl}}
                                    resizeMode={Image.resizeMode.stretch}
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
        height:152,
        backgroundColor:'#ffffff',
        borderBottomWidth:0.5,
        borderBottomColor:'#d8d8d8',
        borderTopWidth:0.5,
        borderTopColor:'#d8d8d8',
        flexDirection:'row'
    },
    activityArea_image:{
        marginTop:0,
        height:28,
        width:100,
        alignSelf:'center'
    },
    activityArea_deadLine_bg:{
        marginTop:5,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d8d8d8',
        height:17,
        width:130,
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center'
    },
    activityArea_deadLine_text:{
        fontSize:12,
        marginLeft:2,
        color:'#ff786e'
    },
    activityArea_subImage:{
        marginTop:5,
        height:37,
        width:75,
        alignSelf:'center'
    },
    activityArea_subTitle:{
        marginTop:5,
        width:120,
        height:18,
        alignSelf:'center',
        color:'#747474',
        fontSize:17,
        textAlign:'center',

    },
    activityAre_discount_bg:{
        marginLeft:-5,
        height:18,
        width:50,
    },
    activityAre_right_main_title:{
        marginTop:18,
        fontSize:17,
        fontWeight:'500',
        marginLeft:15
    },

});
export default LimitTime;