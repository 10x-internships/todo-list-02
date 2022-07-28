import React from "react";
import styled from "styled-components";
import Favicon from "../Icons/Favicon";
import MenuIcon from "../Icons/Menu";
import User from "./User";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.125rem 1rem;
`;
const List = styled.ul`
	display: flex;
	list-style-type: none;
	@media (max-width: 600px) {
		display: none;
	}
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
const MenuNav = styled.div`
	display: none;
	@media (max-width: 600px) {
		display: block;
	}
`;
const navItems = ["Home", "About", "Pricing"];
const Navbar = () => {
	return (
		<Wrapper>
			<MenuNav>
				<MenuIcon />
			</MenuNav>
			<Favicon />
			<List>
				{navItems.map((item, index) => (
					<Item key={index}>
						<A>{item}</A>
					</Item>
				))}
			</List>
			{true ? <A href="#">Login</A> : <User />}
		</Wrapper>
	);
};

export default Navbar;
