import { useState } from "react";
import { Icon } from "../../../../components";
import { Comment } from "./components";
import styled from "styled-components";

const CommentsContainer = ({ className, comments = [] }) => {
	const [newComment, setNewComment] = useState("");

	return (
		<div className={className}>
			<div className="new-comment">
				<textarea
					value={newComment}
					placeholder="комментарий..."
					onChange={({ target }) => setNewComment(target.value)}
				></textarea>
				<Icon
					id="fa-paper-plane-o"
					margin="0 0 0 10px"
					size="18px"
					onClick={() => {}}
				/>
			</div>
			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	width: 580px;
	display: flex;
	margin: 0 auto;

	& .new-comment {
		display: flex;
		width: 100%;
		resize: none;
		margin: 20px 0 0;
	}

	& .new-comment textarea {
		width: 100%;
		resize: none;
		height: 120px;
		font-size: 18px;
	}
`;
