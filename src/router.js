import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Dashboard from './views/Dashboard.vue';
import store from './store';

Vue.use(Router);
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: Login,
            beforeEnter(to, from, next){
                if(store.getters.idToken) {
                    next();
                } else {
                    next();
                }
            }
        },
        {
            path: '/register',
            component: Register,
            beforeEnter(to, from, next){
                if(store.getters.idToken) {
                    next();
                } else {
                    next();
                }
            }
        },
        {
            path: '/dashboard',
            component: Dashboard,
            beforeEnter(to, from, next){
                if(store.getters.idToken) {
                    next();
                } else {
                    next('/login');
                }
            }
        },
    ]
});