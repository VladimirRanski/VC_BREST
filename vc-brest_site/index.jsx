import React from 'react';
import ReactDOM from 'react-dom/client';

import './front-end/styles/index.scss';

import Header from "./front-end/components/Header/Header";
import Footer from "./front-end/components/Footer/Footer";
import Games_calendar
	from "./front-end/components/Games_calendar/Games_calendar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Header/>
		<Games_calendar/>
		<Footer/>
	</React.StrictMode>
);
