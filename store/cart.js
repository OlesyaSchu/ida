export const state = () => ({
	products: [],
})

export const mutations = {
	ADD_PRODUCT (state, product) {
		state.products.push(product);
	},
	DELETE_PRODUCT (state, index) {
		state.products.splice(index, 1);
	},
}

export const getters = {
	PRODUCTS (state) {
		return state.products;
	}
}
