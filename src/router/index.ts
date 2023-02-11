import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { useStore } from "../store";
import { GetDynamicRoutes } from '../apis'
// 路由类型:RouteRecordRaw
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: '/Home'
    }, {
        path: "/Home",
        component: () => import("../views/index.vue"),
    }, {
        path: "/",
        component: () => import("../views/login/login.vue"),
    }, {
        path: "/register",
        component: () => import("../views/login/register.vue"),
    },
];

const router = createRouter({
    // 路由模式
    history: createWebHistory(),
    routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
    if (to.path !== '/Home' && to.path !== '/') {
        const store = useStore()
        console.log(11111)
        if (store.routes.length < 1) {
            console.log(2222)
            GetDynamicRoutes().then(res => {
                store.addRoutes(res.data.data, router)
                console.log(3333)
                next({ path: to.path, replace: true })
            }).catch(_ => {
                next()
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router;