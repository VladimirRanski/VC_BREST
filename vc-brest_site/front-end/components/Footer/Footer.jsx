import React from "react";
import './styles/index.scss';


class Footer extends React.Component {

	render() {
		return (
			<footer className="footer">
				<div className="container">
					<div className="footer__content">
						<div className="footer__logo">
							<img className="logo" src="./front-end/assets/svg/logo_vc_brest.svg"
									 alt="логотип"/>
								<span className="footer__logo--title">ВК Брест</span>
								<span className="footer__logo--date">2023</span>
						</div>
						<div className="footer__links">
							<ul className="links__list">
								<li className="links__item"><a
									className="links__icon links__icon--instagram" href="#"></a>
								</li>
								<li className="links__item"><a
									className="links__icon links__icon--VK" href="#"></a></li>
								<li className="links__item"><a
									className="links__icon links__icon--facebook" href="#"></a>
								</li>
								<li className="links__item"><a
									className="links__icon links__icon--youtube" href="#"></a>
								</li>
								<li className="links__item"><a
									className="links__icon links__icon--email" href="#"></a></li>
							</ul>
							<a className="footer__links--phone" href="tel:+375295555555">+375
								29 555 55 55</a>
						</div>
						<div className='footer__developers'>
							разработка сайта: ...
						</div>
					</div>
				</div>
			</footer>
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

export default Footer
