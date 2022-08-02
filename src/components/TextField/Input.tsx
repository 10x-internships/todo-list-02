import styled from "styled-components";

type Props = {
	borderless?: boolean;
};
const Input = styled.input<Props>`
	background: #ffffff;
	padding: 10px;
	border: ${(props) => (props.borderless ? "none" : "1px solid #a19f9a")};
	border-radius: 4px;
	width: 100%;

	::placeholder {
		font-weight: 400;
		font-size: 1rem;
		line-height: 150%;
		color: #a19f9a;
	}
`;
const LargeInput = styled(Input)`
	font-size: 2rem;
	font-weight: 700;
	::placeholder {
		font-size: 2rem;
		font-weight: 700;
		line-height: 150%;
		color: #a19f9a;
	}
`;

export { Input, LargeInput };
