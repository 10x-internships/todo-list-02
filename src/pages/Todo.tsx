import React from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import { useAppSelector } from "../redux/hooks";
import { getDataFromLocalStorage } from "../services/LocalStorage";

const Wrapper = styled.div`
	height: 100vh;
`;

const Todo = () => {
	const user = useAppSelector((state) => state.user.username);
	console.log("State user: ", user);

	// let user = localStorage.getItem("user");
	// if (user) {
	// 	console.log("user: ", user);
	// }

	return (
		<Wrapper>
			<SideBar />
		</Wrapper>
	);
};

export default Todo;
