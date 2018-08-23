import Vue from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue'
import Router from './routes.js'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

Vue.component('app-NavBar', NavBar);

new Vue({
  el: '#app',
  render: h => h(App),
  router:Router
})
