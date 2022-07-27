import React from "react";
import styled from "styled-components";
import Button from "../components/Button/Button";
import Navbar from "../components/Navbar/Nav";
import { H1, P } from "../components/Typography/Typography";
import image1 from "../assets/image1.jpg";
import Footer from "../components/Footer/Footer";

const Body = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 4rem 0;
`;
const Heading = styled.div`
	max-width: 21rem;
	margin-bottom: 1rem;
`;
const Description = styled.div`
	max-width: 21rem;
	color: #54524d;
`;
const Image = styled.img`
	margin: 3rem 0rem;
	@media (max-width: 600px) {
		max-width: 21rem;
	}
`;
const Landing = () => {
	return (
		<>
			<Navbar />
			<Body>
				<Heading>
					<H1>One Workspace. Everyteam</H1>
				</Heading>
				<Description>
					<P>
						We’re more than a doc. Or a table. Customize Notion to work the way
						you do.
					</P>
				</Description>
				<Image src={image1} />
				<Button>Get Notion Free</Button>
			</Body>
			<Footer />
		</>
	);
};

export default Landing;
