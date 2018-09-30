
import { StackNavigator } from 'react-navigation';

//引入三个界面文件，并设置引入的类
import Login from './pages/account/Login';
import Register from './pages/account/Register';

import ArticleList from './pages/article/ArticleList';

//注册导航界面
const ZineApp = StackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
          //headerTitle: '忘记密码',  //设置导航栏标题
          header: null,  //隐藏导航栏
      }
    },
    ArticleList: {
      screen: ArticleList,
      navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
          header: null,  //隐藏导航栏
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
          headerTitle: '返回',  //设置导航栏标题
      }
    }
});

export default ZineApp;

 