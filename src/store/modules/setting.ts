import { defineStore } from 'pinia'
// import { PRIMARY_COLOR } from '../../config'
const useSettingStore = defineStore({
	// persist: true, 第一种方式
	// persist: {
	// 	enabled: true,
	// },
	id: 'settingState',
	state: () => ({
		// menu 是否收缩
		isCollapse: true,
		//
		withoutAnimation: false,
		device: 'desktop',
		// 刷新当前页
		isReload: true,
		// 主题设置
		themeConfig: {
			// 显示设置
			showSetting: false,
			// 菜单展示模式 默认 vertical   horizontal / vertical
			mode: 'vertical',
			// tagsView 是否展示 默认展示
			showTag: true,
			// 页脚
			footer: true,
			// 深色模式 切换暗黑模式
			isDark: false,
			// 显示侧边栏Logo
			showLogo: true,
			// 主题颜色
			// primary: PRIMARY_COLOR,
			// element组件大小
			globalComSize: 'default',
			// 是否只保持一个子菜单的展开
			uniqueOpened: true,
			// 固定header
			fixedHeader: true,
			// 灰色模式
			gray: false,
			// 色弱模式
			weak: false
		},
	}),
	getters: {

	},
	actions: {
		// 设置主题
		setThemeConfig({ key, val }: any) {
			this.themeConfig[key] = val
		},
		// 切换 Collapse
		setCollapse(value: any) {
			this.isCollapse = value
			this.withoutAnimation = false
		},
		// 关闭侧边栏
		closeSideBar({ withoutAnimation }) {
			this.isCollapse = false
			this.withoutAnimation = withoutAnimation
		},
		toggleDevice(device: any) {
			this.device = device
		},
		// 刷新
		setReload() {
			this.isReload = false
			setTimeout(() => {
				this.isReload = true
			}, 50)
		}
	},
})

export default useSettingStore