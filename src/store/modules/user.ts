import { defineStore } from 'pinia'
const useUserStore = defineStore({
	// // persist: true, 第一种方式
	persist: {
		enabled: true,
	},
	id: 'user',
	state: () => {
		return {
			// 用户信息
			userInfo: {},
			// 登录token
			token: '',
			// 角色
			roles:localStorage.roles?JSON.parse(localStorage.roles):[]
		}
	},
	getters: {

	},
	actions: {
		login(userInfo: any) {
			const { username, password } = userInfo;
			return new Promise(async (resolve, reject) => {
				this.token = username
				this.userInfo = userInfo
				await this.getRoles()
				resolve(username)
			})
		},
		getRoles() {
			return new Promise((resolve, reject) => {
				// 获取权限列表 默认就是超级管理员，因为没有进行接口请求 写死
				this.roles = ['admin']
				localStorage.roles = JSON.stringify(this.roles)
				resolve(this.roles)
			})
		},
		logout() {
            return new Promise((resolve, reject) => {
                this.token = null
                this.userInfo = {}
                this.roles = []
                resolve(null)
            })
        },
	},
})

export default useUserStore