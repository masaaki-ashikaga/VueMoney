import Vue from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import store from './store';
import firebase from 'firebase';

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyA8v-UzUiYBpWMr7jFiFFPWisIV203O3rA",
  authDomain: "vuejs-http-6b69d.firebaseapp.com",
  databaseURL: "https://vuejs-http-6b69d.firebaseio.com",
  projectId: "vuejs-http-6b69d",
  storageBucket: "vuejs-http-6b69d.appspot.com",
  messagingSenderId: "1092146060390",
  appId: "1:1092146060390:web:768028660e5a7e2a79a1a7"
};
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
