<template>
	<div>
		<div v-if="!products.length">
			<p class="title title_weight_normal title_size_l cart__title">
				Пока что вы ничего не добавили в корзину.
			</p>
			<button 
			v-on:click="$emit('closeCart')"
			class="title title_weight_normal title_size_m cart__button">
				Перейти к выбору
			</button>
		</div>
		<div v-else>
			<p class="title title_weight_normal cart__text">
				Товары в корзине
			</p>
			<ol class="products-in-cart">
				<Product 
				v-for="(product, index) in products" 
				v-bind:key="index" 
				v-bind:Product="product"
				v-bind:StyleProduct="styleProduct">
					<template v-slot:footer>
						<svg 
						v-on:click="deleteProduct(index)"
						class="product__delete">
							<use href="~/assets/svg/trash.svg#trash"></use>
						</svg>
					</template>
				</Product>
			</ol>
			<form class="cart__forms">
				<p class="title title_weight_normal cart__text">
					Оформить заказ
				</p>
				<div class="cart__list">
					<input 
					class="title title_weight_normal title_size_m cart__form" type="text" value="Ваше имя">
					<input 
					class="title title_weight_normal title_size_m cart__form" type="text" value="Телефон">
					<input 
					class="title title_weight_normal title_size_m cart__form" type="text" value="Адрес">
				</div>
				<input 
				class="title title_weight_normal title_size_m cart__button" type="submit" value="Отправить">
			</form>
		</div>
	</div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

export default {
	data () {
		return {
			styleProduct: "product-in-cart",
		}
	},
	methods: {
		...mapMutations({
			deleteProduct: 'cart/DELETE_PRODUCT',
		})
	},
	computed: {
		...mapGetters({
			products: 'cart/PRODUCTS',
		})
	},
}
</script>

<style lang="scss">
@import '~/assets/styles/mixins';
	.cart {
		&__list {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		&__title {
			width: 90%;
			margin: 25px 0 24px;
		}

		&__button {
			width: 100%;
			height: 50px;
			padding-bottom: 4px;
			background: #1F1F1F;
			border-radius: 8px;
			color: white;
			margin: 24px 0;

			@include change-color-on-hover(background,#1F1F1F, #59606D);
		}

		&__text {
			font-size: 18px;
			line-height: 23px;
			margin-bottom: 16px;
		}

		&__form {
			width: 100%;
			height: 50px;
			border: 0;
			background: #F8F8F8;
			border-radius: 8px;
			color: #959DAD;
			padding-left: 14px;
		}

		&__forms {
			margin: 32px 0;
		}
	}

	.products-in-cart {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.product__delete {
		width: 32px;
		height: 32px;
		margin-top: 4px;
		z-index: 30;

		@include change-color-on-hover(fill, #959DAD, #1F1F1F);
	}
</style>
