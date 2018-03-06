<template>
	<div class="project-display container container--full">
		<div v-for="project in projects">
			<div class="project-display__inner max-container" v-if="$route.params.slug === project.slug">
				<div class="project-display__breadcrumbs">
					<nuxt-link to='/projects'>Projects</nuxt-link><span>{{project.name}}</span>
				</div>
				<div class="project-display__gallery">
					<mockup :device="'desktop'" :img="require('assets/img/screen-' + project.label + '-2.jpg')"/>
					<mockup class="project-display__phone" :device="'phone'" :img="require('assets/img/screen-' + project.label + '-1.jpg')"/>
				</div>
				<div class="project-display__text">
					<h3 class="project-display__title project-display__title--lg">{{project.name}}</h3>
					<p class="project-display__desc" v-html="project.desc"></p>
					<h4 class="project-display__title project-display__title--sm">Tools I learned for this project:</h4>
					<ul class="project-display__list">
						<li v-for="item in project.tags">
							<svg class="icon"><use v-bind="{'xlink:href':'#'+ item.icon}"></use></svg>
							<span>{{item.name}}</span>
						</li>
					</ul>
					<div class="project-display__btn-wrap">
						<a class="project-display__cta btn btn--primary" v-bind:href="project.url" v-bind:title="'Link to ' + project.name" target="_blank"><span>Go To Site</span><svg class="icon"><use xlink:href="#exlink"></use></svg></a>
						<div class="project-display__nav-wrap">
							<button
							class="project-display__nav btn btn--default project-display__nav--prev" @click="goToProject(false)">
							<svg class="icon"><use xlink:href="#navnext"></use></svg><span>Prev</span></button>
							<button class="project-display__nav btn btn--default" @click="goToProject">
							<span>Next</span>
							<svg class="icon"><use xlink:href="#navnext"></use></svg></button>
						</div>
					</div>
					<nuxt-link to='/projects' class="project-display__nav project-display__nav--all btn btn--default">
					Back to All Projects</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import close from './../../assets/svg/close.svg'
import vuejs from './../../assets/svg/vuejs.svg'
import firebase from './../../assets/svg/firebase.svg'
import heroku from './../../assets/svg/heroku.svg'
import exlink from './../../assets/svg/exlink.svg'
import canvas from './../../assets/svg/canvas.svg'
import share from './../../assets/svg/share.svg'
import wordpress from './../../assets/svg/wordpress.svg'
import netlify from './../../assets/svg/netlify.svg'
import bitbucket from './../../assets/svg/bitbucket.svg'
import navnext from './../../assets/svg/navnext.svg'
import file from './../../assets/svg/file.svg'

import Mockup from '~/components/Mockup.vue'
export default {
	scrollToTop: true,
	components: {
		Mockup,
	},
	data () {
		return {
			project: {
				name: '',
				url: '',
				desc: '',
				tags: '',
				label: 'rc',
			}
		}
	},
	created () {
		// temp fix https://github.com/nuxt/nuxt.js/issues/2738
		// if (process.browser) {
		// 	window.scrollTo(0, 0);
		// }
	},
	computed: {
		projects () { return this.$store.state.projects }
	},
	methods: {
		goToProject (isNext) {
			isNext = typeof isNext !== 'undefined' ? isNext : true;
			var project;
			var next;
			for (var i = 0; i < this.projects.length; i++) {
				if (this.projects[i].slug === this.$route.params.slug) {
					if(isNext) {
						next = i + 1;
					} else {
						next = i - 1;
					}
					break;
				}
			}
			var nextInLine = this.projects[next];
			if (typeof nextInLine !== 'object') {
				if(isNext) {
					next = 0;
				} else {
					next = this.projects.length - 1;
				}
			}
			this.$router.push({ path: '/projects/' + this.projects[next].slug })
		}
	}
}
</script>

<style lang="scss">
@import '~assets/scss/_variables.scss';

.project-display {
	transition: all .5s;
	overflow: visible;
	width: 100%;
	background-color: #fff;
	.icon {
		width: 3em;
		height: 3em;
		display: inline-block;
		vertical-align: middle;
	}
	// Accent
	&:before {
		content:'';
		width: 30em;
		height: 30em;
		position: absolute;
		top: -15em;
		left: 0;
		right: 0;
		margin: 0 auto;
		background-color: $primary-color;
		border-radius: 50%;
	}

	&__inner {
		padding: 2em 1em;
		position: relative;
	}
	&__breadcrumbs {
		text-align: left;
		margin-bottom: 3em;
		a {
			text-transform: uppercase;
			font-weight: bold;
			@include lsp(50);
		}
		span {
			&:before {
				content: '/';
				padding: 0 .5em;
			}
		}
	}
	&__gallery {
		position: relative;
		max-width: 750px;
		margin: 0 auto 1em;
	}
	&__phone {
		position: absolute;
		bottom: 0;
		left: 0;
		max-width: 200px;
	}
	&__title {
		margin: 2em 0 0;
		&--lg {
			text-transform: uppercase;
			font-size: 1.5em;
			@include lsp(50);
			position: relative;
			padding-bottom: .3em;
			display: inline-block;
			margin-top: 1em;
			&:after {
				content: '';
				width: 50px;
				height: $border-base/2;
				background-color: $primary-color;
				position: absolute;
				top: 100%;
				left: 0;
			}
		}
		&--sm {
			font-size: 1em;
			font-family: $accent-font;
		}
	}
	&__desc {
		line-height: 1.5;
		a {
			text-decoration: underline;
		}
	}
	&__list {
		list-style: none;
		padding: 0;
		text-align: left;
		display: inline-block;
		li {
			margin-bottom: 1em;
			display: block;
		}
		.icon {
			width: 2em;
			height: 2em;
			margin-right: .3em;
		}
		span {
			vertical-align: middle;
			display: inline-block;
		}
	}
	&__text {
		position: relative;

	}
	&__btn-wrap {
		position: relative;
		margin: 1em auto;
		display: block;
	}
	&__nav-wrap {
		display: flex;
		justify-content: space-between;
	}
	&__cta {
		text-transform: uppercase;
		@include lsp(100);
		z-index: 3;
		padding: .5em;
		margin-bottom: 1em;
		span {
			display: inline-block;
			vertical-align: middle;
		}
		.icon {
			width: 2em;
			height: 2em;
			margin-left: .3em;
			fill: $secondary-color;
		}
	}
	&__nav {
		font-size: .8em;
		text-transform: uppercase;
		@include lsp(100);
		padding: 1em;
		width: 45%;
		.icon {
			width: 1em;
			height: 1em;
			fill: $secondary-color;
			margin-left: .5em;
		}
		&--prev {
			.icon {
				margin: 0 .5em .1em 0;
				position: relative;
				transform: rotate(180deg)
			}
		}
		&--all {
			margin: 3em auto 0;
			border: none;
			width: auto;
		}
		// border: $border-base solid $secondary-color;
	}
	@include respond-to(xs-and-up) {
		&:before {
			left: -15em;
			right: auto;
		}
	}
	@include respond-to(md-and-up) {
		&:before {
			opacity: .3;
		}
		&__inner {
			display: flex;
			flex-wrap: wrap;
		}
		&__breadcrumbs {
			width: 100%;
		}
		&__gallery {
			width: 60%;
		}
		&__text {
			width: 40%;
			text-align: left;
			padding: 0 2em;
		}
		&__phone {
			bottom: auto;
			top: 40%;
		}
	}
}
</style>
