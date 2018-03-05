<template>
		<div class="container" v-bind:class="{ 'container--full': $route.path === '/' || $route.path === '/contact' }">
			<site-header/>
			<nuxt/>
			<site-footer v-if="$route.path !== '/' && $route.path !== '/contact'"/>
		</div>
</template>
<script>
	import NavLinks from '~/components/NavLinks.vue'
	import SiteHeader from '~/components/SiteHeader.vue'
	import SiteFooter from '~/components/SiteFooter.vue'
	export default {
		components: {
			NavLinks,
			SiteHeader,
			SiteFooter
		}
	}
</script>
