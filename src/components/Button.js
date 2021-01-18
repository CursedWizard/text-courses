
import React from 'react';
import '../styles/button.css';


class Button extends React.Component {
    constructor (props) 
	{
		super(props);
		this.color = "#ff";
	}

	render()
	{
		return (
			<button className="button ml-auto mr-auto mt-2"
				onClick={this.props.onClick}
			>
				Начать
			</button>
		);
	}
}

export default Button;
