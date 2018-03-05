<template>
	<div class="career">
		<section class="career__section career__section--filled">
			<div class="max-container">
				<div class="career__section-col">
					<img src="~assets/img/roo.jpg" alt="Cat looks at camera" class="career__img">
					<div class="career__text">
						<h3 class="career__section-header">You're probably wondering <br>how I ended up here...</h3>
						<p class="career__section-subheading">
							The following is the same information you'll find in my resumè, but broken down to give you a sense of what I gained from each role.
						</p>
					</div>
				</div>
			</div>
		</section>
		<div class="max-container">
			<section class="career__section" v-for="job in jobs">
				<div class="job-card">
					<div class="job-card__main">
						<h3 class="job-card__title">{{job.name}}</h3>
						<h4 class="job-card__subtitle">
							{{job.role}}
						</h4>
					</div>
					<div class="job-card__body">
						<ul class="job-card__tags">
							<li v-for="tag in job.tags">
								<svg class="job-card__icon"><use v-bind="{'xlink:href':'#'+tag.icon}"></use></svg>
								<span class="job-card__tooltip">
									<tool-tip :tipText="tag.name"/>
								</span>
							</li>
						</ul>
						<div class="job-card__body-inner">
							<p class="job-card__desc" v-html="job.bg"></p>
							<div class="job-card__work">
								<h4 class="job-card__body-heading">
									Work from {{job.name}}
								</h4>
								<p class="job-card__desc" v-html="job.work"></p>
							</div>
							<div class="job-card__plug">
								<h4 class="job-card__body-heading">
									Shameless plug
								</h4>
								<p class="job-card__desc" v-html="job.plug"></p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue'
import css from './../assets/svg/css.svg'
import html5 from './../assets/svg/html5.svg'
import javascript from './../assets/svg/javascript.svg'
import jquery from './../assets/svg/jquery.svg'
import wordpress from './../assets/svg/wordpress.svg'
import adobephotoshop from './../assets/svg/adobephotoshop.svg'
import adobeillustrator from './../assets/svg/adobeillustrator.svg'
import github from './../assets/svg/github.svg'
import vuejs from './../assets/svg/vuejs.svg'
import trello from './../assets/svg/trello.svg'
import heroku from './../assets/svg/heroku.svg'
import googleanalytics from './../assets/svg/googleanalytics.svg'
import php from './../assets/svg/php.svg'
import ToolTip from '~/components/ToolTip.vue'
export default {
	components: {
		ToolTip
	},
	data () {
		return {
			jobs: [
				{
					name: 'MedicareMall.com',
					role: 'Web Designer/Dev',
					tags: [
						{
							name: 'HTML',
							icon: 'html5',
						},
						{
							name: 'CSS',
							icon: 'css',
						},
						{
							name: 'JavaScript',
							icon: 'javascript',
						},
						{
							name: 'WordPress',
							icon: 'wordpress',
						},
						{
							name: 'Photoshop',
							icon: 'adobephotoshop',
						}
					],
					bg: 'I started as a video editor and ended up learning <span>HTML</span>, <span>CSS</span>, <span>WordPress</span> and began to fiddle with <span>JS/jQuery</span>.',
					work: 'At the time of writing this, you can still see the template I built for the good folks at this company at <a href="https://www.medicaremall.com/">MedicareMall.com</a>.',
					plug: 'If ever you’re on the hunt for a Medicare plan, this is the place to go. My parents even recently found plans through MedicareMall.'
				},
				{
					name: 'Volusion',
					role: 'Front-End Developer',
					tags: [
						{
							name: 'HTML',
							icon: 'html5',
						},
						{
							name: 'CSS',
							icon: 'css',
						},
						{
							name: 'JavaScript',
							icon: 'javascript',
						},
						{
							name: 'WordPress',
							icon: 'wordpress',
						},
						{
							name: 'Photoshop',
							icon: 'adobephotoshop',
						},
						{
							name: 'Illustrator',
							icon: 'adobeillustrator'
						},
						{
							name: 'GitHub',
							icon: 'github'
						}
					],
					bg: 'Volusion is a SASS <strong>e-commerce</strong> platform and Creative Services where I worked was a high volume, fast production agency-type environment. We built custom designed templates and premium themes for Volusion customers using <strong>HTML/CSS/JS.</strong> I worked on a team of 12-15 devs and where we used tools like <strong>Yeoman</strong> and <strong>Grunt/Gulp</strong> to speed up repetitive workflows.',
					work: 'I worked on countless templates for Volusion Creative Services clients, but I unfortunately did not keep track of those. I did write a blog article about SVGs while I was there. Read that article <a href="https://www.volusion.com/blog/svgs/" target="_blank">here</a>. P.S. Looks like some images are broken :(.',
					plug: 'Working at Volusion on a team developers was one of the best moves of my career. If you are shopping around for an e-commerce platform, keep in mind that there are some brilliant and talented people working for Volusion.'
				},
				{
					name: 'Cox Media Group',
					role: 'Web Development Manager',
					tags: [
						{
							name: 'HTML',
							icon: 'html5',
						},
						{
							name: 'CSS',
							icon: 'css',
						},
						{
							name: 'JavaScript',
							icon: 'javascript',
						},
						{
							name: 'WordPress',
							icon: 'wordpress',
						},
						{
							name: 'Photoshop',
							icon: 'adobephotoshop',
						},
						{
							name: 'Illustrator',
							icon: 'adobeillustrator'
						},
						{
							name: 'GitHub',
							icon: 'github'
						},
						{
							name: 'PHP',
							icon: 'php'
						},
						{
							name: 'Trello',
							icon: 'trello'
						},
						{
							name: 'Google Analytics',
							icon: 'googleanalytics'
						},
						{
							name: 'Heroku',
							icon: 'heroku'
						},
						{
							name: 'Vue.js/Nuxt',
							icon: 'vuejs'
						}
					],
					bg: 'Cox Media Group is a media company with a long history of successful newspaper, tv, and radio properties and I work on the rapidly-growing digital presence of the company. In this role I’ve done everything from <strong>site migrations</strong> to <strong>single page apps</strong>, to <strong>WordPress plugin/theme development.</strong> As the dev manager, I balance helping set priorities and projects for my team while actively contributing to the code-base to finish assigned projects of my own.',
					work: 'You can see our handy-work on sites like: <a href="https://rare.us/" target="_blank">rare.us</a>, <a href="https://rarecountry.com/" target="_blank">rarecountry.com</a>, <a href="https://clarkdeals.com/" target="_blank">clarkdeals.com</a>, and <a href="https://clark.com/" target="_blank">clark.com</a>. I contributed mostly to the front-end of these sites building out template logic and dynamic page features.',
					plug: 'CMG values every person in the company; it really feels like a family. Working on a small digital innovation team, I’m both inspired by my teammates’ grit and resourcefulness and empowered by the fact that my ideas matter.'
				}
			]
		}
	}
}
</script>

<style lang="scss">
@import '~assets/scss/_variables.scss';
.career {
	&__section {
		// border-top: $border-base solid $primary-color;
		padding: 1em;
		&--filled {
			background-color: $gray;
		}
	}
	&__text {
		padding: 1em;
		line-height: 1.6;
	}
	&__img {
		max-width: 100%;
		margin: 0 auto;
		display: block;
	}
	&__section-header {
		font-family: $accent-font;
		font-size: 1.5em;
		line-height: 1.4;
	}
	@include respond-to(sm-and-up) {
		&__section-col {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		&__img {
			width: 50%;
		}
		&__text {
			text-align: left;
			padding: 1em 4em;
		}
	}
}
.job-card {
	text-align: left;
	box-shadow: 1px 1px 3px rgba($secondary-color, .3);
	&__main {
		background-color: $primary-color;
		color: $secondary-color;
		padding: 1em;
	}
	&__title,
	&__subtitle {
		margin: 0;
	}
	&__subtitle {
		padding: .3em 0 1em;
		position: relative;
	}
	&__tags {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		padding: .5em 1em;
		background-color: $gray;
		margin: 0;
		width: 100%;
		li {
			padding: 0 .3em;
			position: relative;
			&:hover {
				.job-card__tooltip {
					opacity: 1;
					visibility: visible;
				}
			}
		}
	}
	&__icon {
		width: 2em;
		height: 2em;
	}
	&__tooltip {
		transition: opacity .3;
		position: absolute;
		bottom: 100%;
		margin-bottom: 5px;
		left: 50%;
		transform: translateX(-50%);
		white-space: nowrap;
		opacity: 0;
		visibility: hidden;
	}
	&__body {
		span {
			font-weight: bold;
		}
		a {
			font-weight: bold;
		}
	}
	&__body-inner {
		padding: 1em;
	}
	&__desc {
		line-height: 1.4;
		margin: .5em 0;
	}
	&__body-heading:after,
	&__subtitle:after {
		content: '';
		width: 50px;
		height: $border-base/2;
		background-color: #fff;
		position: absolute;
		bottom: .5em;
		left: 0;
	}
	&__body-heading {
		position: relative;
		margin: 0;
		padding: 2em 0 1em;
		&:after {
			background-color: $primary-color;
			left: 0;
		}
	}
	@include respond-to(sm-and-up) {
		display: flex;
		justify-content: space-between;
		&__main {
			width: 25%;
		}
		&__body {
			width: 75%;
		}
	}
}
</style>
