import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	name: '',
	isTouched: false,
	firstName: ''
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setName (state, action) {
			state.name = action.payload;
		},
		changeTouchStatus (state) {
			state.isTouched = !state.isTouched;
		},
		setFirstName (state, action) {
			state.firstName = action.payload;
		}
	},
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
