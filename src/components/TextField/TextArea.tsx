import styled from "styled-components";

interface Props {
	borderless?: boolean;
}
const TextArea = styled.textarea<Props>`
	resize: none;
	background: #ffffff;
	padding: 10px;
	border: ${(props) => (props.borderless ? "none" : "1px solid #a19f9a")};
	border-radius: 4px;
	width: 100%;
	font-family: "Inter", sans-serif;
`;

export default TextArea;
