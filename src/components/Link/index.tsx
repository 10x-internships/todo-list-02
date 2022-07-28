import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
	color?: string;
}
const A = styled(Link)<Props>`
	color: ${(props) => (props.color ? props.color : "black")};
	text-decoration: none;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 150%;
`;

export default A;
