<template>
	<header class="header_box-shadow">
		<div class="container header">
			<h2 class="title title_size_l">TestList</h2>
			<div 
			v-on:click="changeVisibleCart"
			class="cart-icon_position">
				<p 
				v-if="products.length"
				class="title cart-icon__quantity">
					{{ products.length }}
				</p>
				<svg class="cart-icon">
					<use href="~/assets/svg/cart.svg#cart"></use>
				</svg>
			</div>
			<Cart 
			v-on:closeCart="changeVisibleCart"
			v-show="cartIsOpen" />
		</div>
	</header>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	data () {
		return {
			cartIsOpen: false,
		}
	},
	methods: {
		changeVisibleCart: function() {
			this.cartIsOpen = !this.cartIsOpen;
		}
	},
	computed: {
		...mapGetters({
			products: 'cart/PRODUCTS'
		})
	}
}
</script>

<style lang="scss" scoped>
	.header {
		height: 66px;
		padding-bottom: 4px;
		position: relative;
	}
</style>

<style lang="scss">
	.cart-icon {
		width: 34px;
		height: 34px;
		fill: #1F1F1F;
		cursor: pointer;
		
		&_position {
			position: absolute;
			top: 16px;
			right: 15px;
		}

		&__quantity {
			width: 12px;
			height: 12px;
			position: absolute;
			right: -1px;
			background-color: #959DAD;
			border-radius: 6px;
			color: white;
			font-size: 0.5rem;
			line-height: 0.75rem;
			text-align: center;
		}
	}
</style>
