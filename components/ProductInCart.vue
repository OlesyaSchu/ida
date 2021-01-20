<template>
	<li class="product">
		<img 
		class="product__image" 
		v-bind:src="photo" 
		v-bind:alt="Product.name">
		<div class="product__information">
			<p class="title title_weight_normal title_size_s title_text-transform_capitalize">{{ name }}</p>
			<p class="title title_size_s">{{ price }}</p>
			<div class="product__rating">
				<svg class="product__rating_z-index_30" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M7.00002 0.125C7.2379 0.125 7.45517 0.260045 7.56046 0.47336L9.34643 4.09154L13.3404 4.67532C13.5758 4.70972 13.7712 4.87473 13.8445 5.10098C13.9179 5.32723 13.8565 5.57552 13.6861 5.74147L10.7966 8.55585L11.4785 12.5318C11.5187 12.7663 11.4223 13.0033 11.2299 13.1432C11.0374 13.283 10.7822 13.3014 10.5716 13.1907L7.00002 11.3124L3.42843 13.1907C3.21785 13.3014 2.96267 13.283 2.77018 13.1432C2.5777 13.0033 2.48129 12.7663 2.52151 12.5318L3.20344 8.55585L0.313935 5.74147C0.143549 5.57552 0.0821284 5.32723 0.155489 5.10098C0.22885 4.87473 0.424275 4.70972 0.659626 4.67532L4.6536 4.09154L6.43958 0.47336C6.54487 0.260045 6.76213 0.125 7.00002 0.125ZM7.00002 2.16203L5.62921 4.93914C5.53825 5.12342 5.36251 5.25121 5.15916 5.28093L2.09278 5.72913L4.3111 7.88978C4.45852 8.03336 4.52581 8.24032 4.49102 8.44315L3.96763 11.4948L6.70911 10.0531C6.89122 9.95731 7.10881 9.95731 7.29093 10.0531L10.0324 11.4948L9.50901 8.44315C9.47422 8.24032 9.54151 8.03336 9.68893 7.88978L11.9073 5.72913L8.84087 5.28093C8.63753 5.25121 8.46179 5.12342 8.37083 4.93914L7.00002 2.16203Z" fill="#F2C94C"/>
				</svg>
				<svg class="product__rating_background" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00002 0.162048L3.62921 2.93915C3.53825 3.12343 3.3625 3.25122 3.15916 3.28094L0.0927734 3.72914L2.3111 5.88979C2.45852 6.03338 2.52581 6.24034 2.49102 6.44317L1.96763 9.49481L4.70911 8.05309C4.89122 7.95732 5.10881 7.95732 5.29092 8.05309L8.0324 9.49481L7.50901 6.44317C7.47422 6.24034 7.54151 6.03338 7.68893 5.88979L9.90726 3.72914L6.84087 3.28094C6.63753 3.25122 6.46179 3.12343 6.37082 2.93915L5.00002 0.162048Z" fill="#F2C94C"/>
				</svg>
				<div class="product__rating_background_clear" v-bind:style="showingRating"></div>
				<p class="title title_weight_normal title_size_xs">{{ Product.rating }}</p>
			</div>
		</div>
		<svg 
		v-on:click="$emit('deleteProduct')"
		class="product__cart product__delete"
		width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 9.44772 6.44772 9 7 9H25C25.5523 9 26 9.44772 26 10C26 10.5523 25.5523 11 25 11H7C6.44772 11 6 10.5523 6 10Z"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M14 7C13.7348 7 13.4804 7.10536 13.2929 7.29289C13.1054 7.48043 13 7.73478 13 8V9H19V8C19 7.73478 18.8946 7.48043 18.7071 7.29289C18.5196 7.10536 18.2652 7 18 7H14ZM21 9V8C21 7.20435 20.6839 6.44129 20.1213 5.87868C19.5587 5.31607 18.7956 5 18 5H14C13.2044 5 12.4413 5.31607 11.8787 5.87868C11.3161 6.44129 11 7.20435 11 8V9H9C8.44772 9 8 9.44772 8 10V24C8 24.7957 8.31607 25.5587 8.87868 26.1213C9.44129 26.6839 10.2043 27 11 27H21C21.7957 27 22.5587 26.6839 23.1213 26.1213C23.6839 25.5587 24 24.7957 24 24V10C24 9.44772 23.5523 9 23 9H21ZM10 11V24C10 24.2652 10.1054 24.5196 10.2929 24.7071C10.4804 24.8946 10.7348 25 11 25H21C21.2652 25 21.5196 24.8946 21.7071 24.7071C21.8946 24.5196 22 24.2652 22 24V11H10Z"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M14 14C14.5523 14 15 14.4477 15 15V21C15 21.5523 14.5523 22 14 22C13.4477 22 13 21.5523 13 21V15C13 14.4477 13.4477 14 14 14Z"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M18 14C18.5523 14 19 14.4477 19 15V21C19 21.5523 18.5523 22 18 22C17.4477 22 17 21.5523 17 21V15C17 14.4477 17.4477 14 18 14Z"/>
		</svg>
	</li>
</template>

<script>
export default {
	props: {
		Product: {
			type: Object,
			required: true,
		},
	},
	data () {
		return {
			photo: 'https://frontend-test.idaproject.com' + this.Product.photo,
			name: this.Product.name.toLowerCase(),
			price: (this.Product.price + '').split('').reverse().join('').replace(/\d{3}/g, match => match + ' ').split('').reverse().join('').trim() + ' ₽',
			showingRating: {
				top: (this.Product.rating === 5 ? -12 : -(this.Product.rating * 8 / 5 )) + 'px',
				left: '1px',
			},
		};
	},
}
</script>

<style>

</style>
