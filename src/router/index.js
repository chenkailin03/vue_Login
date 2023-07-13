import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import Login from '../views/login/LogIn.vue'
import SeaMusic from '../views/disney/SeaMusic.vue'
import Question from '../views/disney/Question.vue'



const routes = [
  {
    path: '/',
    redirect: 'home'
  },
 {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'LogIn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login  
    //() => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/seamusic',
    name: 'seamusic',
    component: SeaMusic 
  },
  {
    path: '/question',
    name: 'question',
    component: Question 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


