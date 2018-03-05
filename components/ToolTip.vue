<template>
	<div class="tooltip">
		<span v-html="tipText"></span>
	</div>
</template>

<script>
	export default {
		props: ['tipText']
	}
</script>
<style lang="scss">
@import '~assets/scss/_variables.scss';
.tooltip {
	background-color: $secondary-color;
	color: #fff;
	padding: .3em;
	position: relative;
	&:before {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 5px 10px 0 10px;
		border-color: $secondary-color transparent transparent transparent;
		top: 100%;
		left: 0;
		right: 0;
		margin: 0 auto;
	}
	a {
		color: #fff;
	}
	span {
		display: block;
	}
}
</style>
