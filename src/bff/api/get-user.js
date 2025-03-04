export const getUser = async (loginToFind) =>
	fetch(`http://localhost:3005/users?login=${loginToFind}`)
		.then((loadedUser) => loadedUser.json())
		.then(
			([loadedUser]) =>
				loadedUser && {
					id: loadedUser.id,
					login: loadedUser.login,
					password: loadedUser.password,
					registeredAt: loadedUser.registered_at,
					roleId: loadedUser.role_id,
				},
		);
