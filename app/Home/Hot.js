'use strict';
import React, {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

const hot_url = 'http://api.meituan.com/api/entry?uuid=088C82665074950B02152378305A6939BC11B996257658B48A8C3999C8904F22&name=hotcate&utm_term=6.6&utm_source=AppStore&latlng=31.199623%2C121.485419&utm_content=088C82665074950B02152378305A6939BC11B996257658B48A8C3999C8904F22&userid=157535075&utm_medium=iphone&movieBundleVersion=100&version_name=6.6&__skck=3c0cf64e4b039997339ed8fec4cddf05&__skua=7c48d372d4cf12e70c996b8b2afacea0&__skts=1460035694.732049&utm_campaign=AgroupBgroupD100H0&__skno=A9731FE3-45A9-4CBA-8B0C-4E0AA458E2A2&__skcy=dvPHdljO0UOfKLvHXlQU4Mz3OnI%3D&ci=10&__vhost=aop.meituan.com&msid=48E40C05-691C-4595-8F0F-99A44D0CDD212016-04-07-21-12369';

class Hot extends React.Component {

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
        fetch(hot_url)
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
            <View style={[styles.bgContainer,{flexDirection:'column',flex:1}]}>
                <View style={{height:40,flexDirection:'row',justifyContent:'space-around'}}>
                    <View style={{height:40,flexDirection:'row',alignItems:'center',flex:1}}>
                        <Image
                            style={{height:15,width:15,marginLeft:12}}
                            source={require('../images/icon_homepage_hotChannel@3x.png')}
                        />
                        <Text style={{marginLeft:5,fontSize:12}}>热门频道</Text>
                    </View>
                    <View style={{height:40,flexDirection:'row',alignItems:'center',flex:1,justifyContent:'flex-end'}}>
                        <Text style={{marginRight:5,fontSize:12,color:'#999999'}}>查看全部</Text>
                        <Image
                            style={{height:10,width:5,marginRight:12}}
                            source={require('../images/icon_homepage_hotTopicArrow.png')}
                        />
                    </View>
                </View>

                <View style={{flexDirection:'row',height:89}}>
                    <View style={{flex:1,flexDirection:'row',marginLeft:5,marginRight:1,marginBottom:1,backgroundColor:'#f8f8f8'}}>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <Text style={{marginLeft:10,marginTop:15,fontWeight:'500',color:'#666666'}}>
                                {this.state.timeData===null? '':this.state.timeData.data[0].resource.cateArea[0].mainTitle}
                            </Text>
                            <Text style={{marginLeft:10,marginTop:10,fontSize:11,color:'#999999'}}>
                                {this.state.timeData===null? '':this.state.timeData.data[0].resource.cateArea[0].deputyTitle}
                            </Text>
                            <Text style={{marginLeft:10,marginTop:10,width:30,height:14,borderRadius:7.5,borderColor:'#fa7251',color:'#fa7251',borderWidth:1,fontSize:10,textAlign:'center'}}>
                                {this.state.timeData===null? '':this.state.timeData.data[0].resource.cateArea[0].otherDesc}
                            </Text>
                        </View>
                        <View style={{flex:1,alignItems:'center'}}>
                            <Image
                                style={{marginTop:5,height:75,width:75,alignSelf:'auto'}}
                                source={{uri:this.state.timeData===null? '':this.getImage(this.state.timeData.data[0].resource.cateArea[0].entranceImgUrl)}}
                                resizeMode={Image.resizeMode.contain}
                            />
                        </View>
                    </View>

                    <View style={{flex:1,flexDirection:'row',marginLeft:1,marginRight:5,marginBottom:1,backgroundColor:'#f8f8f8'}}>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <Text style={{marginLeft:10,marginTop:15,fontWeight:'500',color:'#666666'}}>
                                {this.state.timeData===null? '':this.state.timeData.data[0].resource.cateArea[1].mainTitle}
                            </Text>
                            <Text style={{marginLeft:10,marginTop:10,fontSize:11,color:'#999999'}}>
                                {this.state.timeData===null? '':this.state.timeData.data[0].resource.cateArea[1].deputyTitle}
                            </Text>
                            <Text style={{marginLeft:10,marginTop:10,width:30,height:14,borderRadius:7.5,borderColor:'#fa7251',color:'#fa7251',borderWidth:1,fontSize:10,textAlign:'center'}}>
                                {this.state.timeData===null? '':this.state.timeData.data[0].resource.cateArea[1].otherDesc}
                            </Text>
                        </View>
                        <View style={{flex:1,alignItems:'center'}}>
                            <Image
                                style={{marginTop:5,height:75,width:75,alignSelf:'auto'}}
                                source={{uri:this.state.timeData===null? '':this.getImage(this.state.timeData.data[0].resource.cateArea[1].entranceImgUrl)}}
                                resizeMode={Image.resizeMode.contain}
                            />
                        </View>
                    </View>
                </View>

                <View style={{flexDirection:'row',height:115}}>
                    <View style={{flex:1,alignItems:'center',marginLeft:5,marginTop:1,marginRight:1,backgroundColor:'#f8f8f8'}}>
                        <Text style={{marginTop:10,fontWeight:'500',color:'#666666'}}>
                            {this.state.timeData===null? '':this.state.timeData.data[0].resource.cateArea[2].mainTitle}
                        </Text>
                        <Text style={{fontSize:11,color:'#999999',marginTop:5}}>
                            {this.state.timeData===null? '':this.state.timeData.data[0].resource.cateArea[2].deputyTitle}
                        </Text>
                        <Image
                            style={{marginTop:0,height:75,width:75,alignSelf:'auto'}}
                            source={{uri:this.state.timeData===null? '':this.getImage(this.state.timeData.data[0].resource.cateArea[2].entranceImgUrl)}}
                            resizeMode={Image.resizeMode.contain}
                        />
                    </View>
                    <View style={{flex:1,alignItems:'center',marginLeft:1,marginTop:1,marginRight:1,backgroundColor:'#f8f8f8'}}>
                        <Text style={{marginTop:10,fontWeight:'500',color:'#666666'}}>
                            {this.state.timeData===null? '':this.state.timeData.data[0].resource.cateArea[3].mainTitle}
                        </Text>
                        <Text style={{fontSize:11,color:'#999999',marginTop:5}}>
                            {this.state.timeData===null? '':this.state.timeData.data[0].resource.cateArea[3].deputyTitle}
                        </Text>
                        <Image
                            style={{marginTop:0,height:75,width:75,alignSelf:'auto'}}
                            source={{uri:this.state.timeData===null? '':this.getImage(this.state.timeData.data[0].resource.cateArea[3].entranceImgUrl)}}
                            resizeMode={Image.resizeMode.contain}
                        />
                    </View>
                    <View style={{flex:1,alignItems:'center',marginLeft:1,marginTop:1,marginRight:1,backgroundColor:'#f8f8f8'}}>
                        <Text style={{marginTop:10,fontWeight:'500',color:'#666666'}}>
                            {this.state.timeData===null? '':this.state.timeData.data[0].resource.cateArea[4].mainTitle}
                        </Text>
                        <Text style={{fontSize:11,color:'#999999',marginTop:5}}>
                            {this.state.timeData===null? '':this.state.timeData.data[0].resource.cateArea[4].deputyTitle}
                        </Text>
                        <Image
                            style={{marginTop:0,height:75,width:75,alignSelf:'auto'}}
                            source={{uri:this.state.timeData===null? '':this.getImage(this.state.timeData.data[0].resource.cateArea[4].entranceImgUrl)}}
                            resizeMode={Image.resizeMode.contain}
                        />
                    </View>
                    <View style={{flex:1,alignItems:'center',marginLeft:1,marginTop:1,marginRight:5,backgroundColor:'#f8f8f8'}}>
                        <Text style={{marginTop:10,fontWeight:'500',color:'#666666'}}>
                            {this.state.timeData===null? '':this.state.timeData.data[0].resource.cateArea[5].mainTitle}
                        </Text>
                        <Text style={{fontSize:11,color:'#999999',marginTop:5}}>
                            {this.state.timeData===null? '':this.state.timeData.data[0].resource.cateArea[5].deputyTitle}
                        </Text>
                        <Image
                            style={{marginTop:0,height:75,width:75,alignSelf:'auto'}}
                            source={{uri:this.state.timeData===null? '':this.getImage(this.state.timeData.data[0].resource.cateArea[5].entranceImgUrl)}}
                            resizeMode={Image.resizeMode.contain}
                        />
                    </View>
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
        height:253,
        backgroundColor:'#ffffff',
        borderBottomWidth:0.5,
        borderBottomColor:'#d8d8d8',
        borderTopWidth:0.5,
        borderTopColor:'#d8d8d8',
        flexDirection:'row'
    },
});

export default Hot;