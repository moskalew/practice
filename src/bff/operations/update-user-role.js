import { setUserRole } from "../api";
import { sessions } from "../sessions";
import { ROLE } from "../constants";

export const updateUserRole = async (userSession, userId, newUserRoleId) => {
	const accessRoles = [ROLE.ADMIN];

	// debugger;
	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: "Доступ запрещён",
			res: null,
		};
	}
	setUserRole(userId, newUserRoleId);

	return {
		error: null,
		res: true,
	};
};
