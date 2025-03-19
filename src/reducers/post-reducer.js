import { ACTION_TYPE } from "../actions";

const initialPostState = {
	id: "",
	title: "",
	imageUrl: "",
	content: "",
	publishedAt: "",
	comments: [],
};

export const postReducer = (state = initialPostState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_POST_DATA:
			return {
				...state,
				...action.payload,

				// comments: action.payload.comments || state.comments, // Обновляем только comments
				// id: action.payload.id || state.id,
				// title: action.payload.title || state.title,
				// content: action.payload.content || state.content,
				// imageUrl: action.payload.imageUrl || state.imageUrl,
				// publishedAt: action.payload.publishedAt || state.publishedAt,
			};
		default:
			return state;
	}
};
