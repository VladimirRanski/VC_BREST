import React from "react";
import './styles/index.scss';

const classes = ['btn'];

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
