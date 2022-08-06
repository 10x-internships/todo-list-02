import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getAllTasks, deleteTask, createTask } from "../services/Task";

interface ITask {
	id: number;
	creator: string;
	title: string;
	content: string;
}
interface IReqBody {
	creator?: string;
	title: string;
	content: string;
}
interface TaskState {
	tasks: Array<ITask>;
	taskSelected?: ITask;
}

export const fetchAllTasksThunk = createAsyncThunk(
	"task/fetchAllTasks",
	async (creator: string, thunkAPI) => {
		const data = await getAllTasks(creator);
		thunkAPI.dispatch(getAllTaskSuccess(data));
		return data;
	}
);
export const createTaskThunk = createAsyncThunk(
	"task/createTaskThunk",
	async (reqBody: IReqBody, thunkAPI) => {
		const data = await createTask(reqBody);
		thunkAPI.dispatch(addTaskSuccess(data));
		return data;
	}
);
export const deleteTaskThunk = createAsyncThunk(
	"task/deleteTask",
	async (taskId: number, thunkAPI) => {
		await deleteTask(taskId);
		thunkAPI.dispatch(deleteTaskSuccess(taskId));
	}
);
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
			state.tasks.map((task) => {
				if (task.id === action.payload.id) {
					task = action.payload;
				}
				return task;
			});
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
