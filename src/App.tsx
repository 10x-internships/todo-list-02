import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/route" element={<div>Route</div>} />
		</Routes>
	);
}

export default App;
