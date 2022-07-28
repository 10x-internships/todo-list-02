import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Nav";

type Props = {
	children?: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default MainLayout;
