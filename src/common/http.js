import axios from 'axios'
if (process.env.NODE_ENV == "development") {
    axios.defaults.baseURL = 'http://10.0.0.61:8678/'
} else {
    axios.defaults.baseURL = 'http://10.0.0.34:10002/api/translate/'
}
// axios 配置
axios.defaults.timeout = 40000
axios.defaults.withCredentials = true;

//请求拦截器
axios.interceptors.request.use(config => {
    $.showLoading("数据加载中");
    //判断是否存在token，如果存在将每个页面header都添加token
    const token = localStorage.getItem('token');
    if(token){
      config.headers['token'] = token;
    }
    return config;
  }, error => {
    $.hideLoading();
  // 对请求错误做些什么
    return Promise.reject(error);
  });
  
//响应拦截器
axios.interceptors.response.use(
    response => {
        $.hideLoading();
        if (response.data.code == '0004') {
            localStorage.removeItem('token');
            router.push({
                path: '/home/login'
            })
        }
        return response;
    },
    error => {
        alert('网络出错，请重试！')
        $.hideLoading();
        return Promise.reject(error)
    }
)

export default axios

/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }
        )
        .then(response => {
            resolve(response.data);
        })
        .catch(err => {
            reject(err)
        })
    })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
        axios.post(url, data)
        .then(response => {
            resolve(response.data);
        }, err => {
            reject(err);
        })
  })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
    })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
    })
}

/**
 * put 方法封装
 * @key 
 * @val json字符串
 */
export function setStorage(key,val) {
    var storage=window.localStorage;
    storage.setItem(key,val)
}

export function getStorage(key) {
    var storage=window.localStorage;
    return storage[key]
}

