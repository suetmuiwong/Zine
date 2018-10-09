import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    Image,
    FlatList
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'; //引入图标

export default class UserPage extends Component {
    // 构造
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        tabBarLabel: '我'
    };

    /**
     * 返回到登陆界面
     */
    backToLogin = () => {
        // const { goBack } = this.props.navigation; //获取navigation的goBack方法
        // goBack();  //返回上一界面
        const { navigate } = this.props.navigation;  //获取navigation的navigate方法
        navigate('Login');  //跳转到注册过的Home界面
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.item,styles.itemLogo]}>
                    <View style={styles.itemLeft}>
                      <Image style={[styles.userImg,styles.imgCircle]} source={require("../../img/02.png")} />
                       <View>
                         <Text style={styles.white}>Adog</Text>
                         <Text style={styles.yellow}>升级为会员</Text>
                       </View>
                    </View>
                    <View style={[styles.itemRight,styles.yellow]}>
                        <View style={styles.fontStyle}>
                          <FontAwesome name='user-circle-o' size={15}/>
                        </View>
                        <Text >进入专栏</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <Text>账号设置</Text>
                    </View>
                    <View style={styles.itemRight}>
                        <Text>1158568196@qq.com</Text>
                        <View style={styles.fontStyle}>
                          <FontAwesome name='angle-right' size={15} />
                        </View>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                       <View style={styles.fontStyle}>
                          <FontAwesome name='user-plus' size={15} />
                        </View>
                        <Text>邀请好友获得奖励</Text>
                    </View>
                    <View style={styles.itemRight}>
                        <FontAwesome name='angle-right' size={15} />
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                       <View style={styles.fontStyle}>
                          <FontAwesome name='gift' size={15} />
                       </View>
                        <Text>流量包</Text>
                    </View>
                    <View style={styles.itemRight}>
                        <FontAwesome name='angle-right' size={15} />
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                       <View style={styles.fontStyle}>
                          <FontAwesome name='times' size={15} />
                       </View>
                        <Text onPress={this.backToLogin} >退出登录</Text>
                    </View>
                    <View style={styles.itemRight}>
                       <FontAwesome name='angle-right' size={15} />
                    </View>
                </View>


                {/* <Text
                    style={styles.content}
                >登录成功!这是主页!</Text>
                <Button
                    onPress={this.backToLogin}  //添加点击事件  //设置按钮标题
                    style={styles.button}
                    title='点击返回登陆' /> */}
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
       // justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    item: {
        height: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomColor:'#e0e0e0',
        borderBottomWidth: 1,
    },
    itemLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemRight: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    itemLogo:{
        paddingTop:20,
        height:250,
        alignItems: 'flex-start',
        backgroundColor:'#126a7f',
    },
    userImg:{
        width:28,
        height:28,
    },
    imgCircle:{
        marginRight:10,
        alignItems:'center',
        justifyContent:'center',
        width: 28,
        height:28,
        borderRadius:15,
        paddingBottom:2
    },
    white:{
        color:'#fff',
    },
    yellow:{
        backgroundColor:'yellow',
        borderRadius:4,
        fontSize:12,
        paddingLeft:4,
        paddingRight:4,
    }
});
