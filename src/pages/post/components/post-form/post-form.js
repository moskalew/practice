import { useRef } from "react";
import { Icon, Input } from "../../../../components";
import { SpecialPanel } from "../special-panel/special-panel";
import { sanizeContent } from "./utils";
import styled from "styled-components";

const PostFormContainer = ({
	className,
	post: { title, imageUrl, content, publishedAt },
}) => {
	const imageRef = useRef(null);
	const titleRef = useRef(null);
	const contentRef = useRef(null);

	const onSave = () => {
		const newImageUrl = imageRef.current.value;
		const newTitleUrl = titleRef.current.value;
		const newContentUrl = sanizeContent(contentRef.current.innerHTML);

		console.log("newImageUrl", newImageUrl);
		console.log("newTitleUrl", newTitleUrl);
		console.log("newContentUrl", newContentUrl);
	};

	return (
		<div className={className}>
			<Input
				ref={imageRef}
				defaultValue={imageUrl}
				placeholder="изображение..."
			/>
			<Input
				ref={titleRef}
				defaultValue={title}
				placeholder="заголовок..."
			/>
			<SpecialPanel
				publishedAt={publishedAt}
				margin="20px 0"
				editButton={
					<Icon
						id="fa-floppy-o"
						margin="1px 10px 0 0"
						size="22px"
						onClick={onSave}
					/>
				}
			/>
			<div
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
				className="post-text"
			>
				{content}
			</div>
		</div>
	);
};

export const PostForm = styled(PostFormContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .post-text {
		font-size: 18px;
		white-space: pre-line;
	}
`;
