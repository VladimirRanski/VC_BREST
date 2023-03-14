import React from 'react';
import ReactDOM from 'react-dom/client';

import './front-end/styles/index.scss';

import Header from "./front-end/components/Header/Header";
import Footer from "./front-end/components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Header/>
		<Footer/>
	</React.StrictMode>
);
