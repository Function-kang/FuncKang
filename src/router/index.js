import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const homeSlide = (r) =>
  require.ensure([], () => r(require("@/views/homeSlide.vue")), "homeSlide");
const home = (r) =>
  require.ensure([], () => r(require("@/views/home.vue")), "home");
const fund = (r) =>
  require.ensure([], () => r(require("@/views/fund.vue")), "fund");
const cashFlowSheet = (r) =>
  require.ensure(
    [],
    () => r(require("@/views/cashFlowSheet.vue")),
    "cashFlowSheet"
  );
const cashFlowSheetShow = (r) =>
  require.ensure(
    [],
    () => r(require("@/components/cashFlowSheet/cashFlowSheetShow.vue")),
    "cashFlowSheetShow"
  );
// const test = (r) =>
//   require.ensure([], () => r(require("@/components/test.vue")), "test");

const routes = [
  {
    path: "/",
    name: "homeSlide",
    component: homeSlide,
  },
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path: "/fund",
    name: "fund",
    component: fund,
  },
  {
    path: "/cashFlowSheet",
    name: "cashFlowSheet",
    component: cashFlowSheet,
    children: [
      {
        path: "/cashFlowSheet/cashFlowSheetShow",
        name: "cashFlowSheetShow",
        component: cashFlowSheetShow,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
