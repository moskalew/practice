import { getUsers } from "../api";
import { sessions } from "../sessions";
import { ROLE } from "../constants";

export const fetchUsers = async (userSession) => {
	const accessRoles = [ROLE.ADMIN];

	// debugger;
	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: "Доступ запрещён",
			res: null,
		};
	}

	const users = await getUsers();
	// debugger;
	// getUsers().then((users) => console.log(users));

	// console.log(user);
	return {
		error: null,
		res: users,
	};
};
