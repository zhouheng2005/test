import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";
// 扩展继承属性
interface extendRoute {
    hidden?: boolean
}
import store from "@/store/index";
import { GetDynamicRoutes } from '../apis'
// 顶部进度
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false }) // NProgress Configuration
// 路由类型:RouteRecordRaw
/**
 * path ==> 路由路径
 * name ==> 路由名称
 * component ==> 路由组件
 * redirect ==> 路由重定向
 * alwaysShow ==> 如果设置为true，将始终显示根菜单，无论其子路由长度如何
 * hidden ==> 如果“hidden:true”不会显示在侧边栏中（默认值为false）
 * keepAlive ==> 设为true 缓存
 * meta ==> 路由元信息
 * meta.title ==> 路由标题
 * meta.icon ==> 菜单icon
 * meta.affix ==> 如果设置为true将会出现在 标签栏中
 * meta.breadcrumb ==> 如果设置为false，该项将隐藏在breadcrumb中（默认值为true）
 */
const routes: Array<RouteRecordRaw & extendRoute> = [
    {
        path: '/',
        name: 'layout',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('@/views/index.vue'),
                name: 'home',
                meta: { title: '首页', icon: 'House', affix: true, role: ['other'] }
            },
        ]
    }, {
        path: "/login",
        name: 'login',
        component: () => import("@/views/login/login.vue"),
        hidden: true,
        meta: { title: '登录' }
    }, {
        path: "/403",
        name: "403",
        component: () => import("@/views/errors/403.vue"),
        hidden: true
    }, {
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('@/views/errors/404.vue'),
        hidden: true
    }
];

const router = createRouter({
    // 路由模式
    history: createWebHistory(),
    routes,
});

const whiteList = ['/login'] // , '/auth-redirect'设置白名单
// 记录路由
let hasRoles = true
// 路由守卫
router.beforeEach((to, from, next) => {
    // 开启进度条
    NProgress.start()
    if (typeof (to.meta.title) === 'string') {
        document.title = to.meta.title + '-米闪闪渠道版-深圳市闪里数字科技有限公司' || '米闪闪渠道版-深圳市闪里数字科技有限公司'
    }
    const { userStore, routesStore } = store();
    // 确定用户是否已登录过，存在Token
    const hasToken = userStore.token
    if (hasToken) {
        if (to.path !== '/Home' && to.path !== '/') {
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
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next(`/login`)
        }
    }
})

router.afterEach(() => {
    NProgress.done();
});

export default router;