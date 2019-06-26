import React from 'react';
import useAbortableFetch from 'use-abortable-fetch';

const Medium = ({ username }) => {
	const { data } = useAbortableFetch(
		`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
	);

	if (!data) return null;

	return (
		<section className="blog" id="blog">
			<h3>Blog</h3>
			<div className="posts">
				{data.items &&
					data.items.map(post => (
						<div className="post" key={post.pubDate}>
							<h5>
								<a href={post.link} rel="noopener noreferrer" target="_BLANK">
									{post.title}
								</a>
							</h5>
							<p className="date">Published on {post.pubDate}</p>
						</div>
					))}
			</div>
		</section>
	);
};

export { Medium };
