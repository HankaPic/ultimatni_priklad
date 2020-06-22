import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sablona from '../views/Sablona.vue'
import Skryvani from '../views/Skryvani.vue'
import Atributy from '../views/Atributy.vue'
import CssTridy from '../views/CssTridy.vue'
import Vfor from '../views/Vfor.vue'
import Komponenty from '../views/Komponenty.vue'
import Zeme from '../views/Zeme.vue'
import Formulare from '../views/Formulare.vue'
import Computed from '../views/Computed.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sablona',
    name: 'Sablona',
    component: Sablona
  },
  {
    path: '/skryvani',
    name: 'Skryvani',
    component: Skryvani
  },
  {
    path: '/atributy',
    name: 'Atributy',
    component: Atributy
  },
  {
    path: '/csstridy',
    name: 'CssTridy',
    component: CssTridy
  },
  {
    path: '/vfor',
    name: 'Vfor',
    component: Vfor
  },
  {
    path: '/komponenty',
    name: 'Komponenty',
    component: Komponenty
  },
  {
    path: '/zeme',
    name: 'Zeme',
    component: Zeme
  },
  {
    path: '/formulare',
    name: 'Formulare',
    component: Formulare
  },
  {
    path: '/computed',
    name: 'Computed',
    component: Computed
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
