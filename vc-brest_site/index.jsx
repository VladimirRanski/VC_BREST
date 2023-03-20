import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";


import './front-end/styles/index.scss';

import Header from "./front-end/components/Header/Header";
import Games_calendar from "./front-end/components/Games_calendar/Games_calendar";
import Footer from "./front-end/components/Footer/Footer";
import Auth from "./server/auth";



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

	<React.StrictMode>
		<BrowserRouter>
			<Header/>
			<Routes>
				<Route path='/games-calendar' element={<Games_calendar/>} exact/>
				<Route path='/auth' element={<Auth/>} exact/>
				<Route
					path="*"
					element={<Navigate to='/games-calendar' element={<Games_calendar />} replace/>}
				/>
			</Routes>
			<Footer/>
		</BrowserRouter>
	</React.StrictMode>
);
