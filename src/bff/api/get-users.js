import { transformUser } from "../transformers";
export const getUsers = () =>
	fetch("http://localhost:3005/users")
		.then((loadedUsers) => loadedUsers.json())
		.then((loadedUsers) => {
			return loadedUsers && loadedUsers.map(transformUser);
		});
