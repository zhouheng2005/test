// import { createApp } from 'vue'
// import App from './App.vue'
// import './assets/main.css'
// createApp(App).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store/pinia'
import {registerElIcons} from "@/plugins/ElIcons"
//pinias 本地数据持久化插件
import piniaPersist from 'pinia-plugin-persist'
// svg-icons注册导入
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'// svg component
//饿了么UI框架
import ElementPlus from 'element-plus'
import locale from "element-plus/lib/locale/lang/zh-cn";
import 'element-plus/dist/index.css'
import '@/assets/index.scss'
// 引入阿里图标库
import "@/assets/iconfont/iconfont.css";
import "@/assets/iconfont/iconfont.js";
const app = createApp(App)
registerElIcons(app)
app.component('svg-icon',SvgIcon)
// 启用路由
app.use(router)
pinia.use(piniaPersist)
app.use(pinia)
app.use(ElementPlus, {
    locale
})
app.mount('#app')
