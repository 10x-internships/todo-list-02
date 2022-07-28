import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button/Button";
import MainLayout from "../components/Layout/MainLayout";
import TextField from "../components/TextField";
import { H1, P } from "../components/Typography";

const Body = styled.div`
	padding: 7rem 0;
	margin: auto;
	max-width: 21rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
`;
const auth = {
	login: {
		title: "Log In",
		button: "LOG IN",
	},
	register: {
		title: "Register",
		button: "REGISTER",
	},
};
const initAuthBody = {
	username: "",
	password: "",
};
const Auth = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [authBody, setAuthBody] = useState(initAuthBody);
	const handleSwitchAuth = () => {
		setIsLogin((prev) => (prev = !prev));
	};
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAuthBody({
			...authBody,
			[e.target.id]: e.target.value,
		});
	};
	const LoginHandler = () => {};
	return (
		<MainLayout>
			<Body>
				<H1>{isLogin ? auth.login.title : auth.register.title}</H1>
				<TextField
					label={"Username"}
					id={"username"}
					onChange={onChange}
					placeholder={"Enter username"}
				/>
				<TextField
					label={"Password"}
					id={"password"}
					placeholder={"Enter password"}
				/>
				<Button width="100%">
					{isLogin ? auth.login.button : auth.register.button}
				</Button>
				<P onClick={handleSwitchAuth}>
					{isLogin ? auth.register.button : auth.login.button}
				</P>
			</Body>
		</MainLayout>
	);
};

export default Auth;
