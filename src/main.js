import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'  //解决移动端300ms延迟
import './assets/styles/reset.css'  //初始化不同浏览器 移动端的css样式
import './assets/styles/border.css'  //解决移动端1px边框
import './assets/styles/iconfont.css'  //ui图标



Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
