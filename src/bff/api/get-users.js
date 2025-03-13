import { transformUser } from "../transformers";
export const getUsers = () =>
	fetch("http://localhost:3005/users")
		.then((loadedUsers) => loadedUsers.json())
		.then((loadedUsers) => {
			// console.log("Полученные пользователи:", loadedUsers); //  для проверки
			return loadedUsers && loadedUsers.map(transformUser);
		});
