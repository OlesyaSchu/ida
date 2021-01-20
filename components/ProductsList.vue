<template>
	<ol class="products">
		<Product 
		v-for="product in productList" 
		v-bind:key="product.id" 
		v-bind:Product="product"
		v-bind:classProduct="classProduct">
			<template v-slot:header>
				<svg 
				v-on:click="addProduct(product)"
				class="product__cart">
					<use href="~/assets/svg/cart.svg#cart"></use>
				</svg>
			</template>
		</Product>
	</ol>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
	props: ['productList'],
	data () {
		return {
			classProduct: "product-in-products-list",
		}
	},
	methods: {
	...mapMutations({
		addProduct: 'cart/ADD_PRODUCT'
		}),
	},
}
</script>

<style lang="scss">
@import '~/assets/styles/mixins';
	.products {
		flex: 1 1 1104px;
		display: grid;
		grid-template-columns: repeat(auto-fill, 264px);
		grid-template-rows: repeat(auto-fill, 272px);
		justify-content: space-between;
		column-gap: 14px;
		row-gap: 16px;
	}
	.product__cart {
		position: absolute;
		right: 17px;
		width: 16px;
		height: 16px;
		z-index: 30;

		@include change-color-on-hover(fill, #959DAD, #1F1F1F);
	}
</style>
