import React from "react";
import './styles';
import Button from "../Button/Button";

/**
 *
 * @param props.title:string - текст заголовка
 */
class Header_tables extends React.Component {
	render() {
		return (
			<section className='header_tables'>
				<div className="container">
					<h2 className='header_tables__title'>{this.props.title}</h2>
					<div className="btn-wrapper">
						<Button type='light' text='Турнирная таблица Группа А/Женщины'/>
						<Button type='light' text='Турнирная таблица Высшая лига/Мужчины'/>
					</div>
					<img className='header_tables__img' src="../front-end/assets/svg/календарь игр.svg" alt="картинка"/>
				</div>

			</section>
		)
	}
}

export default Header_tables
