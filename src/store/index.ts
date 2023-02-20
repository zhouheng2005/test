import useUserStore from './modules/user'
import useRoutesStore from './modules/dynamicRoutes'
import useSettingStore from './modules/setting'
const store = () => {
    return {
        userStore: useUserStore(),
        routesStore: useRoutesStore(),
        settingStore: useSettingStore(),
    }
}
export default store

// import { defineStore } from 'pinia'
// import type { RouteRecordRaw } from 'vue-router'
// let modules = import.meta.glob("../views/tab/*.vue")
// // pinia状态管理器
// export const useStore = defineStore('myStore', {
//     state: () => {
//         return {
//             // 路由表
//             routes: [] as Array<RouteRecordRaw>
//         }
//     },
//     getters: {},
//     actions: {
//         // 添加动态路由，并同步到状态管理器中
//         addRoutes(data: Array<any>, router: any) {
//             data.forEach(m => {
//                 this.routes.push({
//                     path: m.path,
//                     name: m.name,
//                     // 错误示例：components:()=>import(`../views/Pages/${m.component}`)
//                     // 正确示例如下：
//                     component: modules[`../views/tab/${m.component}`],
//                 })
//             })
//             this.routes.forEach(m => router.addRoute(m))
//         },
//     }
// })