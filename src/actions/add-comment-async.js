import { setPostData } from "./set-post-data";

export const addCommentAsync =
	(requestServer, userId, postId, content) => (dispatch) => {
		console.log("addCommentAsync", userId, postId, content);

		requestServer("addPostComment", userId, postId, content).then(
			(postData) => {
				dispatch(setPostData(postData.res));
			},
		);
	};
