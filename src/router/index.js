import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import(/* webpackChunkName: "Layout" */ '../views/Layout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
      },
      {
        path: '/posts',
        name: 'Posts',
        component: () => import(/* webpackChunkName: "Posts" */ '../views/Posts.vue')
      },
      {
        path: '/posts/:slug',
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
