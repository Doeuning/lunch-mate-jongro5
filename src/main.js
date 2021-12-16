import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import VueRouter from "vue-router";
import axios from "axios";

Vue.use(Vuex);
Vue.use(VueRouter);

// axios.defaults.baseURL = "https://doeuning.github.io/";
axios.defaults.baseURL =
  "https://my-json-server.typicode.com/doeuning/lunch-mate-jongro5";
// axios.defaults.baseURL = "https://openapi.naver.com";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
