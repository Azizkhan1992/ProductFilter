import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
	mode: 'history',
    routes: [{
            path: "/",
            component: () => import ("./layout/default"),
            children: [
				{
                    path: "",
                    name: 'home',
                    component: () => import ("./pages/home.vue")
                },
				{
                    path: "/details/:id",
                    name: 'details',
                    component: () => import ("./pages/ProductDetails.vue")
                }
			]
		}
    ]
});

export default router;
