import React from "react";
import styled from "styled-components";
import UserIcon from "../Icons/User";
import { P } from "../Typography/Typography";

const Wrapper = styled.div`
	display: flex;
	gap: 0.5rem;
	@media (max-width: 600px) {
		p {
			display: none;
		}
	}
`;

const User = () => {
	return (
		<Wrapper>
			<P>Vincent Bach</P>
			<UserIcon />
		</Wrapper>
	);
};

export default User;
