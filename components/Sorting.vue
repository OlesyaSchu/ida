<template>
	<div class="header sorting">
		<h3 class="title title_weight_normal title_size_m">Сортировать по:</h3>
		<div 
		class="header select__button"
		v-on:click="selectIsOpen = !selectIsOpen">
			<p class="title title_weight_normal title_size_m">
				{{ sortBy }}
			</p>
			<img
			class="arrow" 
			v-bind:class="{ arrow_transition: !selectIsOpen }"
			src="~/assets/img/arrow.png" alt="arrow">
		</div>
		<ol
		class="select"
		v-if="selectIsOpen"
		v-on:mouseleave="clearSelect"
		v-on:mouseenter="disableClearSelect">
			<Select 
			v-for="select in sortingArray"
			v-bind:key="select.id"
			v-bind:Select="select"
			v-on:ChangeSelect="ChangeSelect"
			/>
		</ol>
	</div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

export default {
	data () {
		return {
			sortingArray: [
				{ name: 'цене', id: 0},
				{ name: 'популярности', id: 1},
			],
			selectIsOpen: false,
			timerClearSelect: Object,
		}
	},
	methods: {
		...mapMutations({
			setSortBy: 'productsList/SET_SORT_BY',
			sortProductsList: 'productsList/SORT_PRODUCTS_LIST',
		}),
		clearSelect: function () {
			this.timerClearSelect = setTimeout(() => {
				if (this.selectIsOpen) {
					this.selectIsOpen = false;
				}
			}, 300);
		},
		disableClearSelect: function () {
			clearTimeout(this.timerClearSelect);
		},
		ChangeSelect: function (name) {
			this.setSortBy(name);
			this.sortProductsList();
			this.selectIsOpen = false;
		},
	},
	computed: {
		...mapGetters({
			sortBy: 'productsList/SORT_BY'
		}),
	}
}
</script>

<style lang="scss">
	.sorting {
		height: 96px;
		padding-top: 4px;
		position: relative;
	}

	.select {
		position: absolute;
		right: 0;
		bottom: -40px;
		background-color: white;
		box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
		border-radius: 8px;
		padding: 8px 0;
		z-index: 100;

		&__button {
			gap: 4px;
			margin-left: 6px;
			color: #59606D;
			cursor: pointer;
		}
	}
	
	.arrow {
		transform: rotate(0deg);
		transform-origin: 50% 50%;
		transition: all .3s ease-in-out 0s;

		&_transition {
			transform: rotate(180deg);
		}
	}
</style>
