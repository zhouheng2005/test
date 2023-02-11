import type { MockMethod } from "vite-plugin-mock"
const mock: Array<MockMethod> = [
    {
        // 接口路径
        url: '/api/test',
        // 接口方法
        method: 'get',
        // 返回数据
        response: () => {
            return {
                status: 200,
                message: 'success',
                data: 'Hello World'
            }
        }
    },{
        url: '/api/routes',
        method: 'get',
        response: () => {
            // 路由
            const routes = [{
                path: '/tabOne',
                name: 'tabOne',
                component: 'tabOne.vue'
            }, {
                path: '/tabTwo',
                name: 'tabTwo',
                component: 'tabTwo.vue'
            }, {
                path: '/tabThree',
                name: 'tabThree',
                component: 'tabThree.vue',
            }]
            return {
                status: 200,
                message: 'success',
                data: routes
            }
        }
    }
]

export default mock