import React from 'react';

const Newsletter = () => {
	const [processed, setProcessed] = React.useState(false);

	const handleSubmit = email => {
		// Pass email to email list
		console.log(email);
		setProcessed(true);
	};

	return (
		<section className="newsletter" id="newsletter">
			<h4>Newsletter</h4>
			<p className="newsletter-desc text-muted">
				Signup for the newsletter and get awesome javascript tips No Spam Messages!!
				<i className="em-svg animated hover-bounce em-mailbox_with_mail" />
			</p>
			{processed ? (
				<p>
					Thank you for subscribing to the newsletter
					<i className="em-svg  animated hover-bounce  em-heartbeat" />
				</p>
			) : (
				<form
					className="flex"
					onSubmit={e => {
						e.preventDefault();
						return handleSubmit(e.target.email.value);
					}}
				>
					<input type="email" name="email" placeholder="Your email address.." autoComplete="off" required />
					<button type="submit">Submit</button>
				</form>
			)}
		</section>
	);
};
export { Newsletter };
