import React from "react";
import './styles/index.scss';


const GenerateRowToGamesCalendar = (param) => {

	// .games_calendar__date - дата игры
	// .games_calendar__time - время игры
	// .games_calendar__address_game--city - город игры
	// .games_calendar__address_game--address - адрес игры

	// .games_calendar__team--host - команда хозяйка
	// .games_calendar__team-city--host - город команды хозяйки
	// .games_calendar__team-logo--host - лого команды хозяйки
	// .games_calendar__team-score--host - счет комады хозяйки

	// .games_calendar__team--guest - команда гостей
	// .games_calendar__team-city--guest - город команды гостей
	// .games_calendar__team-logo--guest - лого команды гостей
	// .games_calendar__team-score--guest - счет комады гостей

}

class Games_calendar extends React.Component {

	render() {

		return (
			<section className='section__games_calendar'>
					<table className="games_calendar">
						<tbody>
						<tr className='games_calendar__header'>
								<th>Дата</th>
								<th>Время</th>
								<th>Команды</th>
								<th>Адрес</th>
								<th>Тур</th>
						</tr>
						<tr className='games_calendar--row'>
							<td className='games_calendar__month' colSpan="5"><span className='dateMonth'>Март</span> <span className='dateYear'>2023</span></td>
						</tr>
						<tr className='games_calendar--row games_calendar--secondary_row'>
							<td className='games_calendar__date'>02.03</td>
							<td className='games_calendar__time'>17:00</td>
							<td>
								<table className="games_calendar__game">
									<tbody>
									<tr>
										<td className='games_calendar__team games_calendar__team--host'>«Прибужье»</td>
										<td rowSpan="2"><img className='games_calendar__team-logo games_calendar__team-logo--host'
																				 src='./front-end/assets/images/png/logo_pribuzhe.png'/>
										</td>
										<td rowSpan="2" className='games_calendar__game-score'><span className='games_calendar__team-score--host games_calendar__team-score--win'>3</span> : <span className='games_calendar__team-score--guest'>0</span></td>
										<td rowSpan="2"><img
											className='team__logo team__logo--guest'
											src='./front-end/assets/images/png/logo_pribuzhe.png'/>
										</td>
										<td className='games_calendar__team games_calendar__team--guest'>«Коммунальник-Могилев»</td>
									</tr>
									<tr>
										<td className='games_calendar__team-city games_calendar__team-city--host'>Брест</td>
										<td className='games_calendar__team-city games_calendar__team-city--guest'>Могилев</td>
									</tr>
									</tbody>
								</table>
							</td>
							<td className='games_calendar__address_game'>
								<div className='games_calendar__address_game--wrapper'>
									<span className='games_calendar__address_game--city'>Могилев,</span>
									<span className='games_calendar__address_game--address'>ул. Курако, 28</span>
								</div>
							</td>
							<td className='games_calendar__round'>14 тур</td>
						</tr>
						<tr className='games_calendar--row'>
							<td className='games_calendar__date'>02.03</td>
							<td className='games_calendar__time'>17:00</td>
							<td>
								<table className="games_calendar__game">
									<tbody>
									<tr>
										<td className='games_calendar__team games_calendar__team--host'>«Прибужье»</td>
										<td rowSpan="2"><img className='games_calendar__team-logo games_calendar__team-logo--host'
																				 src='./front-end/assets/images/png/logo_pribuzhe.png'/>
										</td>
										<td rowSpan="2" className='games_calendar__game-score'><span className='games_calendar__team-score--host games_calendar__team-score--win'>3</span> : <span className='games_calendar__team-score--guest'>0</span></td>
										<td rowSpan="2"><img
											className='team__logo team__logo--guest'
											src='./front-end/assets/images/png/logo_pribuzhe.png'/>
										</td>
										<td className='games_calendar__team games_calendar__team--guest'>«Коммунальник-Могилев»</td>
									</tr>
									<tr>
										<td className='games_calendar__team-city games_calendar__team-city--host'>Брест</td>
										<td className='games_calendar__team-city games_calendar__team-city--guest'>Могилев</td>
									</tr>
									</tbody>
								</table>
							</td>
							<td className='games_calendar__address_game'>
								<div className='games_calendar__address_game--wrapper'>
									<span className='games_calendar__address_game--city'>Могилев,</span>
									<span className='games_calendar__address_game--address'>ул. Курако, 28</span>
								</div>
							</td>
							<td className='games_calendar__round'>14 тур</td>
						</tr>
						</tbody>
					</table>
			</section>
		);
	}
}

export default Games_calendar
