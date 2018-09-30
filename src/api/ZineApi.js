
/**
 * 注所有的接口来于https://zine.la官方网站
 * （不用于商业）
 * 请求数据格式：content-type: application/json  
 */
import HttpUtils from "../utils/HttpUtils";

const API_URL = 'https://zine.la/api'
/**
 * GET
 * 从缓存中读取数据
 * @param isCache: 是否缓存
 * @param url 请求url
 * @param params 请求参数
 * @param isCache 是否缓存
 * @param callback 是否有回调函数
 * @returns {value\promise}
 * 返回的值如果从缓存中取到数据就直接换行数据，或则返回promise对象
 */
const fetchData = (isCache, type) => (url, params, callback)  => {

  url = `${API_URL}${url}`
  console.log("==========6666")
  console.log(url)

 // const fetchFunc = () => {
      console.log("====执行")
    let promise = type === 'get' ? HttpUtils.getRequest(url, params) : HttpUtils.postRequrst(url, params)
    if (callback && typeof callback === 'function') {
      promise.then(response => {
        return callback(response)
      })
    }
    return promise
  //}

  //return fetchFunc
}

/**
 * GET 请求
 * @param url
 * @param params
 * @param source
 * @param callback
 * @returns {{promise: Promise}}
 */
const getFetch = fetchData(false, 'get')

/**
 * POST 请求
 * @param url
 * @param params
 * @param callback
 * @returns {{promise: Promise}}
 */
const postFetch = fetchData(false, 'post')

/**
 * GET 请求，带缓存策略
 * @param url
 * @param params
 * @param callback
 * @returns {{promise: Promise}}
 */
const getFetchFromCache = fetchData(true, 'get')


/**
 * 检查登录用户
 * @function checkUser
 * @param {object} params {email:'xxx',password:'xxx'}    
 * @return {promise}
 */

const checkUser = (params) => {
    console.log("====********************")
    console.log(params)
    return postFetch('/accounts/login/cookies',params)

   
}


const getFont = (params) => {
    console.log("====********************")
    console.log(params)
    return getFetch('/fonts/',params)

   
}





export default {getFetch, postFetch, getFetchFromCache, checkUser,getFont}