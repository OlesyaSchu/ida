export const state = () => ({
	categories: [],
})

export const mutations = {
	SET_CATEGORIES (state, data) {
		state.categories = data;
	},
}

export const getters = {
	CATEGORIES (state) {
		return state.categories;
	}
}
