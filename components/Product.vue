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
		};
	},
}
</script>