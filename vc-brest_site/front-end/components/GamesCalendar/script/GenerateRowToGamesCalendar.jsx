import React from "react";

async function getData() {
	return await fetch('./front-end/components/GamesCalendar/script/gamesCalendar.json').then(data => data.json());
};

const gamesCalendar = await getData();

/**
 * @date - дата игры
 * @time - время игры
 * @address_game.city - город игры
 * @address_game.address - адрес игры
 * @team.host - команда хозяйка
 * @team_city.host - город команды хозяйки
 * @team_logo.host - лого команды хозяйки
 * @team_score.host - счет комады хозяйки
 * @team.guest - команда гостей
 * @team_city.guest - город команды гостей
 * @team_logo.guest - лого команды гостей
 * @team_score.guest - счет комады гостей
 */
export default function GenerateRowToGamesCalendar() {
	return gamesCalendar.map((data, i) => {
		let secondaryRow = '';

		const el = (
			<React.Fragment key={data.id}>
				<tr className={'games-calendar--row ' + secondaryRow}>
					<td className='games-calendar__date'>{data.date}</td>
					<td className='games-calendar__time'>{data.time}</td>
					<td>
						<table className="games-calendar__game">
							<tbody>
							<tr>
								<td
									className='games-calendar__team games-calendar__team--host'>{data.team.host}
								</td>
								<td rowSpan="2"><img
									className='games-calendar__team-logo games-calendar__team-logo--host'
									src={data.team.logo.host}/>
								</td>
								<td rowSpan="2" className='games-calendar__game-score'><span
									className='games-calendar__team-score--host '>{data.team.score.host}</span> : <span
									className='games-calendar__team-score--guest '>{data.team.score.guest}</span>
								</td>
								<td rowSpan="2"><img
									className='team__logo team__logo--guest'
									src={data.team.logo.guest}/>
								</td>
								<td
									className='games-calendar__team games-calendar__team--guest'>{data.team.guest}
								</td>
							</tr>
							<tr>
								<td
									className='games-calendar__team-city games-calendar__team-city--host'>{data.team.city.host}
								</td>
								<td
									className='games-calendar__team-city games-calendar__team-city--guest'>{data.team.city.guest}
								</td>
							</tr>
							</tbody>
						</table>
					</td>
					<td className='games-calendar__address-game'>
						<div className='games-calendar__address-game--wrapper'>
							<span
								className='games-calendar__address-game--city'>{data.address_game.city}</span>
							<span
								className='games-calendar__address-game--address'>{data.address_game.address}</span>
						</div>
					</td>
					<td className='games-calendar__round'>{data.round} тур</td>
				</tr>
			</React.Fragment>
		);
		return el
	});
}

