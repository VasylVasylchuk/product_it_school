import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	products: [],
	ordererName: ''
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload;
		},
		setOrdererName: (state, action) => {
			state.ordererName = action.payload;
		},
	},
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
