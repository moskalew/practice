import { PostCard, Pagination, Search } from "./components";
import { useMemo, useEffect, useState } from "react";
import { useServerRequest } from "../../hooks";
import { PAGINATION_LIMIT } from "../../bff/constants";
import { getLastPageFromLinks, debounce } from "./utils";
import styled from "styled-components";

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [searchPhrase, setSearchPhrase] = useState("");
	const [shouldSearch, setShouldSearch] = useState(false);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer("fetchPosts", searchPhrase, page, PAGINATION_LIMIT).then(
			({ res: { posts, links } }) => {
				setPosts(posts);

				setLastPage(getLastPageFromLinks(links));
			},
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [requestServer, page, shouldSearch]);

	const startDelayedSearch = useMemo(
		() => debounce(setShouldSearch, 2000),
		[],
	);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};

	return (
		<div className={className}>
			<div className="posts-and-search">
				<Search searchPhrase={searchPhrase} onChange={onSearch} />
				{posts.length ? (
					<div className="post-list">
						{posts.map(
							({
								id,
								title,
								imageUrl,
								publishedAt,
								commentsCount,
							}) => (
								<PostCard
									key={id}
									id={id}
									title={title}
									imageUrl={imageUrl}
									publishedAt={publishedAt}
									commentsCount={commentsCount}
								/>
							),
						)}
					</div>
				) : (
					<div className="no-posts-found">Статьи не найдены</div>
				)}
			</div>

			{lastPage > 1 && (
				<Pagination page={page} lastPage={lastPage} setPage={setPage} />
			)}
		</div>
	);
};

export const Main = styled(MainContainer)`
	& .post-and-search {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	& .post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px;


	& .no-posts-found {
	 text-align: center;
	}
`;
