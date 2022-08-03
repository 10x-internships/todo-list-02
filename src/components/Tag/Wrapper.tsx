import styled from "styled-components";

const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	margin: 0px 3px;
	padding: 5px 10px;
	font-size: 14px;
	width: 100%;
	font-weight: 500;
	cursor: pointer;
	&:hover {
		background-color: #ebebea;
	}
	&:active {
		background-color: #ebebeaa9;
	}
`;
export default Wrapper;
