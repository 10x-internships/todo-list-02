import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import DeleteIcon from "../Icons/Delete";

interface Props extends HTMLAttributes<HTMLDivElement> {
	icon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	isTask?: boolean;
	content: string;
}

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
const Icon = styled.div`
	margin-right: 0.75rem;
`;
const Content = styled.div`
	color: rgba(25, 23, 17, 0.6);
`;
const RightIcon = styled.div`
	/* display: none; */
	padding: 0.25rem;
	border-radius: 50%;
	position: absolute;
	right: 0;
	margin-right: 0.5rem;
	cursor: pointer;
	:hover {
		background-color: #d1d1d1ef;
	}
`;

const Tag = ({ icon, content, isTask, rightIcon, ...props }: Props) => {
	return (
		<Wrapper {...props}>
			<Icon>{icon}</Icon>
			<Content>{content}</Content>
			{rightIcon && <RightIcon>{rightIcon}</RightIcon>}
		</Wrapper>
	);
};

export default Tag;
