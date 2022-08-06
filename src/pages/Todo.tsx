import React, { useEffect } from "react";
import styled from "styled-components";
import Details from "../components/Details";
import SideBar from "../components/SideBar";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchAllTasksThunk } from "../redux/taskSlice";

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
`;

const Todo = () => {
	const user = useAppSelector((state) => state.user.username);
	const task = useAppSelector((state) => state.task.taskSelected);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchAllTasksThunk(user));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Wrapper>
			<SideBar />
			{task && <Details />}
		</Wrapper>
	);
};

export default Todo;
