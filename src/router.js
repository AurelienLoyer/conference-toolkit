import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import LoadWith from "./views/LoadWith.vue";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/loadWith",
      name: "loadWith",
      component: LoadWith,
    },
    {
      path: "/settings",
      name: "settings",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "settings" */ "./views/Settings.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "admin" */ "./views/Admin.vue"),
    },
    {
      path: "/remote",
      name: "remote",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "remote" */ "./views/Remote.vue"),
    },
  ],
});
