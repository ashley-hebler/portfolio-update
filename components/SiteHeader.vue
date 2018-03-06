<template>
	<!-- Header -->
	<header class="header" v-bind:class="{ 'header--home': $route.path === '/' || $route.path === '/contact'  }">
		<nuxt-link to="/" class="header__logo">
			<h1 class="logo-name">
				<span class="logo-name__begin logo-name__item"><span>Ashley</span> <span>Hebler</span></span>
				<span class="logo-name__end logo-name__item">Web Developer</span>
			</h1>
		</nuxt-link>
		<nav-links class="header__nav"/>
	</header>
</template>
<script>
	import NavLinks from '~/components/NavLinks.vue'
	export default {
		components: {
			NavLinks
		}
	}
</script>
<style lang="scss">
@import '~assets/scss/_variables.scss';
.header {
	text-align: left;
	padding: 2em 1em;
	background-color: $secondary-color;
	position: relative;
	z-index: 1;
	&--home {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		background-color: transparent;
	}
	&__logo {
		display: inline-block;
	}
	&__nav {
		position: absolute;
		top: 1em;
		right: 1em;
	}
}
.logo-name {
	font-size: 1em;
	color: $primary-color;
	&__item {
		display: block;
		padding: .3em;
	}
	&__begin {
		text-transform: uppercase;
		color: $secondary-color;
		background-color: $primary-color;
		span + span {
			font-weight: bold;
			margin-left: .3em;
		}
	}
	&__end {
		font-family: $accent-font;
		.header--home & {
			color: $secondary-color;
		}
	}
	@include respond-to(sm-and-up) {
		font-size: 1.5em;
		&__item {
			display: inline-block;
			vertical-align: middle;
		}
	}
}
</style>
