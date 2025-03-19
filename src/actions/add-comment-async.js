import { setPostData } from "./set-post-data";

export const addCommentAsync =
	(requestServer, userId, postId, content) => (dispatch) => {
		// console.log("addCommentAsync", userId, postId, content);

		requestServer("addPostComment", userId, postId, content).then(
			(postData) => {
				dispatch(setPostData(postData.res));
			},
		);

		// requestServer("addPostComment", userId, postId, content)
		// 	.then((postData) => {
		// 		console.log("postData после запроса:", postData);

		// 		if (!postData || !postData.res) {
		// 			console.error("Ошибка: postData.res отсутствует", postData);
		// 			return;
		// 		}
		// 		// console.log("postData.res:", postData.res);

		// 		dispatch(setPostData(postData.res));
		// 	})
		// 	.catch((error) =>
		// 		console.error("Ошибка при добавлении комментария:", error),
		// 	);
	};
