<template>
	<ol class="categories">
		<Category
		v-for="category in categories"
		v-bind:key="category.id"
		v-bind:Category="category"
		/>
	</ol>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	data () {
		return {
			categoryList: [],
		}
	},
	computed: {
		...mapGetters({
			categories: 'categories/CATEGORIES',
		})
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
