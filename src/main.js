import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import filters from '@/services/filter'
import loading from '@/components/base/loading/loading'
import empty from '@/components/base/empty/empty'

import '@/services/copy/copy'
import 'highlight.js/styles/darkula.css';

import '@/assets/scss/index.scss'

// 全局过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
Vue.component('loading', loading)
Vue.component('empty', empty)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
