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

export default class BrochureList extends Component {
    // 构造
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        tabBarLabel: '小册子'
    };
    refreshing() {
        // let timer = setTimeout(() => {
        //     clearTimeout(timer)
        //     alert('刷新成功')
        // }, 1500)
    }
    _onload() {
        // let timer = setTimeout(() => {
        //     clearTimeout(timer)
        //     alert('加载成功')
        // }, 1500)
    }

    _renderItem = (item) => {
        var txt = '标题' + item.index ;
        return (
            <View style={styles.listContent}>
                <Image  style={styles.listContentImg} source={require("../../img/02.png")} />
                <Text>{txt}</Text>
                <Text >55分钟前</Text>
            </View>
        );


    }

    _header = () => {
        return <Text style={styles.listTag}>九月</Text>;
    }

    // _footer = () => {
    //     return <Text style={[styles.txt,{backgroundColor:'black'}]}>这是尾部</Text>;
    // }

    _separator = () => {
        return <View style={{ height: 2, backgroundColor: 'yellow' }} />;
    }



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
        var data = [];
        for (var i = 0; i < 3; i++) {
            data.push({ key: i, title: i + '' });
        }

        return (
            <View
                style={styles.container}>

                <View style={styles.headerTag}>
                    <View style={styles.headerTagLeft}>
                        <Text>小册子</Text>
                        <Text >/2</Text>
                    </View>
                    <View style={styles.headerTagRight}>
                      <View style={styles.fontStyle}>
                          <FontAwesome name='sort-amount-desc' size={15} />
                      </View>
                      <View style={styles.fontStyle}>
                          <FontAwesome name='plus' size={15} />
                      </View>
                    </View>
                </View>

                <FlatList
                    style={styles.flatListStyle}
                    ref={(flatList) => this._flatList = flatList}
                    ListHeaderComponent={this._header}
                    // ListFooterComponent={this._footer}
                    // ItemSeparatorComponent={this._separator}
                    renderItem={this._renderItem}
                    onRefresh={this.refreshing}
                    refreshing={false}
                    onEndReachedThreshold={0}
                    onEndReached={
                        this._onload
                    }
                    numColumns={2}
                    // columnWrapperStyle={{ marginLeft: 20 }}

                    //horizontal={true}

                    getItemLayout={(data, index) => (
                        { length: 65, offset: (65 + 2) * index, index }
                    )}

                    data={data}>
                </FlatList>

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
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    headerTag: {
        height: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTagLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTagRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    fontStyle:{
        marginLeft:10,
        marginRight:10,
    },
    flatListStyle:{
      margin:15,
    },
    listTag:{
      margin:15,
      width:45,
      height:28,
      fontSize: 14,
      textAlign: 'center',
      textAlignVertical: 'center',
      backgroundColor:'#1baacc5e',
      borderRadius: 4,
    },
    listContent:{
       width:140,
       marginTop:15,
       marginLeft:15,
       marginRight:15,
    },
    listContentImg:{
        width:140,
        height:80,
    }
});
