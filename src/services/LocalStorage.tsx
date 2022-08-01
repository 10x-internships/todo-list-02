interface Props {
	path: string;
}
const getDataFromLocalStorage = ({ path }: Props) => {
	const result = localStorage.getItem(path);
	return JSON.parse(result || "");
};

export { getDataFromLocalStorage };
