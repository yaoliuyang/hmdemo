/**
 * axios的封装，防止第三方库的后期不维护而换插件

 */
import axios from 'axios'

export function $http(config){
    // config为参数配置

    // 创建axios的实例
    const instance = axios.create({
        baseURL:'http://www.liulongbin.top:3005',
        timeout:5000
    })

    //axios的  请求  拦截器的作用

    instance.interceptors.request.use(config =>{
        //config为请求的参数配置
        // console.log(config)

        //1. config中的一些信息不符合服务器的要求

        //2. 发送请求时，需要有loading动画

        //3. 某些网络请求(比如登录(token))，必须携带特殊信息

        return config  //成功拦截后必须返回
    },err =>{
        console.log(err)
    })

    //axios的响应拦截
    instance.interceptors.response.use(res =>{
        // console.log(res)
        return res.data  //响应成功拦截后必须返回
    },err =>{
        console.log(err)
    })

    //发送真正的网络请求
    return instance(config)
}

