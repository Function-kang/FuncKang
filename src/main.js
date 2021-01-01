import Vue from "vue";
import "@/assets/css/common.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import overallInterceptor from "./assets/js/overallInterceptor.js";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import { Tree } from "view-design";

// Vue.use(overallInterceptor);
Vue.use(ElementUI);
Vue.use(ViewUI);
Vue.use(Antd);

Vue.component("Tree", Tree);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
