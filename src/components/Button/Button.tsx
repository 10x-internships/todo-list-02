import styled from "styled-components";

const Button = styled.button`
	display: inline-block;
	padding: 0.625rem 1rem;
	border-radius: 4px;
	background-color: #0b6e99;
	border: none;
	outline: none;
	color: white;
	cursor: pointer;

	&:hover {
		background-color: #0d89bf;
	}

	&:active {
		background-color: #085272;
	}

	&:disabled {
		background-color: #e8e7e3;
		color: #a19f9a;
		cursor: not-allowed;
	}
`;

export default Button;
