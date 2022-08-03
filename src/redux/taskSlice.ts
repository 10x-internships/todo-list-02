import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ITask {
	id: number;
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
		deleteTaskSuccess: (state, action: PayloadAction<number>) => {
			state.tasks = state.tasks.filter((task) => task.id !== action.payload);
		},
		updateTaskInArray: (state, action: PayloadAction<ITask>) => {
			const currentTaskIndex = state.tasks.findIndex(
				(task) => task.id === action.payload.id
			);
			if (currentTaskIndex) {
				state.tasks[currentTaskIndex] = action.payload;
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	getAllTaskSuccess,
	addTaskSuccess,
	selectTaskSuccess,
	deleteTaskSuccess,
	updateTaskInArray,
} = taskSlice.actions;

export default taskSlice.reducer;
