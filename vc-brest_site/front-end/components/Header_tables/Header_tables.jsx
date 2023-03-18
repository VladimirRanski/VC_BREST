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
			<section className='container header_tables'>
				<h2 className='header_tables__title'>{this.props.title}</h2>
				<div className="btn-wrapper">
					<Button type='light' text='Турнирная таблица «Прибужье»'/>
					<Button type='light' text='Турнирная таблица «Западный Буг»'/>
				</div>
				<img className='header_tables__img' src="../front-end/assets/svg/календарь игр.svg" alt="картинка"/>
			</section>
		)
	}
}

export default Header_tables
