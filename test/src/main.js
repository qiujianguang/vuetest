// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'   /* 获取数据 */
import VueRouter from 'vue-router'		/* 路由 */
import App from './App'
import Routes from './routes'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)


// 自定义组件
Vue.directive('focus', {
	bind: function(el,binding){
		el.style.color = "red"
	}
})

// Vue.filter('slh',function (value){
// 	return value.slice(0,100) + '...'
// })

// 路由
const router = new VueRouter({
	routes: Routes,
	mode: "history"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
})
