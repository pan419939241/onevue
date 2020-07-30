import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login";
import Home from "../components/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/home",
    name: "home",
    component: Home
  }
];

const router = new VueRouter({
  routes
});

// 访问之前，检查是否登陆了
router.beforeEach((to, from, next) => {
  if (to.path.startsWith("/login")) {
    window.sessionStorage.removeItem("user");
    next();
  } else {
    let token = window.sessionStorage.getItem("user");
    if (!token) {
      next({ path: "/login" });
    } else {
      next();
    }
  }
});
export default router;
