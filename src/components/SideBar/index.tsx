import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../redux/hooks";
import AddIcon from "../Icons/Add";
import ClockIcon from "../Icons/Clock";
import ImportIcon from "../Icons/Import";
import PageIcon from "../Icons/Page";
import SearchIcon from "../Icons/Search";
import SettingIcon from "../Icons/Setting";
import TemplatesIcon from "../Icons/Templates";
import TrashIcon from "../Icons/Trash";
import UserIcon from "../Icons/User";
import Tag from "../Tag";

const Wrapper = styled.div`
	position: relative;
	max-width: 15rem;
	height: 100%;
	background-color: rgb(251, 251, 250);
`;
const Header = styled.div`
	display: flex;
	width: 100%;
	height: 45px;
`;
const Feature = styled.div``;
const Body = styled.div`
	padding: 1rem 0rem;
	height: auto;
`;
const Footer = styled.div`
	display: flex;
	width: 100%;
	height: 45px;
`;
const Tasks = styled.div`
	padding-bottom: 1rem;
`;

const SideBar = () => {
	const user = useAppSelector((state) => state.user.username);
	return (
		<Wrapper>
			<Header>
				<Tag icon={<UserIcon />} content={`${user}`} />
			</Header>
			<Feature>
				<Tag icon={<SearchIcon />} content="Quick Find" />
				<Tag icon={<ClockIcon />} content="All Updates" />
				<Tag icon={<SettingIcon />} content="Setting &amp; Members" />
			</Feature>
			<Body>
				<Tasks>
					<Tag icon={<PageIcon />} content="Untitled" />
					<Tag icon={<AddIcon />} content="Add a page" />
				</Tasks>
				<Tag icon={<TemplatesIcon />} content="Templates" />
				<Tag icon={<ImportIcon />} content="Import" />
				<Tag icon={<TrashIcon />} content="Trash" />
			</Body>
			<Footer>
				<Tag icon={<AddIcon />} content="New page" />
			</Footer>
		</Wrapper>
	);
};

export default SideBar;
