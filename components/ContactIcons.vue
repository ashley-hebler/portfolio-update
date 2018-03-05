<template>
	<ul class="contact-icons">
		<li class="contact-icons__item" v-for="item in icons">
			<a v-bind:href="item.link" v-bind:title="item.title" target="_blank" @click="contactLink(item, $event)">
				<svg class="contact-icons__icon"><use v-bind="{'xlink:href':'#' + item.icon}"></use></svg>
			</a>
		</li>
	</ul>
</template>

<script>
	import github from './../assets/svg/github.svg'
	import linkedin from './../assets/svg/linkedin.svg'
	import codepen from './../assets/svg/codepen.svg'
	import envelope from './../assets/svg/envelope.svg'
	export default {
		data () {
			return {
				icons: [
					{
						title: 'Codepen',
						link: 'https://codepen.io/ahebler/',
						icon: 'codepen'
					},
					{
						title: 'Github',
						link: 'https://github.com/ashley-hebler',
						icon: 'github'
					},
					{
						title: 'LinkedIn',
						link: 'https://www.linkedin.com/in/ashleyhebler/',
						icon: 'linkedin'
					}
				]
			}
		},
		methods: {
			contactLink (item, event) {
				if (item.title === 'Email') {
					event.preventDefault()

				}
			}
		}
	}
</script>
<style lang="scss">
@import '~assets/scss/_variables.scss';
.contact-icons {
	list-style: none;
	padding: 0;
	&__item {
		display: inline-block;
		margin: 0 1em;
		vertical-align: middle;
	}
	&__icon {
		width: 2em;
		height: 2em;
		fill: $secondary-color;
	}
}
</style>
