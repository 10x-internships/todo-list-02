import React, { SVGProps } from "react";
import styled from "styled-components";

interface Props {
	icon?: React.ReactNode;
	content: string;
}

const Wrapper = styled.div`
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
const Icon = styled.div`
	margin-right: 0.75rem;
`;
const Content = styled.div`
	color: rgba(25, 23, 17, 0.6);
`;

const Tag = ({ icon, content }: Props) => {
	return (
		<Wrapper>
			<Icon>{icon}</Icon>
			<Content>{content}</Content>
		</Wrapper>
	);
};

export default Tag;
