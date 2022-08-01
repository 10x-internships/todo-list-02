import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./GlobalStyle";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { loginSuccess } from "./redux/userSlice";

const getUserFromLocalStorage = () => {
	try {
		const persistedState = localStorage.getItem("user");
		if (persistedState) {
			return JSON.parse(persistedState);
		}
	} catch (e) {
		console.log(e);
	}
};

const user = getUserFromLocalStorage();
if (user) {
	store.dispatch(loginSuccess(user));
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<GlobalStyle />
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
