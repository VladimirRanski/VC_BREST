import React from "react";
import './styles';

/**
 *
 * @param props.title:string - текст заголовка
 */
class HeaderTables extends React.Component {
	render() {
		return (
			<section className='header_tables'>
				<div className="container">
					<h2 className='header_tables__title'>{this.props.title}</h2>
					{this.props.children}
				</div>
			</section>
		)
	}
}

export default HeaderTables
