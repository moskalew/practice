const generateDate = () =>
	new Date(Math.random() * 1000000000000 + 1999999999999)
		.toISOString()
		.substring(0, 16)
		.replace("T", " ");

export const server = {
	async autorize(authLogin, authPassword) {
		const users = fetch("http://localhost:3005/users").then((loadedUsers) =>
			loadedUsers.json(),
		);

		const user = users.find(({ login }) => login === authLogin);

		if (!user) {
			return {
				error: "Такой пользователь не найден",
				res: null,
			};
		}

		if (authPassword !== user.password) {
			return {
				error: "Неверный пароль",
				res: null,
			};
		}

		const session = {
			logout() {
				Object.keys(session).forEach((key) => {
					delete session[key];
				});
			},

			removeComment() {
				console.log("Удаление комментария");
			},
		};

		return {
			error: null,
			res: session,
		};
	},

	async register(regLogin, regPassword) {
		const users = fetch("http://localhost:3005/users").then((loadedUsers) =>
			loadedUsers.json(),
		);

		const user = users.find(({ login }) => login === regLogin);

		if (user) {
			return {
				error: "Такой логин уже занят",
				res: null,
			};
		}

		await fetch("http://localhost:3005/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify({
				login: regLogin,
				password: regPassword,
				registed_at: generateDate(),
				role_id: 2,
			}),
		});

		const session = {
			logout() {
				Object.keys(session).forEach((key) => {
					delete session[key];
				});
			},

			removeComment() {
				console.log("Удаление комментария");
			},
		};

		return {
			error: null,
			res: session,
		};
	},
};
