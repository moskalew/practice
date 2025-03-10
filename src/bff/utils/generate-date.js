// export const generateDate = () =>
// 	new Date(Math.random() * 1000000000000 + 1999999999999)
// 		.toISOString()
// 		.substring(0, 16)
// 		.replace("T", " ");

export const generateDate = () => {
	const now = Date.now() - Math.random() * 5 * 365 * 24 * 60 * 60 * 1000;
	const date = new Date(now);
	return date.toLocaleString("ru-RU", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
	});
};
