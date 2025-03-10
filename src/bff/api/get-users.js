import { transformUser } from "../transformers";
export const getUsers = () =>
	fetch("http://localhost:3005/users")
		.then((response) => response.json())
		.then((loadedUsers) => {
			console.log("Ответ от сервера:", loadedUsers);
			return Array.isArray(loadedUsers)
				? loadedUsers.map(transformUser)
				: [];
		})
		.catch((error) => {
			console.error("Ошибка загрузки пользователей:", error);
			return [];
		});
