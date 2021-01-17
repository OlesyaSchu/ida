<template>
	<li>
		<h3>{{ Product.name }}</h3>
		<h3>{{ Product.price }}</h3>
		<p>{{ Product.rating }}</p>
		<img v-bind:src="photo" v-bind:alt="Product.name">
		<Cart />
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
			//отделяет три числа пробелом в цене, работает с любой разрядностью
			//делает число строкой, переворачивает ее, добавляет к каждой тройке чисел пробел, переворачивает строку обратно и убирает лишний пробел, если он есть
			price: (this.Product.price + '').split('').reverse().join('').replace(/\d{3}/g, match => match + ' ').split('').reverse().join('').trim() + ' ₽',
		};
	},
}
</script>