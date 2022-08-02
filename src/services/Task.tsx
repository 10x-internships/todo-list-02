interface IReqBody {
	creator?: string;
	title: string;
	content: string;
}
const createTask = async (reqBody: IReqBody) => {
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			...reqBody,
		}),
	};
	const res = await fetch(
		`${process.env.REACT_APP_LOCALHOST_URL}/tasks`,
		requestOptions
	);
	return await res.json();
};
const updateTask = async (reqBody: IReqBody, taskId: number) => {
	const requestOptions = {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			...reqBody,
		}),
	};
	const res = await fetch(
		`${process.env.REACT_APP_LOCALHOST_URL}/tasks/${taskId}`,
		requestOptions
	);
	return await res.json();
};
const deleteTask = async (taskId: string) => {
	const requestOptions = {
		method: "DELETE",
	};
	const res = await fetch(
		`${process.env.REACT_APP_LOCALHOST_URL}/tasks/${taskId}`,
		requestOptions
	);
	return await res.json();
};
const getAllTasks = async (creator: string) => {
	const URL = `${process.env.REACT_APP_LOCALHOST_URL}/tasks?creator=${creator}`;
	const res = await fetch(URL);
	return await res.json();
};

export { createTask, updateTask, deleteTask, getAllTasks };
