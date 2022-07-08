import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import PluginView from '../views/PluginView.vue'
import dashboardView from '../views/dashboardView.vue'
import ClientView from '../views/ClientView.vue'
import metasIndex from '../components/plugin/Metas/metas-index.vue'
import componentReport from '../components/plugin/reports/componentReport.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    // meta: {requiresAuth: true},
    children: [
      
      {
        path: '/home/DashboardView',
        name: 'DashboardView',
        component: dashboardView
      },
      {
        path: '/home/clienteView',
        name: 'clienteView',
        component: ClientView
      },
      {
        path: '/home/pluginView',
        name: 'pluginView',
        component: PluginView
      },
      {
        path: '/home/metasIndex',
        name: 'metasIndex',
        component: metasIndex
      },
      {
        path: '/home/componentReport',
        name: 'componentReport',
        component: componentReport
      },
      {
        path: '/',
        component: dashboardView
      },

    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


export default router
