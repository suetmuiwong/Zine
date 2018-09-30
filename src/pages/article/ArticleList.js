import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    FlatList
} from 'react-native';

export default class ArticleList extends Component {
    // 构造
    constructor(props) {
        super(props);
    }
    refreshing(){
        let timer =  setTimeout(()=>{
                    clearTimeout(timer)
                    alert('刷新成功')
                },1500)
    }
    _onload(){
        let timer =  setTimeout(()=>{
            clearTimeout(timer)
            alert('加载成功')
        },1500)
    }

    _renderItem = (item) => {
        var txt = '第' + item.index + '个' + ' title=' + item.item.title;
        var bgColor = item.index % 2 == 0 ? 'red' : 'blue';
        return <Text style={[{flex:1,height:100,backgroundColor:bgColor},styles.txt]}>{txt}</Text>
    }

    _header = () => {
        return <Text style={[styles.txt,{backgroundColor:'black'}]}>九月</Text>;
    }

    // _footer = () => {
    //     return <Text style={[styles.txt,{backgroundColor:'black'}]}>这是尾部</Text>;
    // }

    _separator = () => {
        return <View style={{height:2,backgroundColor:'yellow'}}/>;
    }



    /**
     * 返回到登陆界面
     */
    backToLogin = () => {
        const { goBack } = this.props.navigation; //获取navigation的goBack方法
        goBack();  //返回上一界面
    }

    render() {
        var data = [];
        for (var i = 0; i < 6; i++) {
            data.push({key: i, title: i + ''});
        }

        return (
            <View
                style={styles.container}>

                <View>
                    <View> 
                        <Text>文章</Text>
                        <Text >/6</Text>
                    </View>
                    <View> 
                        <Text>标签</Text>
                        <Text >检索</Text>
                        <Text >排序</Text>
                    </View>
                </View>

                <FlatList
                        ref={(flatList)=>this._flatList = flatList}
                        ListHeaderComponent={this._header}
                        // ListFooterComponent={this._footer}
                        ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItem}
                        onRefresh={this.refreshing}
                        refreshing={false}
                        onEndReachedThreshold={0}
                        onEndReached={
                            this._onload
                        }
                        numColumns ={3}
                        columnWrapperStyle={{borderWidth:2,borderColor:'black',paddingLeft:20}}

                        //horizontal={true}

                        getItemLayout={(data,index)=>(
                        {length: 100, offset: (100+2) * index, index}
                        )}

                        data={data}>
                    </FlatList>

                <Text
                    style={styles.content}
                >登录成功!这是主页!</Text>
                <Button
                    onPress={this.backToLogin}  //添加点击事件  //设置按钮标题
                    style={styles.button}
                    title='点击返回登陆'/> 
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    // content: {
    //     fontSize: 40,
    // },
    content:{
        // width:width,
        // height:height,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    },
    cell:{
        height:100,
        backgroundColor:'purple',
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor:'#ececec',
        borderBottomWidth:1

    },
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }
});
 