import { Icon } from "../../../../../../components";
import styled from "styled-components";

const CommentContainer = ({ className, id, author, publishedAt, content }) => {
	return (
		<div className={className}>
			<div className="information-panel">
				<div className="author">
					{author}
					<Icon
						id="fa-user-circle-o"
						margin="0 8px 0 0"
						size="18px"
						onClick={() => {}}
					/>
				</div>
				<div className="published-at">
					{publishedAt}
					<Icon
						id="fa-calendar-o"
						margin="0 8px 0 0"
						size="18px"
						onClick={() => {}}
					/>
				</div>
			</div>
			<div className="comment-text">{content}</div>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	& .information-panel {
		display: flex;
		justify-content: space-between;
	}

	& .author {
		display: flex;
		justify-content: space-between;
	}

	& .published-at {
		display: flex;
		justify-content: space-between;
	}
`;
