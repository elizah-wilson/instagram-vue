// router has paths to define routes for the different pages in our App (login, registration, etc.)
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue' 
import PostsView from '../views/PostsView.vue'
import CreatePost from '../views/CreatePost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView 
    },
    {
      path: "/posts",
      name: "posts",
      component: PostsView
    },
    {
      path: "/create-post",
      name: "create-post",
      component: CreatePost
    }

  ]
})

export default router
