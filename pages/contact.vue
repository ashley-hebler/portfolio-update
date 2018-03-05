<template>
	<div class="splash" v-bind:class="{ 'show': tipShow, 'no-show': !tipShow }">
		<div class="contact">
			<h1 class="splash__title">
				Contact
			</h1>
			<h2 class="splash__subtitle splash__subtitle--alt">
				ash.heb.dev@gmail.com
			</h2>
			<div class="splash__btn-wrap">
				<button to="/career" class="splash__btn btn btn--default" v-clipboard:copy="email"
      v-clipboard:success="onCopy" v-clipboard:error="onError">
      				Copy address to clipboard
      				<span class="splash__tool-tip">
      					<tool-tip :tipText="'Copied!'"/>
      				</span>
      			</button>
				<a href="mailto:ash.heb.dev@gmail.com" class="splash__btn btn btn--primary">Open in your mail client</a>
			</div>
			<div class="splash__btn-wrap">
				<contact-icons/>
			</div>
		</div>
	</div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import ContactIcons from '~/components/ContactIcons.vue'
import ToolTip from '~/components/ToolTip.vue'
export default {
	components: {
		AppLogo,
		ContactIcons,
		ToolTip
	},
	data () {
		return {
			email: 'ash.heb.dev@gmail.com',
			tipShow: false
		}
	},
	methods: {
		onCopy: function (e) {
			let vm = this
			this.tipShow = true
			setTimeout(
				function() {
					vm.tipShow = false
				}, 1500);
		},
		onError: function (e) {
			alert('Failed to copy texts')
		}
	}
}
</script>

<style lang="scss">
@import '~assets/scss/_variables.scss';

</style>
