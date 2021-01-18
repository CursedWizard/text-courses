
import React from 'react';
import '../styles/card.css';


class Card extends React.Component {
    constructor (props) 
	{
		super(props);
		this.color = "#ff";
	}

	render()
	{
		return (
			<div className="card">
				<p> Test </p>
				<p> Test </p>
				<p> Test </p>
			</div>
		);
	}
}

export default Card;
