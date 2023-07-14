import { createApp } from 'vue'
//  import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import store from './store'

// Vue.prototype.$http=axios;//修改内部的$http为axios

const app = createApp(App)
app.use(router)
app.use(ElementPlus, {locale: zhCn,})
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

axios.defaults.baseURL = 'http://127.0.0.1:8000'
app.config.globalProperties.$axios=axios
