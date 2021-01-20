<template>
	<svg 
	v-on:click="$emit('addProduct')"
	class="product__cart">
		<use href="~/assets/svg/cart.svg#cart"></use>
	</svg>
</template>

<style lang="scss">
@import '~/assets/styles/mixins';
	.product__cart {
		width: 16px;
		height: 16px;
		
		@include change-color-on-hover(fill, #959DAD, #1F1F1F);
	}
</style>
