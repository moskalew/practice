import styled from "styled-components";
import { H2 } from "../../../../components";
import { Icon } from "../../../../components";

const PostContentContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>
			<div className="special-panel">
				<div className="published-at">
					<Icon
						id="fa-calendar-o"
						margin="0 8px 0 0"
						size="18px"
						onClick={() => {}}
					/>
					{publishedAt}
				</div>
				<div className="buttons">
					<Icon
						id="fa-pencil-square-o"
						margin="1px 10px 0 0"
						size="22px"
						onClick={() => {}}
					/>
					<Icon id="fa-trash-o" size="22px" onClick={() => {}} />
				</div>
			</div>
			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .special-panel {
		display: flex;
		justify-content: space-between;
		margin: -20px 0 20px;
	}
	& .published-at {
		display: flex;
		align-items: center;
		font-size: 18px;
	}
	& i {
		position: relative;
		top: -1px;
	}
	& .buttons {
		display: flex;
	}
	& .post-text {
		font-size: 18px;
	}
`;
