import Vue from "vue";
import Router from "vue-router";
// import flex1 from "./views/flex1.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "activeClass",
  routes: [
    {
      path: "/",
      redirect: "/flex1",
      name: "flex1",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/flex1.vue")
    },
    {
      path: "/flex1",
      name: "flex1",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/flex1.vue")
    },
    {
      path: "/flex2",
      name: "flex2",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/flex2.vue")
    },
    {
      path: "/flex3",
      name: "flex3",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/flex3.vue")
    },
    {
      path: "/flex4",
      name: "flex4",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/flex4.vue")
    }
  ]
});
export default router;
