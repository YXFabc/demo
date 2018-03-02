// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import myAnswer from 'components/myAnswer/myAnswer'
import myCollection from 'components/myCollection/myCollection'
import myPractice from 'components/myPractice/myPractice'

import qita from 'common/qita'
import lishi from 'common/lishi'
import yundong from 'common/yundong'
import all from 'common/all'


Vue.use(VueRouter)
Vue.use(VueResource)

const router=new VueRouter({
	mode:'history',
	routes:[
		{
			path:"/myAnswer",
			name:"myAnswer",
			component:myAnswer
		},
		{
			path:"/myCollection",
			name:"myCollection",
			component:myCollection
		},
		{
			path:"/myPractice",
			name:"myPractice",
			component:myPractice,
			children:[
				{
					path:'all',
					name:'all',
					component:all
				},
				{
					path:'qita',
					name:'qita',
					component:qita
				},
				{
					path:'yundong',
					name:'yundong',
					component:yundong
				},
				{
					path:'lishi',
					name:'lishi',
					component:lishi
				},
				{
					path:'/myPractice',
					redirect:{name:'all'}
				}
			]
		},
		{
			path:'/',
			redirect: { name: 'myPractice' }
		}
		
	]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})
