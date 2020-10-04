import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Layout',
    component: () => import(/* webpackChunkName: "Layout" */ '../views/Layout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
      },
      {
        path: '/posts',
        name: 'Post',
        component: () => import(/* webpackChunkName: "Post" */ '../views/Post.vue')
      }
      ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
