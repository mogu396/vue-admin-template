import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // 之所以注释掉，是因为下面的原因
    // name: 'Home',
    // Named Route 'Home' has a default child route. When navigating to this named route (:to="{name: 'Home'"), the default child route will not be rendered. Remove the name from this route and use the name of the default child route for named links instead.
    component: () => import('../views/Home.vue'),
    children: [{
      path: '/',
      name: 'Main',
      component: () => import('../views/Main.vue')
    }]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
