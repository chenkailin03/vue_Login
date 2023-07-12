import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from 'axios'

createApp(App).use(router).mount('#app')

App.config.globalProperties.$axios=axios
//App.use(express.urlencoded( {extended: false} ))

