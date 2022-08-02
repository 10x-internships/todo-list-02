import React, { useState } from "react";
import styled from "styled-components";
import TextField from "../TextField";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updateTask } from "../../services/Task";
import { selectTaskSuccess, updateTaskInArray } from "../../redux/taskSlice";
import { debounce } from "../../utils/debounce";

const Wrapper = styled.div`
	position: relative;
	margin: auto;
`;
const Title = styled.div`
	width: 750px;
`;
const Content = styled.div`
	margin-top: 0.25rem;
	margin-bottom: 20vh;
	width: 750px;
`;
interface ITask {
	title: string;
	content: string;
}
const initCurrentTask: ITask = {
	title: "",
	content: "",
};
const Details = () => {
	const [currentTask, setCurrentTask] = useState<ITask>(initCurrentTask);
	const task = useAppSelector((state) => state.task.taskSelected);
	const dispatch = useAppDispatch();

	const processChange = debounce(() => {
		const reqBody = { ...task, ...currentTask };
		updateTask(reqBody, task!.id).then((data) => {
			dispatch(selectTaskSuccess(data));
			dispatch(updateTaskInArray(data));
		});
	});
	const onChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setCurrentTask({ ...currentTask, [e.target.id]: e.target.value });
	};
	return (
		<Wrapper>
			<Title>
				<TextField
					id={"title"}
					defaultValue={task?.title}
					placeholder="Untitled"
					lines={1}
					borderless={true}
					variant="lg"
					onChange={onChange}
					onKeyUp={() => processChange()}
				/>
			</Title>
			<Content>
				<TextField
					onChange={onChange}
					defaultValue={task?.content}
					placeholder="Enter content"
					id={"content"}
					lines={15}
					borderless={true}
					onKeyUp={() => processChange()}
				/>
			</Content>
		</Wrapper>
	);
};

export default Details;
