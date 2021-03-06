import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Main from './components/Main/Index.vue'
import Account from './components/Main/Account.vue'
import Investments from './components/Main/Investments.vue'
import vuetify from './plugins/vuetify';
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/',redirect: '/main/account' },
  { path: '/main', component: Main,
    children: [
      { path: 'account', component: Account},
      { path: 'investments', component: Investments},
    ],
  },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
