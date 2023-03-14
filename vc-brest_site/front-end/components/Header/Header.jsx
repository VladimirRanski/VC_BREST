import React from "react";
import './styles/index.scss';
import Button from "../Button/Button";


class Header extends React.Component {

	render() {
		return (
			<header className="header">
				<div className="container">
					<nav className="nav">
						<a className="nav__logo" href="#">
							<img className="nav__logo--img"
									 src="./front-end/assets/svg/logo_vc_brest.svg" width="83"
									 height="56" alt="логотип волейбольного клуба Брест"/>
						</a>
						<ul className="nav__list">
							<li className="nav__item"><a className="nav__link" href="#">Расписание
								игр</a></li>
							<li className="nav__item" onClick={this.toggleHidden}><a
								className="nav__link nav__link--selections" href="#">Команды</a>
								<ul className="nav__selections hidden">
									<li className="nav__item"><a className="nav__link" href="#">«Западный
										Буг»</a></li>
									<li className="nav__item"><a className="nav__link"
																							 href="#">«Прибужье»</a></li>
								</ul>
							</li>
							<li className="nav__item"><a className="nav__link"
																					 href="#">Новости</a></li>
							<li className="nav__item"><a className="nav__link"
																					 href="#">Галерея</a></li>
							<li className="nav__item"><a className="nav__link" href="#">О
								клубе</a></li>
							<li className="nav__item"><a className="nav__link"
																					 href="#">Контакты</a></li>
							<li className="nav__item"><a className="nav__link"
																					 href="#">Обращения</a></li>
						</ul>
					</nav>
				</div>
				<Button type='XXL' href='http://google.com' text='google'/>
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
