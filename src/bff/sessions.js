// export const sessions = {
// 	list: {},
// 	create(user) {
// 		const hash = Math.random().toFixed(50);

// 		this.list[hash] = user;

// 		return hash;
// 	},

// 	remove(hash) {
// 		delete this.list[hash];
// 	},

// 	access(hash, accessRoles) {
// 		const user = this.list[hash];
// 		// debugger;
// 		return !!user && accessRoles.includes(Number(user.roleId));
// 	},
// };

export const sessions = {
	list: {},
	create(user) {
		const hash = Math.random().toFixed(50);
		this.list[hash] = user;
		return hash;
	},

	remove(hash) {
		delete this.list[hash];
	},

	access(hash, accessRoles) {
		const user = this.list[hash];
		// Проверка, что user существует и что roleId можно корректно привести к числу
		return user && accessRoles.includes(Number(user.roleId));
	},
};
