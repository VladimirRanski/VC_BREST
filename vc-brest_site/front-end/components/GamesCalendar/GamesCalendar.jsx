import React from "react";
import './styles/index.scss';
import GenerateRowToGamesCalendar from "./script/GenerateRowToGamesCalendar";
import {WithTeamWin} from "./script/WithTeamWin";
import HeaderTables from "../HeaderTables/HeaderTables";
import Button from "../Button/Button";


class GamesCalendar extends React.Component {

	render() {
		return (
			<section className='section__games-calendar'>
				<HeaderTables title='Календарь игр команд'>
					<div className="btn-wrapper">
						<Button type='light' text='Турнирная таблица Группа А/Женщины'/>
						<Button type='light' text='Турнирная таблица Высшая лига/Мужчины'/>
						<img className='header_tables__img' src="../front-end/assets/svg/календарь игр.svg" alt="картинка"/>
					</div>
				</HeaderTables>
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
							<td className='games-calendar__month' colSpan="5"><span className='date-month'>Март</span> <span className='date-year'>2023</span></td>
						</tr>
						<GenerateRowToGamesCalendar/>
						</tbody>
					</table>
			</section>

		);
	}

}

export default GamesCalendar
