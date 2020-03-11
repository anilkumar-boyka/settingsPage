import Vue from 'vue'
import Router from 'vue-router'
// import firewall1 from '@/components/firewall1'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import VueResource from 'vue-resource'
import settings from '@/components/settings'

Vue.use(Router)
Vue.use(VueResource)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'settings',
      component: settings
    },

  ]
})
