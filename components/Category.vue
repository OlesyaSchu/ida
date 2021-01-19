<template>
	<div>
		<a 
		v-on:click="isActive = !isActive"
		v-bind:class="{active: isActive}"
		class="title title_weight_normal title_size_m">{{ Category.name }}</a>
	</div>
</template>

<script>
export default {
	props: {
		Category: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/mixins';
	.title {
		@include change-color-on-hover(color, #959DAD, #59606D);
	}

	.active {
		text-decoration-line: underline;
		color: #1F1F1F;
	}
</style>
