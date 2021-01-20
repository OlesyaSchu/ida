<template>
	<li class="product">
		<div class="product__images">
			<div class="product__rating">
				<svg class="product__rating_z-index_30 product__star">
					<use href="~/assets/svg/star.svg#star-empty"></use>
				</svg>
				<svg class="product__rating_background">
					<use href="~/assets/svg/star.svg#star-fill"></use>
				</svg>
				<div class="product__rating_background_clear" v-bind:style="showingRating"></div>
				<p class="title title_weight_normal title_size_xs">{{ Product.rating }}</p>
			</div>
			<img class="product__image" v-bind:src="photo" v-bind:alt="Product.name">
			<ProductCart 
			v-on:addProduct="addProduct(Product)"/>
		</div>
		<div class="product__information">
			<p class="title title_weight_normal title_size_s title_text-transform_capitalize">{{ name }}</p>
			<p class="title title_size_s">{{ price }}</p>
		</div>
	</li>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
	props: {
		Product: {
			type: Object,
			required: true,
		},
	},
	data () {
		return {
			photo: 'https://frontend-test.idaproject.com' + this.Product.photo,
			name: this.Product.name.toLowerCase(),
			//отделяет три числа пробелом в цене, работает с любой разрядностью
			//делает число строкой, переворачивает ее, добавляет к каждой тройке чисел пробел, переворачивает строку обратно и убирает лишний пробел, если он есть
			price: (this.Product.price + '').split('').reverse().join('').replace(/\d{3}/g, match => match + ' ').split('').reverse().join('').trim() + ' ₽',
			//определяет положение "заглушки", которая будет перекрывать собой часть звезды на фоне, показывая рейтинг товара
			showingRating: {
				top: (this.Product.rating === 5 ? -12 : -(this.Product.rating * 8 / 5 )) + 'px',
				left: '1px',
			},
		};
	},
	methods: {
		...mapMutations({
			addProduct: 'cart/ADD_PRODUCT'
		}),
	}
}
</script>

<style lang="scss">
	.product {
		box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
		border-radius: 8px;
		padding: 16px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		&__images {
			display: flex;
			justify-content: center;
			position: relative;
		}

		&__rating {
			width: 34px;
			height: 100%;
			display: flex;
			gap: 4px;
			color: #F2C94C;
			position: absolute;
			top: 5px;
			left: 3px;

			&_z-index_30 {
				z-index: 30;
			}

			&_background {
				position: absolute;
				z-index: 10;

				&_clear {
					width: 12px;
					height: 12px;
					position: absolute;
					z-index: 20;
					background-color: white;
				}
			}
		}

		&__star {
			width: 14px;
			height: 14px;
		}

		&__image {
			height: 196px;
		}

		&__cart {
			position: absolute;
			right: 0;
		}

		&__information {
			display: flex;
			flex-direction: column;
			align-content: space-between;
			gap: 6px;
		}
	}
</style>
