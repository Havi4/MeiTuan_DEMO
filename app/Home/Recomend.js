'use strict';
import React, {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

class Recomend extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            rowData : props.rowData,
        };
    }

    render(){
        return (
            <TouchableOpacity
                activeOpacity={0.5}
            >
                <View style={styles.bgContainer}>
                    <View style={{width:105,justifyContent:'center',alignItems:'center'}}>
                        <Image
                            style={{height:82,width:82,borderRadius:2}}
                            source={{uri:this.getImage(this.state.rowData.imageUrl)}}
                            resizeMode={Image.resizeMode.contain}
                        />
                    </View>
                    <View style={{flex:1,flexDirection:'column'}}>
                        <View style={{flex:1,marginTop:5,marginRight:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                            <Text style={{fontWeight:'normal',color:this.state.rowData.color.title,fontSize:15}}>
                                {this.state.rowData.title}
                            </Text>
                            <Text style={{color:this.state.rowData.color.topRightInfo,fontSize:11}}>
                                {this.state.rowData.topRightInfo}
                            </Text>

                        </View>
                        <View style={{flex:1.2,marginRight:20}}>
                            <Text style={{flex:1,fontSize:11,color:this.state.rowData.color.subTitle}}>
                                {this.state.rowData.subTitle}
                            </Text>
                        </View>
                        <View style={{flex:1,flexDirection:'row',marginTop:5,marginRight:10,alignItems:'center',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{color:this.state.rowData.color.mainMessage,fontWeight:'400',fontSize:15}}>
                                    {this.state.rowData.mainMessage}{this.state.rowData.mainMessage2}
                                </Text>
                                {this.state.rowData.subMessage ?
                                    (<Text style={{marginLeft:5,color:this.state.rowData.color.subMessage,fontSize:10}}>
                                        {this.state.rowData.subMessage}
                                    </Text>):
                                    (<Text style={{textAlign:'center',textAlignVertical:'center',marginLeft:5,borderRadius:2,padding:1,borderColor:'#ff9900',borderWidth:1,color:'#ff9900',fontSize:9}}>
                                        {this.state.rowData.campaign.tag}
                                    </Text>)}
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:this.state.rowData.color.bottomRightInfo,fontSize:10}}>
                                    {this.state.rowData.bottomRightInfo}
                                </Text>
                            </View>

                        </View>
                    </View>
                </View>
            </TouchableOpacity>

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
        height:105,
        borderBottomWidth:0.5,
        borderBottomColor:'#d8d8d8',
        backgroundColor:'#ffffff',
        flexDirection:'row'
    }
});

export default Recomend;