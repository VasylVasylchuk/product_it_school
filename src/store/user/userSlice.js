import { createSlice } from '@reduxjs/toolkit';
import { getPosts } from './userRequest';
export const initialState = {
	name: '',
	isTouched: false,
	firstName: '',
	isLauding: false,
	post: []
};


const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getPosts.pending, (state) => {
			state.isLauding = true;
		});
		builder.addCase(getPosts.fulfilled, (state, action) => {
			state.isLauding = false;
			state.post = action.payload;
		});
		builder.addCase(getPosts.rejected, (state, action) => {
			console.log(action)
			state.isLauding = false;
		});
	},
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
