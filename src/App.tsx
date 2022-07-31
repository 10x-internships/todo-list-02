import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Auth";
import Todo from "./pages/Todo";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/login" element={<Login />} />
			<Route path="/todo" element={<Todo />} />
		</Routes>
	);
}

export default App;
