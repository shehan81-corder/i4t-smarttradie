import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'
import { useUserStore } from '../stores/useUserStore'

const routes=[
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'login', component: LoginPage },
  { path: '/home', name: 'home', component: HomePage }
]

const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach((to, from, next)=>{
  const store = useUserStore()
  if(to.name==='home' && !store.isLoggedIn){ return next({ name: 'login' }) }
  if(to.name==='login' && store.isLoggedIn){ return next({ name: 'home' }) }
  next()
})

export default router
