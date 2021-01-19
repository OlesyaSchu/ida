<template>
	<div>
		<div v-if="cartIsEmpty">
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
			<p class="title title_weight_normal cart__p">
				Товары в корзине
			</p>
			<ol>
				<ProductInCart />
			</ol>
			<p class="title title_weight_normal cart__p">
				Оформить заказ
			</p>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			cartIsEmpty: true,
		}
	},
}
</script>

<style lang="scss">
@import '~/assets/styles/mixins';
	.cart {
		&__title {
			width: 90%;
			margin: 24px 0;
		}

		&__button {
			width: 100%;
			height: 50px;
			background: #1F1F1F;
			border-radius: 8px;
			color: white;

			@include change-color-on-hover(background,#1F1F1F, #59606D);
		}

		&__p {
			font-size: 18px;
			line-height: 23px;
		}
	}
</style>
