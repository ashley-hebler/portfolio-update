<template>
	<div class="projects" v-bind:class="{ 'p-open': projectOpen }">
		<section class="projects__section">
			<div class="projects__text">
				<h3 class="projects__section-header">“It ain’t what you got, it's what you <span>make.<svg class="icon"><use xlink:href="#underline"></use></svg></span>”</h3>
				<h4 class="projects__section-subheading">
					- <a href="https://www.youtube.com/watch?v=ue9lsHpGKd4" target="_blank" title="Link to Shovels & Rope - Birmingham">Shovels &amp; Rope</a>
				</h4>
			</div>
		</section>
		<div class="max-container max-container--sm">
			<div class="grid">
				<div class="grid__item"  v-for="project in projects">
					<div class="project-card">
						<a class="project-card__main" v-bind:title="project.name" v-bind:style="{ 'background-image': 'url(' + require('assets/img/' + project.main ) + ')' }" @click="showModal(project)">
						</a>
						<div class="project-card__body">
						</div>
					</div>
					<div class="project-display container container--full">
						<button @click="hideModal" class="project-display__btn"><svg class="icon"><use xlink:href="#close"></use></svg></button>
						<div class="project-display__inner">
							<div class="project-display__gallery">
								<mockup :device="'desktop'" :img="require('assets/img/screen-' + label + '-2.jpg')"/>
								<mockup class="project-display__phone" :device="'phone'" :img="require('assets/img/screen-' + label + '-1.jpg')"/>
							</div>
							<div class="project-display__text">
								<h3 class="project-display__title project-display__title--lg">{{title}}</h3>
								<p class="project-display__desc" v-html ="desc"></p>
								<h4 class="project-display__title project-display__title--sm">Tools I learned for this project:</h4>
								<ul class="project-display__list">
									<li v-for="item in tags">
										<svg class="icon"><use v-bind="{'xlink:href':'#'+ item.icon}"></use></svg>
										<span>{{item.name}}</span>
									</li>
								</ul>
								<div class="project-display__btn-wrap">
									<button
									class="project-display__nav btn btn--default project-display__nav--prev" @click="goToProject(false)" v-on:keyup.left="goToProject(false)"
									>
									<svg class="icon"><use xlink:href="#navnext"></use></svg></button>
									<button class="project-display__nav btn btn--default" @click="goToProject" v-on:keyup.right="goToProject()"
									>
									<svg class="icon"><use xlink:href="#navnext"></use></svg></button>
								</div>
							</div>
						</div>
						<a class="project-display__cta btn btn--primary" v-bind:href="url" v-bind:title="'Link to ' + title" target="_blank"><span>Launch</span><svg class="icon"><use xlink:href="#exlink"></use></svg></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue'
import close from './../assets/svg/close.svg'
import vuejs from './../assets/svg/vuejs.svg'
import firebase from './../assets/svg/firebase.svg'
import heroku from './../assets/svg/heroku.svg'
import exlink from './../assets/svg/exlink.svg'
import canvas from './../assets/svg/canvas.svg'
import share from './../assets/svg/share.svg'
import underline from './../assets/svg/underline.svg'
import wordpress from './../assets/svg/wordpress.svg'
import netlify from './../assets/svg/netlify.svg'
import bitbucket from './../assets/svg/bitbucket.svg'
import navnext from './../assets/svg/navnext.svg'
import file from './../assets/svg/file.svg'

import Mockup from '~/components/Mockup.vue'
export default {
	head () {
		return {
			bodyAttrs: {
				class: this.projectOpen ? 'p-open' : 'p-close'
			},
			htmlAttrs: {
				class: this.projectOpen ? 'p-open' : 'p-close'
			}
		}
	},
	components: {
		Mockup,
	},
	data () {
		return {
			title: '',
			url: '',
			desc: '',
			tags: '',
			label: 'rc',
			projectOpen: false,
			projects: [
				{
					name: 'Rare Country Awards',
					tags: [
						{
							name: 'Nuxt/Vue',
							icon: 'vuejs'
						},
						{
							name: 'Firebase',
							icon: 'firebase'
						}
					],
					main: 'rc.jpg',
					label: 'rc',
					desc: 'This was an award site built for the 2017 Rare Country Awards in Nashville. During the voting period, authenticated users submitted up to 10 votes a day and became eligible to win a trip to Nashville. I even got to attend the awards show. Coolest project to date!',
					specs: 'The site was powered by <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>, a Vue SSR Framework. I used Firebase to store the data and used Heroku to deploy my Nuxt/node.js instance.',
					url: 'https://www.rarecountryawards.com/'
				},
				{
					name: 'Be.Rare.Us',
					tags: [
						{
							name: 'Canvas',
							icon: 'canvas'
						},
						{
							name: 'Social Authentication',
							icon: 'share'
						}
					],
					main: 'berare.png',
					label: 'br',
					desc: 'This project opened my eyes to the wonderful world of canvas. The photo tool was designed as social media campaign and canvas allowed me to save an image with dynamic text and backgrounds.',
					specs: 'The site was powered by <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>, a Vue SSR Framework. I used Firebase to store the data and used Heroku to deploy my Nuxt/node.js instance.',
					url: 'http://be.rare.us/'
				},
				{
					name: 'MedicareMall.com',
					tags: [
						{
							name: 'WordPress Theme Development',
							icon: 'wordpress'
						},
						{
							name: 'BitBucket',
							icon: 'bitbucket'
						}
					],
					main: 'medicaremall.png',
					label: 'mm',
					desc: 'This site runs on WordPress and it was my first deep dive into building a theme from scratch; (although, I did use <a href="https://underscores.me/" target="_blank">_underscores</a> as a skeleton). This was built around two years ago at the time of writing.',
					specs: 'The site was powered by <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>, a Vue SSR Framework. I used Firebase to store the data and used Heroku to deploy my Nuxt/node.js instance.',
					url: 'https://www.medicaremall.com/'
				},
				{
					name: 'faves.com',
					tags: [
						{
							name: 'Heroku',
							icon: 'heroku'
						}
					],
					main: 'faves.png',
					label: 'fv',
					desc: 'This project was designed to aggregate our top performers for Fans 1st Media sites. I needed a way to server-side render content (for SEO) pulled in from a custom build WordPress endpoint so I went with <a href="https://nuxtjs.org/">Nuxt</a> and deployed the Node.js environment using Heroku.',
					specs: 'The site was powered by <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>, a Vue SSR Framework. I used Firebase to store the data and used Heroku to deploy my Nuxt/node.js instance.',
					url: 'http://faves.com/'
				},
				{
					name: 'Taxonomy Inspector',
					tags: [
						{
							name: 'WordPress Rest API',
							icon: 'wordpress'
						},
						{
							name: 'Netlify (deployment tool)',
							icon: 'netlify'
						}
					],
					main: 'tax-inspect.png',
					label: 'ti',
					desc: 'This is a simple static site I initially built to get a quick look at internal sites’ taxonomy usage. Since the same logic could be applied to any WordPress site, I thought it’d be neat to see how other media companies organized their tags and categories.',
					specs: 'The site was powered by <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>, a Vue SSR Framework. I used Firebase to store the data and used Heroku to deploy my Nuxt/node.js instance.',
					url: 'https://jolly-pike-f07dc0.netlify.com/'
				},
				{
					name: 'Web Design Class Site',
					tags: [
						{
							name: 'Markdown',
							icon: 'file'
						}
					],
					main: 'webdesign.png',
					label: 'wd',
					desc: 'Last spring, I taught a Wed Design course and used this site to guide lessons and projects each class period. <a href="https://kind-beaver-78f31b.netlify.com/handouts/intro-to-html" target="_blank">Using markdown to build each lesson</a> allowed me to quickly document and allow printable versions of each topic.',
					specs: 'The site was powered by <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>, a Vue SSR Framework. I used Firebase to store the data and used Heroku to deploy my Nuxt/node.js instance.',
					url: 'https://kind-beaver-78f31b.netlify.com/'
				}
			]
		}
	},
	methods: {
		showModal (project) {
			this.projectOpen = true;
			this.title = project.name;
			this.url = project.url;
			this.desc = project.desc;
			this.tags = project.tags;
			this.label = project.label;
		},
		goToProject (isNext) {
			isNext = typeof isNext !== 'undefined' ? isNext : true;
			var project;
			var next;
			for (var i = 0; i < this.projects.length; i++) {
				if (this.projects[i].name === this.title) {
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
			this.showModal(this.projects[next])
		},
		hideModal () {
			this.projectOpen = false;
		}
	}
}
</script>

<style lang="scss">
@import '~assets/scss/_variables.scss';
.projects {
	transition: all .3s;
	padding-bottom: 5em;
	&__section {
		padding: 1em 0;
		font-size: 1.5em;
		background-color: $gray;
		margin-bottom: 1em;
	}
	&__section-header {
		font-family: $accent-font;
		span {
			// background-image: url('~assets/svg/underline.svg');
			display: inline-block;
			vertical-align: baseline;
			padding: .1em;
			position: relative;
			.icon {
				left: -1em;
				bottom: -.5em;
				width: 4em;
				height: 1em;
				position: absolute;
				fill: $primary-color;
			}
		}
	}
	&__text {
		padding: 0 .5em;
	}
}
.project-card {
	text-align: center;
	margin-bottom: 2em;
	&__main {
		cursor: pointer;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		display: block;
		background-position: center center;
		background-size: cover;
		margin: 0 auto;
		// border: $border-base/2 solid $primary-color;
		box-shadow: inset 0 0 0 $border-base rgba(#fff, .5),  3px 3px 10px rgba($secondary-color, .3);
	}
}
.project-display {
	transition: all .5s;
	position: fixed;
	left: 0;
	overflow: hidden;
	width: 100%;
	top: 0;
	opacity: 0;
	visibility: hidden;
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
	.p-open & {
		opacity: 1;
		visibility: visible;
		z-index: 2;
	}
	&__btn {
		outline: none;
		position: absolute;
		right: 1em;
		top: 1em;
		border: none;
		z-index: 3;
		background-color: transparent;
		.icon {
			background-color: $primary-color;
			fill: $secondary-color;
			border-radius: 50%;
		}
	}
	&__cta {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		text-transform: uppercase;
		font-size: 1.2em;
		@include lsp(100);
		z-index: 3;
		padding: .5em;
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
	&__slide {
		display: inline-block;
	}
	&__inner {
		padding: 6em 1em 4em;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 2;
		position: absolute;
		overflow-y: scroll;
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
		&--lg {
			text-transform: uppercase;
			font-size: 1.5em;
			@include lsp(50);
			position: relative;
			padding-bottom: .3em;
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
		li {
			margin-bottom: 1em;
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
		padding-bottom: 4em;
	}
	&__btn-wrap {
		position: absolute;
		bottom: 1em;
		left: 0;
		right: 0;
		margin: 0 auto;
		display: flex;
		justify-content: center;
	}
	&__nav {
		font-size: .8em;
		text-transform: uppercase;
		@include lsp(100);
		padding: .5em;
		margin: 0 .3em;
		.icon {
			width: 2em;
			height: 2em;
			fill: $secondary-color;
		}
		&--prev {
			.icon {
				position: relative;
				top: -2px;
				transform: rotate(180deg)
			}
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
		&__inner {
			display: flex;
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
.p-open {
	overflow: hidden;
}
</style>
