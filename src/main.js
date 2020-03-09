// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from 'firebase'



Vue.config.productionTip = false
 var firebaseConfig = {
    apiKey: "AIzaSyAAvQulUjFp6hFbmrZqj3u8XaOaEH7x5n0",
    authDomain: "settings-7019f.firebaseapp.com",
    databaseURL: "https://settings-7019f.firebaseio.com",
    projectId: "settings-7019f",
    storageBucket: "settings-7019f.appspot.com",
    messagingSenderId: "110330022060",
    appId: "1:110330022060:web:d0547c7aa79582e583f709",
    measurementId: "G-ED98BDW4PQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
