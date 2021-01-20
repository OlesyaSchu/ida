<template>
	<li v-bind:class="getStyleName('')">
		<slot name="header">
		</slot>
		<div v-bind:class="getStyleName('__image')">
			<img v-bind:class="getStyleName('__image_size')" v-bind:src="photo" v-bind:alt="Product.name">
		</div>
		<div v-bind:class="getStyleName('__information')">
			<p class="title title_weight_normal title_size_s title_text-transform_capitalize">{{ name }}</p>
			<p class="title title_size_s">{{ price }}</p>
		</div>
		<div v-bind:class="getStyleName('__rating')">
			<svg v-bind:class="getStyleName('__star_empty')">
				<use href="~/assets/svg/star.svg#star-empty"></use>
			</svg>
			<svg v-bind:class="getStyleName('__star_fill')">
				<use href="~/assets/svg/star.svg#star-fill"></use>
			</svg>
			<div v-bind:class="getStyleName('__star_clear')" v-bind:style="showingRating"></div>
			<p class="title title_weight_normal title_size_xs">{{ Product.rating }}</p>
		</div>
		<slot name="footer">
		</slot>
	</li>
</template>

<script>


export default {
	props: {
		Product: {
			type: Object,
			required: true,
		},
		classProduct: {
			type: String,
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
		getStyleName: function (name) {
			return this.classProduct + name;
		},
	},
}
</script>

<style lang="scss">
	.product-in-products-list {
		flex-direction: column;
		justify-content: space-between;
		position: relative;

		&, .product-in-cart {
			box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
			border-radius: 8px;
			padding: 16px;
			display: flex;
			
		}

		&__image {
			display: flex;
			justify-content: center;
			height: 198px;
		}

		&__rating {
			display: flex;
			gap: 4px;
			color: #F2C94C;
			position: absolute;
			top: 21px;
			left: 18px;
		}

		&__star {
			&_empty {
				width: 14px;
				height: 14px;
				z-index: 30;
			}

			&_fill {
				position: absolute;
				z-index: 10;
			}

			&_clear {
				width: 12px;
				height: 12px;
				position: absolute;
				background-color: white;
				z-index: 20;
			}
		}

		&__information {
			display: flex;
			flex-direction: column;
			align-content: space-between;
			gap: 6px;
		}
	}

	.product-in-cart {
		width: 100%;
		height: 120px;
		display: flex;
		align-items: center;
		box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
		border-radius: 8px;
		padding: 12px 16px;
		display: flex;
		position: relative;

		&__image {
			width: 30%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-content: center;

			&_size {
				height: 100px;
			}
		}

		&__rating {
			display: flex;
			gap: 4px;
			color: #F2C94C;
			position: absolute;
			bottom: 14px;
			left: 133px;
		}

		&__star {
			&_empty {
				width: 14px;
				height: 14px;
				z-index: 30;
			}

			&_fill {
				position: absolute;
				z-index: 10;
			}

			&_clear {
				width: 12px;
				height: 12px;
				position: absolute;
				background-color: white;
				z-index: 20;
			}
		}

		&__information {
			width: 65%;
			align-self: start;
			display: flex;
			flex-direction: column;
			align-content: space-between;
			gap: 6px;
			padding-left: 19px;
		}
	}
</style>
