<template>
	<nav class="nav-list" v-bind:class="{ 'open': menuOpen, 'close': !menuOpen }">
		<div class="nav-list__inner">
			<div class="nav-list__btn" @click="toggleMenu">
				<div class="nav-list__icon-wrap nav-list__icon-wrap--open">
					<svg class="nav-list__icon"><use xlink:href="#menu"></use></svg>
				</div>
				<div class="nav-list__icon-wrap nav-list__icon-wrap--close">
					<svg  class="nav-list__icon"><use xlink:href="#close"></use></svg>
				</div>
			</div>
			<ul class="nav-list__list">
				<li @click="selectItem"><nuxt-link to="/">Home</nuxt-link></li>
				<li @click="selectItem"><nuxt-link to="/career">Career</nuxt-link></li>
				<li @click="selectItem"><nuxt-link to="/projects">Projects</nuxt-link></li>
				<li @click="selectItem"><nuxt-link to="/contact">Contact</nuxt-link></li>
			</ul>
		</div>
	</nav>
</template>
<script>
	import menu from './../assets/svg/menu.svg'
	import close from './../assets/svg/close.svg'
	export default {
		data () {
			return {
				menuOpen: false
			}
		},
		methods: {
			toggleMenu () {
				this.menuOpen = !this.menuOpen;
			},
			selectItem () {
				this.menuOpen = false
			}
		}
	}
</script>
<style lang="scss">
@import '~assets/scss/_variables.scss';
.nav-list {
	&__inner {
		position: relative;
	}
	&__btn {
		position: relative;
		z-index: 1;
	}
	&__list {
		transition: all .3s;
		list-style: none;
		padding: 2em 3em;
		margin: 0;
		text-align: left;
		transform: translate($nav-size * 2, -($nav-size * 2));
		li {
			transition: opacity .3s;
			opacity: 0;
			position: relative;
			z-index: 1;
			font-weight: 300;
			font-size: 1.4em;
			a {
				display: block;
			}
		}
		.open & {
			// transform: translate(0,0);
			animation-duration: .3s;
			animation-fill-mode: both;
			animation-name: rubberBandBasic;
			li {
				opacity: 1;
			}
			@include respond-to(md-and-up) {
				@supports (transform: scale3d(1, 1, 1)) {
					animation-duration: .8s;
					animation-name: rubberBand;
				}
			}
		}
		&:after {
			content: '';
			background-color: $primary-color;
			border-radius: 50%;
			width: $nav-size;
			height: $nav-size;
			position: absolute;
			right: -($nav-size/2);
			top: -($nav-size/2);
			box-shadow: 0 0.1em .5em 0 rgba(0, 0, 0, 0.2);
		}
	}
	&__icon-wrap {
		transition: all .3s;
		position: absolute;
		right: 0;
		top: 0;
		&--close {
			opacity: 0;
			visibility: hidden;
		}
	}
	&.open {
		.nav-list__icon-wrap--close {
			opacity: 1;
			visibility: visible;
			// animation-duration: .5s;
			// animation-fill-mode: both;
			// animation-name: rollIn;
		}
		.nav-list__icon-wrap--open {
			opacity: 0;
			visibility: hidden;
		}
		.nav-list__icon {
			fill: #fff;
			transform: rotate(90deg)
		}
	}
	&.close {
		.nav-list__icon-wrap--open {
			// animation-duration: .5s;
			// animation-fill-mode: both;
			// animation-name: rollOut;
			opacity: 1;
			visibility: visible;
		}
	}
	&__icon {
		transition: all .3s;
		width: 3em;
		height: 3em;
		fill: $primary-color;
	}
}

</style>
