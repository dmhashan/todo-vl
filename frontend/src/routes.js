import Vue from 'vue'
import VueRouter from 'vue-router'

import AddEvent from './components/event/add.vue'

Vue.use(VueRouter);

const router = new VueRouter({

	mode:'history',

	routes:[
		{path:'/add',component:AddEvent}
	]
});

export default router