import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'

import https from "./common/api/request.js"

	let jweixin = require('jweixin-module')  
	
	
Vue.mixin({
  beforeCreate() {
    // 注册全局方法
    Vue.prototype.$htps = function(obj){
			return https.request(obj)
	},
	Vue.prototype.$wx = jweixin
  },
});



const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif