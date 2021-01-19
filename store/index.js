export const state = () => ({
	categories: [],
})

export const mutations = {
	SET_CATEGORIES (state, data) {
		state.categories = data;
	},
}

export const actions = {
	async nuxtServerInit({ commit }) {
		await fetch('https://frontend-test.idaproject.com/api/product-category')
			.then(response => response.json())
			.then(data => commit('SET_CATEGORIES', data));
	},
}

export const getters = {
	CATEGORIES (state) {
		return state.categories;
	}
}