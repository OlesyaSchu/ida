<template>
	<ol class="products">
		<Product 
		v-for="product in productList" 
		v-bind:key="product.id" 
		v-bind:Product="product"
		/>
	</ol>
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

<style lang="scss">
	.products {
		flex: 1 1 1104px;
		display: grid;
		grid-template-columns: repeat(auto-fill, 264px);
		grid-template-rows: repeat(auto-fill, 272px);
		justify-content: space-between;
		column-gap: 14px;
		row-gap: 17px;
	}
</style>
