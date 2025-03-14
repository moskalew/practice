import { ACTION_TYPE } from "../actions";

const initialPostState = {
	id: "",
	title: "",
	imageUrl: "",
	content: "",
	publishedAt: "",
	comments: [],
};

export const postsReducer = (state = initialPostState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_POST_DATA:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
