import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobDetailView from '../views/jobs/JobDetailView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: "/jobDetail/:id",  // dynamic route
    name: 'jobDetail',
    component: JobDetailView, 
    props: true
  },
  //redirect 
  {
    path : '/all-jobs',
    redirect : '/jobs'
  },
  // catchAll
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound   
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
