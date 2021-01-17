<template>
	<div>
		<h3 class="title title_weight_normal title_size_m">{{ Category.name }}</h3>
	</div>
</template>

<script>
export default {
	props: {
		Category: {
			type: Object,
			required: true,
		},
	}
}
</script>
