import './plugins'

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import Api from './common/api'
import { Vue as vue } from './common/globals'
import './registerServiceWorker'
Api.init()
Vue.config.productionTip = false
window.Vue = vue
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
