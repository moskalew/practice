import { addComment, getComments, getPost } from "../api";
import { sessions } from "../sessions";
import { ROLE } from "../constants";

export const addPostComment = async (userSession, userId, postId, content) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

	// debugger;
	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: "Доступ запрещён",
			res: null,
		};
	}
	console.log(userId, postId, content);

	await addComment(userId, postId, content);

	const post = await getPost(postId);

	const comments = await getComments(postId);
	return {
		error: null,
		res: {
			...post,
			comments,
		},
	};
};
