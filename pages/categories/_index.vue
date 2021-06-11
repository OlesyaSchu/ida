<template>
	<ProductsList 
	v-bind:productsList="productsList"
	/>
</template>

<script>
export default {
	async asyncData({ params, store }) {
		const productsList = await fetch('https://frontend-test.idaproject.com/api/product?category=' + params.index)
			.then(response => response.json())
			.then(data => {
				store.commit('productsList/SET_PRODUCTS_LIST', data);
				store.commit('productsList/SORT_PRODUCTS_LIST');
				return data;
				});
		return { productsList }
	},
}
</script>
