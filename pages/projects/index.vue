<template>
	<div class="projects">
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
				<div class="grid__item" v-for="project in $store.state.projects">
					<div class="project-card">
						<nuxt-link class="project-card__main" v-bind:title="project.name" v-bind:style="{ 'background-image': 'url(' + require('assets/img/' + project.main ) + ')' }" v-bind:to="'/projects/' + project.slug">
						</nuxt-link>
						<div class="project-card__body">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import underline from './../../assets/svg/underline.svg'
export default {
	scrollToTop: true
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

</style>
