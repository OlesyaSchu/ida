<template>
	<div>
		<ol>
			<Product 
			v-for="product in productList" 
			v-bind:key="product.id" 
			v-bind:Product="product"
			/>
		</ol>
	</div>
</template>

<script>
export default {
	data() {
		return {
			productList: [],
		}
	},
	mounted: function () {
		fetch('https://frontend-test.idaproject.com/api/product?category=1')
			.then(response => response.json())
			.then(commits => (this.productList = commits));
	},
}
</script>

<style></style>
