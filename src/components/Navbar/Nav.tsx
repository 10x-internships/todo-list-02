import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Favicon from "../Icons/Favicon";
import MenuIcon from "../Icons/Menu";
import A from "../Link";
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
const MenuNav = styled.div`
	display: none;
	@media (max-width: 600px) {
		display: block;
	}
`;
const navItems = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "About",
		href: "/about",
	},
	{
		name: "Pricing",
		href: "/price",
	},
];
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
						<A to={item.href}>{item.name}</A>
					</Item>
				))}
			</List>
			{true ? <A to="/login">Login</A> : <User />}
		</Wrapper>
	);
};

export default Navbar;
