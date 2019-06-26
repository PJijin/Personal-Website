import React from 'react';
import useAbortableFetch from 'use-abortable-fetch';

const Dev = ({ username }) => {
	const { data } = useAbortableFetch(`https://dev.to/api/articles?username=${username}`);

	if (!data) return null;

	return (
		<section className="blog" id="blog">
			<h3>Blog</h3>
			<div className="posts">
				{data.map(post => (
					<div className="post" key={post.id}>
						<h5>
							<a href={post.url} rel="noopener noreferrer" target="_BLANK">
								{post.title}
							</a>
						</h5>
						<p className="text-muted">{post.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export { Dev };
