<template>
	<div class="mockup" v-bind:class="device">
		<div class="mockup__top"></div>
		<div class="mockup__body">
			<img v-bind:src="img" alt="Rare" class="mockup__img">
		</div>
	</div>
</template>
<script>
// import AppLogo from '~/components/AppLogo.vue'
import Mockup from '~/components/Mockup.vue'
export default {
	props: ['img', 'device']
}
</script>

<style lang="scss">
@import '~assets/scss/_variables.scss';
.mockup {
	box-shadow: 0 0.1em .5em 0 rgba(0, 0, 0, 0.2);
	&__top {
		position: relative;
		&:before {
			display: block;
			position: absolute;
			content: '';
			top: -1.25em;
			left: 1em;
			width: 0.5em;
			height: 0.5em;
			border-radius: 50%;
		}
		.desktop & {
			border-top: 2em solid rgba($gray, 0.7);
			border-radius: 3px 3px 0 0;
			&:before {
				left: auto;
				right: 4em;
				background-color: #f44;
				box-shadow: 0 0 0 1px #f44, 1.5em 0 0 1px #9b3, 3em 0 0 1px #fb5;
			}
		}
		.phone & {
			&:before {
				top: auto;
				bottom: -.2em;
				left: 0;
				right: 0;
				margin: 0 auto;
				width: 3em;
				height: 0.4em;
				border-radius: 20px;
				background-color: $secondary-color;
			}
			&:after {
				content: '';
				position: absolute;
				top: -1em;
				left: 0;
				right: 0;
				margin: 0 auto;
				width: 2em;
				height: 0.2em;
				border-radius: 40px;
				background-color: $gray;
			}
		}
	}
	&__body {
		background-color: $gray;
		.phone & {
			border-radius: 10px;
			overflow: hidden;
		}
	}
	&__img {
		width: 100%;
	}
	//	width: 320px;
	// height: 568px;

	&.phone {
		padding: 30px 9px 0px;
		border-radius: 18px;
		width: 120px;
		height: 265px;
		background: $secondary-color;
	}
}
</style>
