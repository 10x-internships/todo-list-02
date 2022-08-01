import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Auth";
import Todo from "./pages/Todo";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/login" element={<Login />} />
			<Route
				path="/todo"
				element={
					<ProtectedRoute redirectPath="/">
						<Todo />
					</ProtectedRoute>
				}
			/>
		</Routes>
	);
}

export default App;
