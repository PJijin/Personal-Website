import React from 'react';
import useDarkMode from 'use-dark-mode';

import { config } from '../config';
import Header from './Header';
import { Dev } from './Dev';
import { Medium } from './Medium';
import { Repository } from './Repository/';
import { About } from './About';
import { Newsletter } from './Newsletter';

const App = () => {
	const darkMode = useDarkMode(false);
	document.title = config.title;
	if (!config.github) return <p className="text-black">Edit src/config.js</p>;
	return (
		<div className="App">
			<Header {...config} darkMode={darkMode} />
			<About name={config.name} />
			{config.blog === 'Dev' && <Dev username={config.dev} />}
			{config.blog === 'Medium' && <Medium username={config.medium} />}
			<Repository />
			<Newsletter />
		</div>
	);
};

export default App;
