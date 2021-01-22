export const state = () => ({
	products: [],
})

export const mutations = {
	SET_PRODUCTS (state, data) {
		state.products = data;
		const parsed = JSON.stringify(state.products);
		localStorage.setItem('productsInCart', parsed);
	},
	ADD_PRODUCT (state, product) {
		state.products.push(product);
		const parsed = JSON.stringify(state.products);
		localStorage.setItem('productsInCart', parsed);
	},
	DELETE_PRODUCT (state, index) {
		state.products.splice(index, 1);
		const parsed = JSON.stringify(state.products);
		localStorage.setItem('productsInCart', parsed);
	},
	DELETE_ALL_PRODUCTS (state) {
		state.products = [];
		const parsed = JSON.stringify(state.products);
		localStorage.setItem('productsInCart', parsed);
	},
}

export const getters = {
	PRODUCTS (state) {
		return state.products;
	}
}
