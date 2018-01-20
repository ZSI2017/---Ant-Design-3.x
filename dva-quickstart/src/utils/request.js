/* global window */
import axios from "axios";

// add request interceptor
axios.interceptors.request.use(function(config) {

    // TODO  before request is sent
     console.log("%c[axios log]before request:%s\n %o","color:green;font-size:16px;",config.url,config);
    return config;
},function(error){
    // TODO  with request error
      // console.log("%c[axios log]before request:\n %o","color:red;font-size:16px;",config);
     return Promise.reject(error);
});

// add a respose interceptor
axios.interceptors.response.use(
  response =>{
    // loginTimeout();
      console.log("%c[axios log]success response:%s \n %o","color:green;font-size:16px;",response.config.url,response);

    if(response.data&&response.data.error&&response.data.error === "ACL_NO_PRIVILEGE") {
            // 没有权限时，跳转到 支付宝的权限管理页面
        window.location.href=response.redrect;
        return Promise.reject();
    }
    return response;
},
  (error) =>{
    console.log("%c[axios log]error response:\n %o","color:red;font-size:16px;",error);
    if(error.response) {
      //  发出了请求，服务端返回了 状态码 2xx
      console.log("%cresponse error %o","color:red;font-size:16px;",error.response)

      if(error.response.status === 0){
            // vue.$message.error('登录超时');
            // loginTimeout();

        }
    } else if(error.request) {
      // 500 503 504
      if(error.request.status === 0){
                //  loginTimeout();
            // vue.$message.error('登录超时');

        }
         // 请求发出了，但是没有接受到 响应
        //  'error.request' 是一个 浏览器中的XMLHttpRequest 实例，
        //   在node.js 中 就是 http.ClientRequest 实例；
           console.log("%crequest error %o","color:red;font-size:16px;",error.request);
      } else {
        //   vue.$message.error('接口调用失败2222');
          console.log("Error",error.message);
      }
     return Promise.reject(error);
});

//登陸超時提醒
// function loginTimeout() {
//   vue.$confirm('登录超时, 请重新登录！', '提示', {
//         confirmButtonText: '确定',
//         cancelButtonText: '取消',
//         type: 'warning'
//       }).then(() => {
//
//         store.dispatch('setLoginOutFlag',true);
//         let topLevel_domains = ".alipay-eco.com"
//         console.log(topLevel_domains);
//         localEvent.clear("ACL");
//         Cookie.delete("SMJSESSIONID");
//         Cookie.delete('ALIPAYJSESSIONID');
//         Cookie.delete("ctoken",topLevel_domains);
//         Cookie.delete('ECOACLJSESSIONID',topLevel_domains);
//         Cookie.delete('express1');
//         let index = window.location.href.indexOf("#");
//         let baseURL = window.location.href.slice(0,index);
//         let fullPath = baseURL +"#"+"/login";
//         window.location.href = fullPath;
//         // vue.$router.push({path:'/login'});
//       }).catch(() => {
//           vue.$message({
//             type: 'info',
//             message: '已取消'
//           });
//       });
// }
// 这里
function checkErrorCode(response) {
      if(typeof response.data.meta.code !== "undefined") {
         if(response.data.meta.code == "0012"){
             // vue.$message.error('系统异常 code:0012');
             console.log("%c[axios log]error :\n %o","color:red;font-size:16px;",response);
            // 错误码定义的提示信息
         } else if (response.data.meta.code == "2345") {
            // 错误码定义的提示信息
         } else {
              // vue.$message.error('系统异常');
            // 其他错误处理代码
         }
      }else {
         // vue.$message.error('系统异常 code无效');
      }
  };

  var mySuccessFn = (response) => {
    const {statusText,status} = response
    let data = response.data
    if( data instanceof Array) {
        data = {
          list:data,
        }
      }
     return Promise.resolve({
        success:true,
        message:statusText,
        statusCode:status,
        ...data,
      })
}

var request = {
      post(url,data,successfn,errorfn){
         axios({
              url:url,
              method:'post',
              baseURL:URL,
              // baseURL:"http://192.168.12.54:8080/",
              transformRequrest:[function(data) {
                  // before the request data is sent to the server
                  return data;
              }],
              // headers:{
              //      'X-Requested-With':'XMLHttpRequest'
              // },
              transformResponse:[function(data) {
                    // before get the response data
                    return data;
              }],
              // withCredentials: false,   //  默认false
              data:data,
              // timeout:10000,
              responseType:'json',  // default
              // contentType: "application/json; charset=utf-8",
              xsrfCookieName:'XSRF-TOKEN',      // default
              xsrfHeaderName: 'X-XSRF-TOKEN', // default
              validateStatus: function (status) {
                     return status>=0 && status  < 600;  // 默认的
              },
              // headers: {'contentType': "application/json; charset=utf-8"},
              maxRedirects: 5, // default
              proxy:{ }     //  defines the hostname and port of the proxy server
         }).then(
             (response) => {
               mySuccessFn(response)
             }
         ).catch(
             (error) => {
                      if(error.response) {
                        //  发出了请求，服务端返回了 状态码 2xx
                        console.log("%cresponse error %o","color:red;font-size:16px;",error.response)
                        if(error.response.status === 0){
                              // loginTime();
                          }
                      } else if(error.request) {
                        if(error.request.status === 0){
                                  //  loginTime();
                              // vue.$message.error('登录超时');

                          }
                           // 请求发出了，但是没有接受到 响应
                          //  'error.request' 是一个 浏览器中的XMLHttpRequest 实例，
                          //   在node.js 中 就是 http.ClientRequest 实例；
                             console.log("%crequest error %o","color:red;font-size:16px;",error.request);
                        } else {
                          //   vue.$message.error('接口调用失败2222');
                            console.log("Error",error.message);
                        }
                    // console.log(error.config);
                  //  console.log("error %o",error);
             }
         )
      },
      get(url,data,successfn,errorfn){
          axios({
                url:url,
                method:'get',
                // baseURL:URL,
                timeout: 10000,
                params: data,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                  },
                validateStatus: function (status) {
                         return status>=0 && status  < 600;  // 默认的
                 }
            }).then( (response) => {
               mySuccessFn(response);
            }
          ).catch(
                (error) => {
                  if(error.response) {
                    //  发出了请求，服务端返回了 状态码 2xx
                    console.log("%cresponse error %o","color:red;font-size:16px;",error.response)
                    if(error.response.status === 0){
                          // vue.$message.error('登录超时');
                      }
                  } else if(error.request) {
                       // 请求发出了，但是没有接受到 响应
                      //  'error.request' 是一个 浏览器中的XMLHttpRequest 实例，
                      //   在node.js 中 就是 http.ClientRequest 实例；
                      console.log("%crequest error %o","color:red;font-size:16px;",error.request);
                  } else {
                        console.log("Error",error.message);
                  }
                  if(typeof errorfn !== "undefined"){
                      errorfn(error);
                    }
                }
          )}
  };

export default request
