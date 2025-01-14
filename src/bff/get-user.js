import { getUsers } from "./get-users";

export const user = async (loginToFind) => {
	const users = await getUsers();
	return users.find(({ login }) => login === loginToFind);
};
