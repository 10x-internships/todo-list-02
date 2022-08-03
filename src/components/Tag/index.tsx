import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import DeleteIcon from "../Icons/Delete";
import Content from "./Content";
import Icon from "./Icon";
import RightIcon from "./RightIcon";
import Wrapper from "./Wrapper";

interface Props extends HTMLAttributes<HTMLDivElement> {
	icon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	rightFunc?: () => void;
	isTask?: boolean;
	content: string;
}

const Tag = ({
	icon,
	content,
	isTask,
	rightIcon,
	rightFunc,
	...props
}: Props) => {
	return (
		<Wrapper {...props}>
			<Icon>{icon}</Icon>
			<Content>{content}</Content>
			{rightIcon && <RightIcon onClick={rightFunc}>{rightIcon}</RightIcon>}
		</Wrapper>
	);
};

export default Tag;
