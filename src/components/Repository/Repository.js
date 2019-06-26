import React from 'react';
import useAbortableFetch from 'use-abortable-fetch';

const Repository = () => {
	const { data } = useAbortableFetch('https://api.github.com/users/Pjijin/repos');

	if (!data) return null;

	return (
		<section className="repository" id="repository">
			<h3> Repository</h3>
			<div className="repos">
				{data.map(repo => {
					if (repo.archived === false && repo.fork === false)
						return (
							<a
								key={repo.id}
								href={repo.html_url}
								rel="noopener noreferrer"
								target="_BLANK"
								className="repo-card"
							>
								<h5>{repo.name}</h5>
								<p className="text-muted flex space-between repo-stats">
									<span>
										<i className="fa fa-code" /> {repo.language}
									</span>

									<span>
										<i className="fa fa-code-branch" /> {repo.forks_count}
									</span>

									<span>
										<i className="fa fa-star" /> {repo.stargazers_count}
									</span>
								</p>

								<p className="desc text-muted">{repo.description}</p>
							</a>
						);

					return null;
				})}
			</div>
		</section>
	);
};

export { Repository };
