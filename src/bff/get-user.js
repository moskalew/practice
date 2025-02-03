export const getUser = async (loginToFind) => {
	const response = await fetch(
		`http://localhost:3005/users?login=${loginToFind}`,
	);
	const users = await response.json(); // JSON Server возвращает массив пользователей

	console.log("Найденные пользователи:", users);

	return users[0]; // Берём первого пользователя (если он есть)
};

const user = await getUser("testUser");
console.log(user);

// старый код
// export const getUser = async (loginToFind) => {
// 	fetch(`http://localhost:3005/users?login=${loginToFind}`)
// 		.then((loadedUser) => loadedUser.json())
// 		.then(([loadedUser]) => loadedUser);
// };

// export const getUser = async (loginToFind) => {
// 	const response = await fetch(`http://localhost:3005/users`);
// 	const users = await response.json(); // Загружаем всех

// 	// Ищем пользователя без учёта регистра
// 	const user = users.find(
// 		(u) => u.login.toLowerCase() === loginToFind.toLowerCase(),
// 	);

// 	console.log("Найден пользователь:", user);

// 	return user; // Вернёт объект или undefined
// };
