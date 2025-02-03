export const getUser = async (loginToFind) => {
	const response = await fetch(
		`http://localhost:3005/users?login=${loginToFind}`,
	);
	const users = await response.json(); // JSON Server возвращает массив пользователей

	// console.log("Найденные пользователи:", users);

	return users[0]; // Берём первого пользователя (если он есть)
};
