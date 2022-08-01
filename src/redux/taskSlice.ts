import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ITask {
	id?: number;
	creator: string;
	title: string;
	content: string;
}
export interface TaskState {
	tasks: Array<ITask>;
	taskSelected?: ITask;
}

const initialState: TaskState = {
	tasks: [],
	taskSelected: undefined,
};

export const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {
		selectTaskSuccess: (state, action: PayloadAction<ITask>) => {
			state.taskSelected = action.payload;
		},
		getAllTaskSuccess: (state, action: PayloadAction<Array<ITask>>) => {
			state.tasks = [...action.payload];
		},
		addTaskSuccess: (state, action: PayloadAction<ITask>) => {
			state.tasks.push(action.payload);
		},
	},
});

// Action creators are generated for each case reducer function
export const { getAllTaskSuccess, addTaskSuccess, selectTaskSuccess } = taskSlice.actions;

export default taskSlice.reducer;
