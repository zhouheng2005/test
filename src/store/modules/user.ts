import { defineStore } from 'pinia'
const useUserStore = defineStore({
	// persist: true, 第一种方式
	persist: {
		enabled: true,
	},
	id: 'user',
	state: () => {
		return {
			userInfo: {
				nickName: '章三'
			},
			token: 'xfdfdsjkdsj'
		}
	},
	actions: {
		
	},
	getters: {},
})

export default useUserStore