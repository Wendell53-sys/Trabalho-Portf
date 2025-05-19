import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue' 
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Home | Meu Portfólio' }

    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { title: 'Sobre | Meu Portfólio' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: { title: 'Contato | Meu Portfólio' }
    },
  ],
})

export default router
