import Vue from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import store from './store';
import firebase from 'firebase';
import {firebaseConfig} from './../config/firebase-config';

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig);

axios.defaults.baseURL = 'https://firestore.googleapis.com/v1/projects/vuejs-http-6b69d/databases/(default)/documents/';

const interceptorsRequest = axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
const interceptorsResponse = axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.request.eject(interceptorsRequest);
axios.interceptors.response.eject(interceptorsResponse);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
