import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Services from '../views/Services.vue'
import Actuality from '../views/Actuality.vue'
import Servicesconf from '../views/Servicesconf.vue'
import Me from '../views/Me.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import Actu from '../views/Actu.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  },  {
    path: '/login',
    name: 'Login',
    component: Login
  },  {
    path: '/services',
    name: 'Services',
    component: Services
  },  {
    path: '/actuality',
    name: 'Actuality',
    component: Actuality
  },  {
    path: '/servicesconf',
    name: 'Servicesconf',
    component: Servicesconf
  }, {
    path: '/me',
    name: 'Me',
    component: Me
  }, {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }, {
    path: '/about',
    name: 'About',
    component: About
  }, {
    path: '/actu/:id',
    name: 'Actu',
    component: Actu
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
