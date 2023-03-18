import React from "react";
import './styles/index.scss';
import GenerateRowToGamesCalendar from "./script/GenerateRowToGamesCalendar";
import {WithTeamWin} from "./script/WithTeamWin";
import Header_tables from "../Header_tables/Header_tables";


class Games_calendar extends React.Component {

	render() {
		return (
			<section className='section__games-calendar'>
				<Header_tables title='Календарь игр команд'/>
					<table className="games-calendar">
						<tbody>
						<tr className='games-calendar__header'>
								<th>Дата</th>
								<th>Время</th>
								<th>Команды</th>
								<th>Адрес</th>
								<th>Тур</th>
						</tr>
						<tr className='games-calendar--row'>
							<td className='games-calendar__month' colSpan="5"><span className='dateMonth'>Март</span> <span className='dateYear'>2023</span></td>
						</tr>
						<GenerateRowToGamesCalendar/>
						</tbody>
					</table>
			</section>

		);
	}

}

export default Games_calendar
