import Vue from 'vue'
import App from './App.vue'
import store from '@store'
import router from '@router'
import api from '@api'
import axios from 'axios'
import '@css/index.less'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://api.com'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 10000
Vue.prototype.axios = axios
Vue.prototype.api = api

const vbus = new Vue()
window.__vbus__ = vbus
Vue.prototype.vbus = vbus

// http request 拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {
    let res = response.data,
      code = res.code,
      url = response.config.url

    return res
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          //...
          break;
      }
    }
    // 返回接口返回的错误信息
    return Promise.reject(error.response ? error.response.data : error);
  }
);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

