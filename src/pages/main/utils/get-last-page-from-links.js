// export const getLastPageFromLinks = (links) => {
// 	const result = links.match(/_page=(\d{1,4})&_limit=\d{1,3}>; rel="last"/);
// 	return Number(result[1]);
// };

export const getLastPageFromLinks = (links) => {
	if (!links || typeof links !== "string") return 1;

	const result = links.match(/_page=(\d{1,4})&_limit=\d{1,3}>; rel="last"/);

	return result ? Number(result[1]) : 1;
};
