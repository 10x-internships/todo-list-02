import React from "react";
import styled from "styled-components";
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
	height: auto;
`;
const Footer = styled.div`
	display: flex;
	width: 100%;
	height: 45px;
`;

const SideBar = () => {
	return (
		<Wrapper>
			<Header>
				<Tag icon={<UserIcon />} content="Duong Thien Phuc" />
			</Header>
			<Feature>
				<Tag icon={<SearchIcon />} content="Quick Find" />
				<Tag icon={<ClockIcon />} content="All Updates" />
				<Tag icon={<SettingIcon />} content="Setting & Members" />
			</Feature>
			<Body>
				<Tag icon={<PageIcon />} content="Untitled" />
				<Tag icon={<AddIcon />} content="Add a page" />
				<Tag icon={<TemplatesIcon />} content="Templates" />
				<Tag icon={<ImportIcon />} content="Import" />
				<Tag icon={<TrashIcon />} content="Trash" />
				{/* <Tag icon={<PageIcon />} content="Untitled" />
				<Tag icon={<AddIcon />} content="Add a page" />
				<Tag icon={<TemplatesIcon />} content="Templates" />
				<Tag icon={<ImportIcon />} content="Import" />
				<Tag icon={<TrashIcon />} content="Trash" />
				<Tag icon={<PageIcon />} content="Untitled" />
				<Tag icon={<AddIcon />} content="Add a page" />
				<Tag icon={<TemplatesIcon />} content="Templates" />
				<Tag icon={<ImportIcon />} content="Import" />
				<Tag icon={<TrashIcon />} content="Trash" />
				<Tag icon={<PageIcon />} content="Untitled" />
				<Tag icon={<AddIcon />} content="Add a page" />
				<Tag icon={<TemplatesIcon />} content="Templates" />
				<Tag icon={<ImportIcon />} content="Import" />
				<Tag icon={<TrashIcon />} content="Trash" />
				<Tag icon={<PageIcon />} content="Untitled" />
				<Tag icon={<AddIcon />} content="Add a page" />
				<Tag icon={<TemplatesIcon />} content="Templates" />
				<Tag icon={<ImportIcon />} content="Import" />
				<Tag icon={<TrashIcon />} content="Trash" /> */}
			</Body>
			<Footer>
				<Tag icon={<AddIcon />} content="New page" />
			</Footer>
		</Wrapper>
	);
};

export default SideBar;
