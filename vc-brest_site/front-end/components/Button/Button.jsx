import React from "react";
import './styles/index.scss';


class Button extends React.Component {

	render() {
		return (
				<a className='btn' href='#'>{this.props.text}</a>
		);
	}
}

export default Button
