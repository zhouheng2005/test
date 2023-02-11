// import { createApp } from 'vue'
// import App from './App.vue'
// import './assets/main.css'
// createApp(App).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router'
import pinia from './store/pinia'
const app = createApp(App)
// 启用路由
app.use(router)
app.use(pinia)
app.mount('#app')
