import Vue from "vue";
import App from "./App.vue";

// 导入 Cesium 相关内容
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

// 导入 Vue-Cesium
import VueCesium from "vue-cesium";
import "vue-cesium/lib/style.css";

import "./assets/common.less";

import dataV from "@jiaminghi/data-view";

Vue.use(VueCesium, {
  cesiumPath: "https://unpkg.com/cesium/Build/Cesium/Cesium.js",
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwZGZhMWFmZi1jZjE3LTRlZGItOWQyNS05NjczMjUwNGQxZWIiLCJpZCI6ODMxNzgsImlhdCI6MTcxOTkyMjI2OX0.xNLstaQLaQLsXgWln9Ikg1KaPHPFstH7jqTKZj-R1fA",
});

Vue.use(dataV);

// 全局挂载 Cesium
Vue.prototype.$Cesium = Cesium;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
