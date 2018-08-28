import Vue from 'vue';
import App from './App.vue';
import Footer from './components/footer.vue';
import Router from './routes.js';
import VeeValidate from 'vee-validate';
import VeeResource from 'vue-resource';

Vue.use(VeeValidate);
Vue.use(VeeResource);

Vue.component('app-NavBar', Footer);

new Vue({
  el: '#app',
  render: h => h(App),
  router:Router
})
