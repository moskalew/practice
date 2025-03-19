export const transformUser = (dbUser) => {
	return {
		id: dbUser.id,
		login: dbUser.login,
		password: dbUser.password,
		registeredAt: dbUser.registered_at, // Это поле должно быть
		roleId: dbUser.role_id,
	};
};
