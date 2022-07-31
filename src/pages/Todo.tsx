import React from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar";

const Wrapper = styled.div`
	height: 100vh;
`;

const Todo = () => {
	return (
		<Wrapper>
			<SideBar />
		</Wrapper>
	);
};

export default Todo;
