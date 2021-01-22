<template>
	<div>
		<div v-if="!products.length && !formIsSent">
			<p class="title title_weight_normal title_size_l cart__title">
				Пока что вы ничего не добавили в корзину.
			</p>
			<button 
			v-on:click="$emit('closeCart')"
			class="title title_weight_normal title_size_m cart__button">
				Перейти к выбору
			</button>
		</div>
		<div v-if="products.length">
			<p class="title title_weight_normal cart__text">
				Товары в корзине
			</p>
			<transition-group class="products-in-cart" name="slide-up" tag="ol" appear>
				<Product 
				v-for="(product, index) in products" 
				v-bind:key="product.id + product.name" 
				v-bind:Product="product"
				v-bind:classProduct="classProduct">
					<template v-slot:footer>
						<svg 
						v-on:click="deleteProduct(index)"
						class="product__delete">
							<use href="~/assets/svg/trash.svg#trash"></use>
						</svg>
					</template>
				</Product>
			</transition-group>
			<div class="cart__forms">
				<p class="title title_weight_normal cart__text">
					Оформить заказ
				</p>
				<div class="cart__list">
					<input
					v-model="name" 
					class="title title_weight_normal title_size_m cart__form" type="text"
					placeholder="Ваше имя" maxlength="20" required>
					<input 
					v-on:click="addMask"
					v-on:input="changeNumber"
					v-model="number"
					class="title title_weight_normal title_size_m cart__form" type="text" 
					id="number-input"
					placeholder="Телефон" maxlength="17" required>
					<input 
					v-model="address"
					class="title title_weight_normal title_size_m cart__form" type="text" 
					placeholder="Адрес" maxlength="80" required>
				</div>
				<button 
				v-on:click="sendForm"
				class="title title_weight_normal title_size_m cart__button">
					Отправить
				</button>
			</div>
		</div>
		<div 
		v-if="formIsSent && !products.length"
		class="application">
			<img class="application__image" src="~/assets/img/ok-hand.png" alt="ok-hand">
			<h1 class="title application__title">Заявка успешно отправлена</h1>
			<p class="title title_weight_normal title_size_m application__text">Вскоре наш менеджер свяжется с Вами</p>
		</div>
	</div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

export default {
	data () {
		return {
			classProduct: 'product-in-cart',
			name: '', 
			number: '', 
			address: '',
			formIsSent: false,
		}
	},
	mounted () {
		if (localStorage.getItem('productsInCart')) {
			try {
				const data = JSON.parse(localStorage.getItem('productsInCart'));
				this.setProducts(data);
			} catch(error) {
				localStorage.removeItem('productsInCart');
			}
		}
	},
	methods: {
		...mapMutations({
			setProducts: 'cart/SET_PRODUCTS',
			deleteProduct: 'cart/DELETE_PRODUCT',
			deleteAllProducts: 'cart/DELETE_ALL_PRODUCTS',
		}),
		addMask: function () {
			if (this.number === '') {
				this.number = '+7 ___ ___-__-__';
				this.replaceCursor();
			} 
		},
		changeNumber: function () {
			this.number = this.number.replace(/_/, '');
			this.replaceCursor();
			this.checkNumber();
		},
		replaceCursor: function () {
			let positionOfCursor = this.number.split('').findIndex(elem => elem === '_');
			let elem = document.getElementById('number-input');
			this.$nextTick(() => {
				elem.setSelectionRange(positionOfCursor, positionOfCursor);
			});
		},
		checkNumber: function () {
			if (this.number.search(/^\+7 ([_\d]){3} ([_\d]){3}-([_\d]){2}-([_\d]){2}$/) === -1) {
				this.number = this.number.replace(/(\+7)?[ _-]/g, '').replace(/[^0-9]/g, '').split('').reduce((str,el) => str.replace(/[_]/, el) ,"+7 ___ ___-__-__");
				this.replaceCursor();
			}
		},
		sendForm: function () {
			if (this.inputsAreCompleted) {
				this.deleteAllProducts();
				this.formIsSent = true;
			} else {
				alert("Заполните все формы до конца!");
			}
		},
	},
	computed: {
		...mapGetters({
			products: 'cart/PRODUCTS',
		}),
		inputsAreCompleted: function () {
			return this.name.length && (this.number.replace(/(\+7)?[ _-]/g, '').length === 10) && this.address.length;
		}
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
			color: #1F1F1F;
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

	.application {
		width: 100%;
		height: 87vh;
		position: absolite;
		top: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;

		&__image {
			margin: 24px;
		}

		&__title {
			font-size: 1.5rem;
		}

		&__text {
			padding-top: 2px;
			color: #59606D;
		}
	}
</style>
