import { combineReducers } from 'redux';
import products from './products/productsSlice';
import user from './user/userSlice';

export const reducerSlices = {
	products,
	user,
};

const appReducer = combineReducers(reducerSlices);

export default appReducer;
