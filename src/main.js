import Vue from 'vue'
import App from './App.vue'
//si liste data.js a importer, c'est ici :
//import Data from './data.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
