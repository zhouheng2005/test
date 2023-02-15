// import { createApp } from 'vue'
// import App from './App.vue'
// import './assets/main.css'
// createApp(App).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store/pinia'
import ElementPlus from 'element-plus'
import locale from "element-plus/lib/locale/lang/zh-cn";
import 'element-plus/dist/index.css'
import './assets/main.css'
const app = createApp(App)
// 启用路由
app.use(router)
app.use(pinia)
app.use(ElementPlus, {
    locale
})
app.mount('#app')
