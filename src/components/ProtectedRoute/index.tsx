import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

interface Props {
	children: ReactNode;
	redirectPath: string;
}

const ProtectedRoute = ({ children, redirectPath }: Props) => {
	const user = useAppSelector((state) => state.user.username);
	if (!user) {
		return <Navigate to={redirectPath} replace />;
	}
	return <>{children}</>;
};

export default ProtectedRoute;
