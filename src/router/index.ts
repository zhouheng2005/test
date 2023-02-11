import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
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

export default router;