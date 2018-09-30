import UiConstants from './UiConstants'
import {StyleSheet, PixelRatio, Dimensions} from 'react-native'
import * as Devicefont from '../utils/Devicefont'

var Platform = require('Platform');
const dp2px = dp => PixelRatio.getPixelSizeForLayoutSize(dp);
const px2dp = px => PixelRatio.roundToNearestPixel(px);
let designSize = {width: 720, height: 1280}; //假设设计尺寸为：720*1280
let pxRatio = PixelRatio.get();
let win_width = Dimensions.get("window").width;
let win_height = Dimensions.get("window").height;
let width = dp2px(win_width);
let height = dp2px(win_height);
let design_scale = designSize.width / width;
height = height * design_scale
let scale = 1 / pxRatio / design_scale;


export default commonStyles = StyleSheet.create({


    container: {
        width: width,
        height: height,
        transform: [{translateX: -width * .5}, {translateY: -height * .5}, {scale: scale}, {translateX: width * .5}, {translateY: height * .5}]
    },
    flexRow: {
        flexDirection: 'row'
    },
    titleStyle: {
        color: '#333',
        // fontFamily: 'PingFangSC-Medium',
        fontSize:18
        // fontSize:Devicefont.pxToDp(36)
    },
    fontStyle: {
        fontFamily: 'iconfont',
        fontSize: 24
    },
    arrows: {
        color: '#9FA0A0'
        // color: '#999'
    },

    tabIcon: {
        width: 20,
        height: 20,
        fontFamily: 'iconfont',
        fontSize: 20,
        color: '#666',

    },
    tabIconSelect: {
        width: 20,
        height: 20,
        fontFamily: 'iconfont',
        fontSize: 20,
        color: UiConstants.colors.pink,
        backgroundColor: 'rgba(0,0,0,0)'

    },
    tabTitle: {
        color: '#999',

    },
    tabTitleSelect: {
        color: 'yellow',
    },
    //按钮内选中标记
    checkedIcon: {
        position: 'absolute',
        zIndex:-2,
        bottom: (() => {
            if (Platform.OS === 'ios') {
                return -3
            } else {
                return -1
            }
        })(),
        right: -1,
        color: '#ff005f',
        zIndex: 1,
        alignSelf: 'flex-end',
        fontSize:Devicefont.pxToDp(36)
    },
    //底部线
    nameBottomBorder: {
        // backgroundColor: '#FF005F',
        // width: 'auto',
        // height: 10,
        // borderRadius: 10,
        // opacity: .2,
        // position: 'absolute',
        // left: 0,
        // right: 0,
        // bottom: 2
    },
    textInput: {
        flex: 1.0,
        padding: 0,
        color: '#333',
    },
    inputVerCode: {
        flex: 1,
        flexDirection: 'row',
    },
    cellRight: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end'
    },
    numberStyle:{
        marginLeft:Devicefont.pxToDp(6),
        marginRight:Devicefont.pxToDp(6),
    }


})



