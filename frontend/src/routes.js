import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './components/event/index.vue'

Vue.use(VueRouter);

const router = new VueRouter({

	mode:'history',

	routes:[
		{path:'/',component:Index}
	]
});

export default router