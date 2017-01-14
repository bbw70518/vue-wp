// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'



Vue.use(VueResource)

// init
Vue.use(VueRouter)
Vue.http.options.xhr = {withCredentials: true}

// Vue.http.options.headers={
//   'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
// };
// // post的时候会把JSON对象转成formdata
// Vue.http.options.emulateJSON=true;
// //Vue.http.options.emulateJSON = true;
// console.log(Vue.http.options)
// page
import Home from './pages/Home.vue';
import Display from './pages/Display.vue';
import Po from './pages/Po.vue';

const router = new VueRouter({
  // 使用 HTML 5 模式
  mode: 'history',
  base: __dirname,
  // routre 表
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/display/:cid',
      name: 'display',
      component: Display
    },
     {
      path: '/display',
      name: 'display',
      component: Display
    },
    {
      path: '/po',
      name: 'po',
      component: Po
    },
    // router 轉址
    { path: '/*', redirect: '/home' }
  ]
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // app.vue 掛載並 replace index.html 原始掛載點： <div id="app"></div>
  render: h => h( App )
})
