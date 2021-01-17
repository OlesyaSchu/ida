<template>
	<ol class="categories">
		<Category
		v-for="category in categoryList"
		v-bind:key="category.id"
		v-bind:Category="category"
		/>
	</ol>
</template>

<script>
export default {
	data () {
		return {
			categoryList: [],
		}
	},
	mounted: function () {
		fetch('https://frontend-test.idaproject.com/api/product-category')
      .then(response => response.json())
      .then(commits => (this.categoryList = commits));
	}
}
</script>

<style lang="scss">
	.categories {
		flex: 1 1 161px;
		align-self: flex-start;
		display: flex;
		flex-direction: column;
		gap: 1.0625rem;
	}
</style>
