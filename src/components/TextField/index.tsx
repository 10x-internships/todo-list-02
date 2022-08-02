import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import { Input, LargeInput } from "./Input";
import Label from "./Label";
import TextArea from "./TextArea";

const Wrapper = styled.div`
	width: 100%;
`;

interface Props extends HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
	label?: string;
	id: string;
	lines: number;
	borderless?: boolean;
	variant?: string;
}
const TextField = ({
	label,
	lines,
	variant,
	id,
	borderless,
	...props
}: Props) => {
	return (
		<Wrapper>
			{label && <Label htmlFor={id}>{label}</Label>}
			{lines > 1 ? (
				<TextArea id={id} rows={lines} borderless={borderless} {...props} />
			) : variant !== "lg" ? (
				<Input id={id} borderless={borderless} {...props} />
			) : (
				<LargeInput id={id} borderless={borderless} {...props} />
			)}
		</Wrapper>
	);
};

export default TextField;
