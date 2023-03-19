import React from "react";
import './styles/index.scss';
import HeaderTables from "../HeaderTables/HeaderTables";

class TournamentTable extends React.Component {
	render() {
		return (
			<section className='section__tournament-table'>
				<HeaderTables title='Турнирная таблица'>

				</HeaderTables>
				<table className="tournament-table">
					<tbody>
					<tr className="tournament-table__header">
						<th>№</th>
						<th>команда</th>
						<th>и</th>
						<th>в</th>
						<th>п</th>
						<th>в/п</th>
						<th>очки</th>
					</tr>
					<tr>
						<td>1</td>
						<td>
							<dl>
								<dt>
									<img src="../front-end/assets/images/png/logo_pribuzhe.png" alt="лого"/>
								</dt>
								<dd>Прибужье</dd>
							</dl>
						</td>
						<td>20</td>
						<td>20</td>
						<td>0</td>
						<td>0</td>
						<td>60</td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					</tbody>
				</table>
			</section>

		)
	}
}

export default TournamentTable
