import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ItemDetails from '../views/ItemDetails.vue';
import ListDetails from '../views/ListDetails.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/details/',
    name: 'itemdetails',
    component: ItemDetails
  },
  {
    path: '/details/:_id?',
    name: 'itemdetails',
    component: ItemDetails
  },
  {
    path: '/lists/:_id?',
    name: 'listdetails',
    component: ListDetails
  },

]

const router = new VueRouter({
  routes
})

export default router
