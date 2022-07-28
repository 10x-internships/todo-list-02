import React from "react";
import styled from "styled-components";
import { P } from "../Typography";

const Wrapper = styled.div`
	text-align: center;
	color: #73716c;
	padding: 2.25rem 0rem;
`;
const Footer = () => {
	return (
		<Wrapper>
			<P>©2022 Notion Labs, Inc.</P>
		</Wrapper>
	);
};

export default Footer;
