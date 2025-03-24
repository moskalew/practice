import { H2, Icon } from "../../../../components";
import { SpecialPanel } from "../special-panel/special-panel";
import styled from "styled-components";

const PostContentContainer = ({
	className,
	post: { title, imageUrl, content, publishedAt },
}) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>
			<SpecialPanel
				publishedAt={publishedAt}
				margin="-20px 0 20px"
				editButton={
					<Icon
						id="fa-pencil-square-o"
						margin="1px 10px 0 0"
						size="22px"
						onClick={() => {}}
					/>
				}
			/>

			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .post-text {
		font-size: 18px;
		white-space: pre-line;
	}
`;
