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
      },
      {
        path: '/tests',
        name: 'Tests',
        component: () => import(/* webpackChunkName: "Tests" */ '../views/Tests.vue')
      },
      {
        path: '/tests/:slug',
        name: 'Test',
        component: () => import(/* webpackChunkName: "Test" */ '../views/Test.vue')
      },
    ]
  },
  {
    path: '/admin',
    component: () => import(/* webpackChunkName: "Admin" */ '../views/Admin.vue'),
    children: [
      {
        path: '',
        name: 'AdmHome',
        component: () => import(/* webpackChunkName: "AdmHome" */ '../views/admin/AdmHome.vue')
      },
      {
        path: '/admin/post',
        name: 'AdmPost',
        component: () => import(/* webpackChunkName: "AdmPost" */ '../views/admin/AdmPost.vue')
      },
      {
        path: '/admin/users',
        name: 'Users',
        component: () => import(/* webpackChunkName: "AdmUsers" */ '../views/admin/AdmUsers.vue')
      }
      ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
