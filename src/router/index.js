import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Skill from '../views/Skill.vue'
import Learned from '../views/Learned.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/skill',
    name: 'Skill',
    component: Skill
  },
  {
    path: '/learned',
    name: 'Learned',
    component: Learned
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savePosition) {
    console.log(to, from, savePosition);
    if (savePosition) {
      return savePosition
    } else {
      return {x: 0, y: 0 }
    }
  }
})

export default router
