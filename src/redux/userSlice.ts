import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
	username: string;
}

const initialState: UserState = {
	username: "",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		hydrate: (state, action) => {
			return action.payload;
		},
		loginSuccess: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
		logoutSuccess: (state) => {
			state.username = "";
		},
	},
});

// Action creators are generated for each case reducer function
export const { loginSuccess, logoutSuccess, hydrate } = userSlice.actions;

export default userSlice.reducer;
