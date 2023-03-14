import React from 'react';
import ReactDOM from 'react-dom/client';

import './front-end/styles/index.scss';

import Header from "./front-end/components/Header/Header";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Header/>
	</React.StrictMode>
);
