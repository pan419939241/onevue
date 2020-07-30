import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

import Mock from './mock/index'
Mock.init()
Vue.prototype.$ajax = axios
// axios不能直接使用use引入，只能每个需要发送请求的组件中即时引入，两种引入方式
// 第一种引入方式：引入axios后，修改原型链
// import axios from 'axios'
// Vue.prototype.$axios = axios

Vue.use(ElementUI)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
