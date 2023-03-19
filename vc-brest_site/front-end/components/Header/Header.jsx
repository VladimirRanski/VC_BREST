import React from "react";
import './styles/index.scss';
import Button from "../Button/Button";
import {Link} from "react-router-dom";

class Header extends React.Component {

	render() {

		return (
			<header className="header">
				<div className="container">
					<nav className="nav">
						<a className={`nav__logo`} href="#">
							<img className="nav__logo--img"
									 src="./front-end/assets/svg/logo_vc_brest.svg" width="83"
									 height="56" alt="логотип волейбольного клуба Брест"/>
						</a>
						<ul className="nav__list">
							<li className="nav__item"><Link className="nav__link" to="/games-calendar">Расписание
								игр</Link></li>
							<li className="nav__item" onClick={this.toggleHidden}><Link
								className="nav__link nav__link--selections" to="#">Команды</Link>
								<ul className="nav__selections hidden">
									<li className="nav__item"><Link className="nav__link" to="#">«Западный
										Буг»</Link></li>
									<li className="nav__item"><Link className="nav__link"
																							 to="#">«Прибужье»</Link></li>
								</ul>
							</li>
							<li className="nav__item"><Link className="nav__link"
																					 to="#">Новости</Link></li>
							<li className="nav__item"><Link className="nav__link"
																					 to="#">Галерея</Link></li>
							<li className="nav__item"><Link className="nav__link" href="#">О
								клубе</Link></li>
							<li className="nav__item"><Link className="nav__link"
																					 to="#">Контакты</Link></li>
							<li className="nav__item"><Link className="nav__link"
																					 to="#">Обращения</Link></li>
						</ul>
					</nav>
				</div>
			</header>
		);
	}

	toggleHidden(e) {
		if (e.target.nextElementSibling !== null) {
			if (e.target.nextElementSibling.classList.contains('nav__selections')) {
				e.target.nextElementSibling.classList.toggle('hidden')
				if (!e.target.nextElementSibling.classList.contains('hidden')) {
					e.target.nextElementSibling.style.display = 'flex'
				} else {
					e.target.nextElementSibling.style.display = 'none'
				}
			}
		}
	}

}

export default Header
