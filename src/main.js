import Vue from 'vue'
import App from './App.vue'

// globally declared cmps
import Header from './components/shared/Header.vue'
import ServerList from './components/server/ServerList.vue'
import ServerDetails from './components/server/ServerDetails.vue'
import Footer from './components/shared/Footer.vue'

Vue.component('app-header', Header)
Vue.component('app-server-list', ServerList)
Vue.component('app-server-details', ServerDetails)
Vue.component('app-footer', Footer)

export const eventBus = new Vue({})

new Vue({
  el: '#app',
  render: h => h(App)
})
