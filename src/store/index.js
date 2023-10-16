import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import products from './products/productsSlice';

const store = configureStore({
	reducer: combineReducers({
		products
	})
});

export default store;
