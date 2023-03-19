import React from "react";
import './styles/index.scss';

const classes = ['btn'];

/**
 *
 * @param {string} props.text - текст кнопки
 * @param {string} props.type - тип кнопки (dark or light) цвет по умолчанию
 * @param {string} props.size - размер кнопки
 * @param {string} props.state - состояние кнопки
 * @constructor
 */

const AddingClasses = (props) => {
	for (let key in props) {
		if (((key !== 'href') && (key !== 'text')) && props[key] !== undefined) {
			classes.push(props[key])
		}
	}
}

class Button extends React.Component {

	render() {
		AddingClasses(this.props);
		return (
				<a className={`${classes.join(' ')}`} href={this.props.href}>{this.props.text}</a>
		);
	}
}

export default Button
