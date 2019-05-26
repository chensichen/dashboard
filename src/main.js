import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
import Mock from "./mock"; // 刚刚手写的mock.js文件
import axios from "axios"; // axios http请求库
Vue.use(Mock);
axios.defaults.baseURL = "http://mockjs.com/api"; // 设置默认请求的url
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
