
// import { StackNavigator } from 'react-navigation';

import React from 'react';
import {
    createStackNavigator,
    createTabNavigator,
} from 'react-navigation';

import FontAwesome from 'react-native-vector-icons/FontAwesome'; //引入图标



//引入三个界面文件，并设置引入的类
import Login from './pages/account/Login';
import Register from './pages/account/Register';

//import ArticleList from './pages/article/ArticleList';
// import HomePage from './pages/home/HomePage';

import ArticleList from './pages/article/ArticleList';
import BrochureList from './pages/brochure/BrochureList';
import UserPage from './pages/user/UserPage';



//注册导航界面
// const ZineApp = StackNavigator({
//     Login: {
//       screen: Login,
//       navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
//           //headerTitle: '忘记密码',  //设置导航栏标题
//           header: null,  //隐藏导航栏
//       }
//     },
//     HomePage: {
//       screen: HomePage,
//       navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
//           header: null,  //隐藏导航栏
//       }
//     },
//     Register: {
//       screen: Register,
//       navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
//           headerTitle: '返回',  //设置导航栏标题
//       }
//     }
// });

// export default ZineApp;

 const AppTabNavigators =createTabNavigator({       //底部导航
    ArticleList: {
        screen:ArticleList,
        navigationOptions: {
            tabBarLabel: '文章',
            tabBarIcon: (({tintColor, focused}) => (    //加载小图标
               <FontAwesome
                    name={'newspaper-o'}
                    size={16}
                    style={{color:tintColor}}
               />
            ))
        },

    },
    BrochureList:{
        screen:BrochureList,
        navigationOptions:{
            tabBarLabel: '小册子',
            tabBarIcon: (({tintColor, focused}) => (
                <FontAwesome
                    name={'book'}
                    size={16}
                    style={{color:tintColor}}
                />
            ))

        }
    },
    UserPage:{
        screen:UserPage,
        navigationOptions:{
            tabBarLabel: '我',
            tabBarIcon: (({tintColor, focused}) => (
                <FontAwesome
                    name={'user'}
                    size={16}
                    style={{color:tintColor}}
                />
            ))

        }
    }

},{
    tabBarPosition:'bottom',//位置
    tabBarOptions: {
        showIcon: true,//是否显示图标！！！！！！！
        style: {
            height: 45,//底部导航的宽度
            backgroundColor: 'rgb(34, 207, 205)',//底部导航的颜色
        },
        labelStyle: {
            fontSize: 12,//字体大小
            marginTop:-2,//字体距离图标大小
        },

    }

});

export const AppStackNavigator=createStackNavigator({     //顶部导航
    Login: {
        screen: Login,
        navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
            //headerTitle: '忘记密码',  //设置导航栏标题
            header: null,  //隐藏导航栏
        }
      },
    Register: {
        screen: Register,
        navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
            headerTitle: '返回',  //设置导航栏标题
        }
    },
    TabNav:{
        screen:AppTabNavigators,
        navigationOptions:{
            header: null,  //隐藏导航栏
        }
    },

} );

export  default AppStackNavigator;

// //注册导航界面
// const ZineApp = StackNavigator({
//     Login: {
//       screen: Login,
//       navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
//           //headerTitle: '忘记密码',  //设置导航栏标题
//           header: null,  //隐藏导航栏
//       }
//     },
//     HomePage: {
//       screen: HomePage,
//       navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
//           header: null,  //隐藏导航栏
//       }
//     },
//     Register: {
//       screen: Register,
//       navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
//           headerTitle: '返回',  //设置导航栏标题
//       }
//     }
// });



 