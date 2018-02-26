// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'

// import App from './App'
import Account from './components/Account'
import BootstrapVue from 'bootstrap-vue'
import router from './router'

Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  // components: {App},
  template: '<Account/>',
  components: {Account}
})
