import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Order from '../views/Order.vue'
import About from '../views/About.vue'
import Common from '../views/Common.vue'
import Question from '../views/Question.vue'
import Cart from '../views/Cart.vue'

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
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/common',
    name: 'Common',
    component: Common
  },
  {
    path: '/question',
    name: 'Question',
    component: Question
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = new VueRouter({
  routes
})

export default router
