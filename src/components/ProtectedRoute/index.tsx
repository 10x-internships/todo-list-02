import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
	children: ReactNode;
	redirectPath: string;
}

const ProtectedRoute = ({ children, redirectPath }: Props) => {
	const user = localStorage.getItem("user");
	if (!user) {
		return <Navigate to={redirectPath} replace />;
	}
	return <>{children}</>;
};

export default ProtectedRoute;
