<template>
	<ProductsList 
	v-bind:Category="category"
	/>
</template>

<script>

export default {
	async asyncData({ params }) {
      const category = params.index;
      return { category }
    },
}
</script>