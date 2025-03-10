import {
	authorize,
	fetchUsers,
	fetchRoles,
	logout,
	register,
} from "./operations";

export const server = {
	authorize,
	logout,
	register,
	fetchUsers,
	fetchRoles,
};
