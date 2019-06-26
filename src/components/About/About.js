import React from 'react';

const About = ({ name }) => {
	return (
		<section className="about" id="about">
			<h3>
				Hi! I'm {name} <i className="animated hover-rotate em em-raised_hand_with_fingers_splayed" />
			</h3>
			<div className="details">
				<div className="item text-muted">
					<p>
						I'm a software developer from India <i className="animated hover-bounce em-svg em-heart f-12" />
						I'm good at MERN & LAMP Stack. I can create awesome Web application. If you have any work feel
						free to contact.
					</p>
					<p>
						Some of my previous works:
						<a rel="noopener noreferrer" target="_BLANK" href="https://betternode.com">
							Betternode
						</a>
						,
						<a rel="noopener noreferrer" target="_BLANK" href="https://cryptobeanie.com">
							CryptoBeanie
						</a>
						,
						<a rel="noopener noreferrer" target="_BLANK" href="https://clixwall.com">
							ClixWall
						</a>
					</p>
				</div>
			</div>
		</section>
	);
};

export { About };
