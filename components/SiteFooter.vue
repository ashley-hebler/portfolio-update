<template>
	<!-- Footer -->
	<footer class="site-footer">
		<div class="max-container">
			<div class="site-footer__inner">
				<div class="site-footer__block site-footer__block--first">
					<p>&copy; 2018 Ashley Hebler - <a href="mailto:ash.heb.dev+portfolio">ash.heb.dev@gmail.com</a></p>
					Aren't those cool brand icons? Find them at <a href="https://github.com/simple-icons/simple-icons" title="Simple Icons" class="site-footer__link">simpleicons.org</a>
				</div>
				<div class="site-footer__block site-footer__block--last">
					<contact-icons/>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
	import ContactIcons from '~/components/ContactIcons.vue'
	export default {
		components: {
			ContactIcons
		}
	}
</script>
<style lang="scss">
@import '~assets/scss/_variables.scss';
.site-footer {
	padding: 2em 0;
	border-top: $border-base solid $gray;
	background-color: $gray;
	&__link {
		text-decoration: underline;
	}
	@include respond-to(md-and-up) {
		&__inner {
			padding: 1em;
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center;
		}
		&__block {
			text-align: left;
			&--last {
				text-align: right;
			}
		}
	}
}
</style>
