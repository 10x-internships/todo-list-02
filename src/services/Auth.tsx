interface IReqBody {
	username: string;
	password: string;
}

const RegisterService = async (reqBody: IReqBody) => {
	const reqOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			id: reqBody.username,
			password: reqBody.password,
		}),
	};
	const res = await fetch(
		`${process.env.REACT_APP_LOCALHOST_URL}/tasks`,
		reqOptions
	);
	return res.json();
};
const LoginService = async (reqBody: IReqBody) => {
	const url = `/users?id=${reqBody.username}&password=${reqBody.password}`;
	const res = await fetch(url);
	return res.json();
};
