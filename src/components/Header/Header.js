import React from 'react';
import useAbortableFetch from 'use-abortable-fetch';
const Header = ({ darkMode, github, twitter, stackoverflow, medium, instagram, dev, youtube, linkedin }) => {
	const { data } = useAbortableFetch(`https://api.github.com/users/${github}`);
	if (!data) return null;
	return (
		<header>
			<div className="theme-switch">
				<span onClick={darkMode.toggle}>
					{darkMode.value ? (
						<i className="animated hover-rotatefull em-svg em-sunny" />
					) : (
						<i className="animated hover-rotatefull em-svg em-full_moon" />
					)}
				</span>
			</div>
			<div className="profile">
				<div className="flex">
					<div className="avatar-center">
						<img src={data.avatar_url} alt={data.name} className="avatar" />
					</div>
					<div className="profile-desc">
						<h3>{data.name}</h3>
						<p className="text-muted">
							<i className="fa fa-map-marker-alt" /> {data.location}
						</p>
						<p className="text-muted"> {data.bio} </p>
						<p className="social-profile">
							{twitter && (
								<a href={`https://twitter.com/${twitter}`} rel="noopener noreferrer" target="_BLANK">
									<i className="fab fa-twitter" />
								</a>
							)}

							<a href={`https://github.com/${github}`} rel="noopener noreferrer" target="_BLANK">
								<i className="fab fa-github" />
							</a>

							{stackoverflow && (
								<a
									href={`https://stackoverflow.com/users/${stackoverflow}`}
									rel="noopener noreferrer"
									target="_BLANK"
								>
									<i className="fab fa-stack-overflow" />
								</a>
							)}

							{medium && (
								<a href={`https://medium.com/@${medium}`} rel="noopener noreferrer" target="_BLANK">
									<i className="fab fa-medium" />
								</a>
							)}

							{instagram && (
								<a
									href={`https://instagram.com/${instagram}`}
									rel="noopener noreferrer"
									target="_BLANK"
								>
									<i className="fab fa-instagram" />
								</a>
							)}

							{dev && (
								<a href={`https://dev.to/${dev}`} rel="noopener noreferrer" target="_BLANK">
									<i className="fab fa-dev" />
								</a>
							)}

							{youtube && (
								<a
									href={`https://youtube.com/channel/${youtube}`}
									rel="noopener noreferrer"
									target="_BLANK"
								>
									<i className="fab fa-youtube" />
								</a>
							)}

							{linkedin && (
								<a
									href={`https://linkedin.com/in/${linkedin}`}
									rel="noopener noreferrer"
									target="_BLANK"
								>
									<i className="fab fa-linkedin" />
								</a>
							)}
						</p>
					</div>
				</div>
				<nav>
					<a href="#about">About</a>
					<a href="#blog">Blog</a>
					<a href="#repository">Repository</a>
					<a href="#newsletter">Newsletter</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
