import React, { useEffect } from "react";
import styled from "styled-components";
import Details from "../components/Details";
import SideBar from "../components/SideBar";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getAllTaskSuccess } from "../redux/taskSlice";
import { getAllTasks } from "../services/Task";

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
`;

const Todo = () => {
	const user = useAppSelector((state) => state.user.username);
	const task = useAppSelector((state) => state.task.taskSelected);
	const dispatch = useAppDispatch();
	useEffect(() => {
		getAllTasks(user).then((data) => {
			dispatch(getAllTaskSuccess(data));
		});
	}, []);

	return (
		<Wrapper>
			<SideBar />
			{task && <Details />}
		</Wrapper>
	);
};

export default Todo;
