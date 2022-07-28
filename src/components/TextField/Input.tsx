import styled from "styled-components";

const Input = styled.input`
	background: #ffffff;
	padding: 10px;
	border: 1px solid #a19f9a;
	border-radius: 4px;
	width: 100%;
	::placeholder {
		font-weight: 400;
		font-size: 1rem;
		line-height: 150%;
		color: #a19f9a;
	}
`;

export default Input;
