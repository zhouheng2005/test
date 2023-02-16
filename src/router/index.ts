import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import store from "@/store/index";
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
        path: "/login",
        component: () => import("../views/login/login.vue"),
    }, {
        path: "/register",
        component: () => import("../views/login/register.vue"),
    }, {
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('@/views/errors/404.vue')
    }
];

const router = createRouter({
    // 路由模式
    history: createWebHistory(),
    routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
    // const todepth = to.path.split('/').length;
    // const fromdepth = from.path.split('/').length;
    // console.log(to.path)
    // console.log(from.path)
    // if (todepth < fromdepth) {
    //     console.log('后退。。。')
    //     from.meta.keepalive = false
    //     to.meta.keepalive = true
    // }
    if (to.path !== '/Home' && to.path !== '/') {
        const { routesStore } = store();
        if (routesStore.routes.length < 1) {
            GetDynamicRoutes().then(res => {
                routesStore.addRoutes(res.data.data, router)
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