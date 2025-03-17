import { generateDate } from "../utils/generate-date";

export const addComment = (userId, postId, content) =>
	fetch("http://localhost:3005/comments", {
		method: "POST",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
		body: JSON.stringify({
			authorId: userId,
			post_id: postId,
			published_at: generateDate(),
			content,
		}),
	});
