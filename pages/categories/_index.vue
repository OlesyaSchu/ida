<template>
	<ProductsList 
	v-bind:productList="productList"
	/>
</template>

<script>

export default {
	async asyncData({ params }) {
      const category = params.index;
      return { category }
	},
	async asyncData({ params }) {
		const productList = await fetch('https://frontend-test.idaproject.com/api/product?category=' + params.index)
			.then(response => response.json())
			.then(commits => commits);
		return { productList }
	},
}
</script>