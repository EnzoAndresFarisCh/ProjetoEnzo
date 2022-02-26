import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify' 
import 'vuetify/dist/vuetify.min.css';
import Toaster from 'v-toaster'
import 'v-toaster/dist/v-toaster.css'
import VMask from 'v-mask'


Vue.config.productionTip = false

Vue.use(Toaster, {timeout: 5000})
Vue.use(VMask)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
