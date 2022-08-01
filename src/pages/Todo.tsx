import React, { useEffect } from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getAllTaskSuccess } from "../redux/taskSlice";
import { getAllTasks } from "../services/Task";

const Wrapper = styled.div`
	height: 100vh;
`;

const Todo = () => {
	const user = useAppSelector((state) => state.user.username);
	const dispatch = useAppDispatch();
	useEffect(() => {
		getAllTasks(user).then((data) => {
			dispatch(getAllTaskSuccess(data));
		});
	}, []);

	return (
		<Wrapper>
			<SideBar />
		</Wrapper>
	);
};

export default Todo;
