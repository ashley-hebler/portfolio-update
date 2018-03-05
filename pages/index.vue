<template>
		<div class="splash">
			<h1 class="splash__title">
				Hi, I'm Ashley.
			</h1>
			<h2 class="splash__subtitle">
				I build for the web.
			</h2>
			<app-logo/>
			<div class="splash__btn-wrap">
				<nuxt-link to="/career" class="splash__btn btn btn--default">My journey</nuxt-link>
				<a
					href="/projects"
					class="splash__btn btn btn--primary">Show me the code</a>
			</div>
		</div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
	components: {
		AppLogo
	}
}
</script>

<style lang="scss">
@import '~assets/scss/_variables.scss';
.splash {
	&__btn {
		margin: 1em 1em 0;
	}
	&__btn-wrap {
		margin-top: 2em;
	}
	@include respond-to(sm-and-up) {
		&__btn-wrap {
			display: flex;
			justify-content: center;
		}
	}
}
</style>
