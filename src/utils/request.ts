import axios from 'axios'

console.log(import.meta.env.VITE_BASE_API)
// axios对象
const service = axios.create({
    // axios请求基础URL
    // 由于本项目使用mock + vite-plugin-mock启动的mock服务，默认使用的端口号与页面一致
    baseURL: "http://192.168.31.48:80/",
    timeout: 5000
})
export default service