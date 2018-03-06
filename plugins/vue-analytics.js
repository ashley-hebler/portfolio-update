import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

export default ({ app: {router} }) => {
	Vue.use(VueAnalytics, {
		id: 'UA-33655987-1',
		router: router,
		autoTracking: {
			pageviewTemplate (route) {
				return {
					page: route.path,
					title: document.title,
					location: window.location.href
				}
			}
		}
	})
}
