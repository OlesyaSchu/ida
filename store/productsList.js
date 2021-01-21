export const state = () => ({
	productsList: [],
	sortBy: 'цене', 
})

export const mutations = {
	SET_PRODUCTS_LIST (state, data) {
		state.productsList = data;
	},
	SET_SORT_BY (state, data) {
		state.sortBy = data;
	},
	SORT_PRODUCTS_LIST (state) {
		switch (state.sortBy) {
			case 'цене':
				state.productsList.sort((Product, NextProduct) => {
					return Product.price - NextProduct.price;
				});
				break;
			case 'популярности':
				state.productsList.sort((Product, NextProduct) => {
					  return NextProduct.rating - Product.rating;
				});
				break;
		}
	},
}

export const getters = {
	PRODUCTS_LIST (state) {
		return state.productsList;
	},
	SORT_BY (state) {
		return state.sortBy;
	},
}