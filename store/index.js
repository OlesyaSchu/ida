export const actions = {
	async nuxtServerInit({ commit }) {
		await fetch('https://frontend-test.idaproject.com/api/product-category')
			.then(response => response.json())
			.then(data => commit('categories/SET_CATEGORIES', data));
	},
}
