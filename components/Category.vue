<template>
	<div>
		<p>{{ Category.name }}</p>
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