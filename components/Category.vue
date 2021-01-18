<template>
	<div>
		<h3 class="title title_weight_normal title_size_m">{{ Category.name }}</h3>
	</div>
</template>

<script>
export default {
	props: {
		Category: {
			type: Object,
			required: true,
		},
	}
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/mixins';
	.title {
		@include change-color-on-hover(color, #959DAD, #1F1F1F);
	}
</style>
