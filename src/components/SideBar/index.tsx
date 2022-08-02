import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addTaskSuccess, selectTaskSuccess } from "../../redux/taskSlice";
import { createTask } from "../../services/Task";
import AddIcon from "../Icons/Add";
import ClockIcon from "../Icons/Clock";
import DeleteIcon from "../Icons/Delete";
import ImportIcon from "../Icons/Import";
import LogoutIcon from "../Icons/Logout";
import PageIcon from "../Icons/Page";
import SearchIcon from "../Icons/Search";
import SettingIcon from "../Icons/Setting";
import TemplatesIcon from "../Icons/Templates";
import TrashIcon from "../Icons/Trash";
import UserIcon from "../Icons/User";
import Tag from "../Tag";

const Wrapper = styled.div`
	position: relative;
	width: 15rem;
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
	margin-top: auto;
	width: 100%;
	height: 45px;
`;
const Tasks = styled.div`
	padding-bottom: 1rem;
`;
interface ITask {
	id: number;
	creator: string;
	title: string;
	content: string;
}
const SideBar = () => {
	const user = useAppSelector((state) => state.user.username);
	const tasks = useAppSelector((state) => state.task.tasks);
	const dispatch = useAppDispatch();
	const handleSelectTask = (task: ITask) => {
		dispatch(selectTaskSuccess(task));
	};
	const handleCreateTask = () => {
		const reqBody = {
			creator: user,
			title: "Untitled",
			content: "",
		};
		createTask(reqBody).then((data) => dispatch(addTaskSuccess(data)));
	};
	return (
		<Wrapper>
			<Header>
				<Tag
					icon={<UserIcon />}
					content={`${user}`}
					rightIcon={<LogoutIcon />}
				/>
			</Header>
			<Feature>
				<Tag icon={<SearchIcon />} content="Quick Find" />
				<Tag icon={<ClockIcon />} content="All Updates" />
				<Tag icon={<SettingIcon />} content="Setting &amp; Members" />
			</Feature>
			<Body>
				<Tasks>
					{tasks.map((task) => (
						<Tag
							icon={<PageIcon />}
							content={task.title}
							key={task.id}
							isTask={true}
							rightIcon={<DeleteIcon />}
							onClick={() => handleSelectTask(task)}
						/>
					))}
					<Tag
						icon={<AddIcon />}
						content="Add a page"
						onClick={handleCreateTask}
					/>
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
