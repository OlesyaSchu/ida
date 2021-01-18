<template>
	<li class="title title_weight_normal title_size_s select__item">{{ name }}</li>
</template>

<script>
export default {
	props: {
		Select: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			name: 'По ' + this.Select.name,
		}
	}
}
</script>

<style lang="scss">
@import '~/assets/styles/mixins';
	.select__item {
		width: 160px;
		height: 26px;
		line-height: 22px;
		padding-left: 12px;

		@include change-color-on-hover(color, #959DAD, #1F1F1F);

		&:hover {
			background-color: #F8F8F8;
		}
	}
</style>
