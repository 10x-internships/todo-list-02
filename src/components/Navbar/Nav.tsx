import React from "react";
import styled from "styled-components";
import Favicon from "../Logo/Favicon";
// import favicon from "../../assets/favicon.svg";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.125rem 1rem;
`;
const List = styled.ul`
	display: flex;
	list-style-type: none;
`;
const Item = styled.li`
	margin-right: 1rem;
`;
const A = styled.a`
	color: black;
	text-decoration: none;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 150%;
`;
const navItems = ["Home", "About", "Pricing"];
const Navbar = () => {
	return (
		<Wrapper>
			<Favicon />
			<List>
				{navItems.map((item, index) => (
					<Item key={index}>
						<A>{item}</A>
					</Item>
				))}
			</List>
			<A href="#">Login</A>
		</Wrapper>
	);
};

export default Navbar;
