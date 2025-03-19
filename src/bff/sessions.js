import { getSession, addSession, deleteSession } from "./api";

export const sessions = {
	create(user) {
		const hash = Math.random().toFixed(50);
		// console.log(" create user", user);

		addSession(hash, user);
		return hash;
	},

	async remove(hash) {
		const session = await getSession(hash);

		if (!session) {
			return;
		}

		deleteSession(session.id);
	},

	async access(hash, accessRoles) {
		const dbSession = await getSession(hash);
		// console.log("access", hash, accessRoles, dbSession);

		// console.log("Access check:", {
		// 	hash,
		// 	accessRoles,
		// 	sessionRoleId: dbSession?.user?.roleId,
		// });

		return !!dbSession.user && accessRoles.includes(dbSession.user.roleId);
	},
};
