<template>
	<li class="product">
		<img 
		class="product__image" 
		v-bind:src="photo" 
		v-bind:alt="Product.name">
		<div class="product__information">
			<p class="title title_weight_normal title_size_s title_text-transform_capitalize">{{ name }}</p>
			<p class="title title_size_s">{{ price }}</p>
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
			<div v-on:click="$emit('deleteProduct')">
				<svg class="product__delete">
					<use href="~/assets/svg/trash.svg#trash"></use>
				</svg>
			</div>
		</div>
	</li>
</template>

<script>
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
			price: (this.Product.price + '').split('').reverse().join('').replace(/\d{3}/g, match => match + ' ').split('').reverse().join('').trim() + ' ₽',
			showingRating: {
				top: (this.Product.rating === 5 ? -12 : -(this.Product.rating * 8 / 5 )) + 'px',
				left: '1px',
			},
		};
	},
}
</script>

<style>

</style>
