import React from 'react';
import ReactDOM from 'react-dom/client';

import './front-end/styles/index.scss';

import Header from "./front-end/components/Header/Header";
import GamesCalendar
	from "./front-end/components/GamesCalendar/GamesCalendar";
import Footer from "./front-end/components/Footer/Footer";
import TournamentTable from "./front-end/components/TournamentTable/TournamentTable";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Header/>
		{/*<GamesCalendar/>*/}
		<TournamentTable/>
		<Footer/>
	</React.StrictMode>
);
