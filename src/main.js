import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import {post,get,setStorage,getStorage} from './common/http'

Vue.config.productionTip = false
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.axios = Axios;
Vue.prototype.setStorage = setStorage;
Vue.prototype.getStorage = getStorage;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
