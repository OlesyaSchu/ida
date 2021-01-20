<template>
	<div>
		<div 
		v-on:click="$emit('closeCart')"
		class="fade"></div>
		<div class="cart">
			<div class="cart__header">
				<h1 class="title title_size_xl">Корзина</h1>
				<img 
				v-on:click="$emit('closeCart')"
				class="cart__exit" 
				src="~/assets/img/close.png">
			</div>
			<CartContent 
			v-on:closeCart="$emit('closeCart')"/>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	}
}
</script>

<style lang="scss">
	.fade {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		z-index: 999;
		background: #FFFFFF;
		opacity: 0.8;
	}

	.cart {
		min-height: 100vh;
		width: 460px;
		position: absolute;
		top: 0;
		right: -88px;
		background: #FFFFFF;
		box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
		border-radius: 8px 0px 0px 8px;
		z-index: 1000;
		padding: 0 48px;

		&__header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 50px;
			margin-bottom: 24px;
		}

		&__exit {
			cursor: pointer;
		}
	}
</style>
