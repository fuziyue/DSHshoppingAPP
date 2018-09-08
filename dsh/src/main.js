// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Datetime, Group } from 'vux'  
Vue.component(Datetime.name, Datetime);  
Vue.component(Group.name, Group);

Vue.config.productionTip = false

import Vuex from 'vuex'
Vue.use(Vuex)

//加载 vue-jsonp；
import VueJsonp from 'vue-jsonp'
//使用vue-jsonp；
Vue.use(VueJsonp)

// 加载 axios ；
import axios from "axios";
// 赋值到 vue的原型上；
Vue.prototype.$axios=axios;
// this.$axios ==> 访问原型上面的   axios；
// 组件  this==> vue实例；

//加载Vue-Awesome-Swiper插件；
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles  加载样式；
import 'swiper/dist/css/swiper.css'
//Vue使用插件；
Vue.use(VueAwesomeSwiper) /* { default global options } */

//elm的组件；
import Element from 'element-ui'

Vue.use(Element)

// or
import {
  Select,
  Button
  // ...
} from 'element-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)

/* eslint-disable no-new */



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

})
