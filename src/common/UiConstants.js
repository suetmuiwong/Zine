import {Dimensions,Platform} from 'react-native';
import * as Devicefont from "../utils/Devicefont";

let window ={
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
}
let colors={
    themeColor:'rgb(217,51,58)',
    flight:'rgb(253,135,125)',
    flightArrival:'rgb(253,173,140)',
    hotel:'rgb(111,183,160)',
    seeingsigh:'rgb(170,103,108)',
    visa:'rgb(42,180,120)',
    wifi:'rgb(170,103,108)',
    phoneCall:'rgb(170,103,108)',
    secure:'rgb(125,158,101)',
    earlyMorning:'rgb(80,160,167)',
    morning:'rgb(113,200,254)',
    am:'rgb(23,103,108)',
    pm:'rgb(125,158,101)',
    night:'rgb(159,122,173)',
    recommand:'rgb(243,75,146)',
    green:'rgb(21,158,125)',
    gray:'rgb(238,238,238)',
    orderClose:'#23735e',
    statusBar:'white',
    pink:'#ff005f',
    line:'#EEEEEE',
    tktGray:'#999999',
    vertical:'#cdcdcd',

}

let fontWeight={
    Medium:'500',
}


let seat={
     seatMargin:5,
     seatWidth:60,
     seatHeight:60,
     seatMarginSmall:1,
     seatWidthSmall:5,
     seatHeightSmall:5,
}


let justFontSize=0;
let navivgatorTop=0;
let navigatorHeight=44;

if(Platform.OS=='ios')
{
    navivgatorTop= Devicefont.isIphoneX()? 42:22;
    navigatorHeight=Devicefont.isIphoneX()? 88:70;
}





Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};





export default {
    window:window,
    colors:colors,
    justFontSize:justFontSize,

    CurrentUser:'currentUser',
    loginUser:null,
    showAccountNo:null,
    IndexSwipe:'INDEXSWIPE',
    photoGroupDatas:null,
    IMInfo:null,
    tabbar:null,
    INDEXSEARCH:'INDEXSEARCH',
    //iconfont:{fontFamily:'iconfont'},
    iconfont:'iconfont',
    normalFont:'PingFangSC-Regular',
    iconfontInfo:(fontInfo)=>{String.fromCharCode(fontInfo)},
    navigatorHeight:navigatorHeight,
    navivgatorTop:navivgatorTop,
    holdImg:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=902957917,3639658485&fm=27&gp=0.jpg',
    normalFontSize:15,
    detailFontSize:14,
    seat:seat,
    adapterHeight:64*2,
    firstLauch:'FIRSTLAUNCH',
    fontWeight:fontWeight,
    USERS:'USERS',
    HADGUIDANCE:'HADGUIDANCE',
    recentCitysKey:'RECENTCITYSKEY',
    recentCitys:null,
    hotCityKey:'HOTCITYKEY',
    hotCity:[],
    initThirdLogin:null,



    // version:'1.0.4.62-禅',
    version:'1.2.1',
    AppVersion:'national',//国内版
    // AppVersion:'international',//国际版

}
