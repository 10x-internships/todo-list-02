import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import Input from "./Input";
import Label from "./Label";

const Wrapper = styled.div`
	width: 100%;
`;

interface Props extends HTMLAttributes<HTMLInputElement> {
	label: string;
	id: string;
}
const TextField: FC<Props> = ({ label, id, ...props }) => {
	return (
		<Wrapper>
			<Label htmlFor={id}>{label}</Label>
			<Input id={id} {...props} />
		</Wrapper>
	);
};

export default TextField;
