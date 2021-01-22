
import React from 'react';
import '../styles/card.css';


class ExodeAuthor extends React.Component {
    constructor (props) 
	{
		super(props);
		this.color = "#ff";
	}

	render()
	{
		return (
			<div className={this.props.className}>
				<div 
					class="flex-row ml-1"
					style={{
						marginTop: "0px"
					}}
				>
					<img
						style={{borderRadius: "6px"}}
						src={"https://exode.ru/img/icon-square-256.png"}
						width="36" height="36" alt=""/>
					<p 
						style={this.props.textStyle}
						className="ml-2"
					>exode</p>
				</div>
			</div>
		);
	}
}

export default ExodeAuthor;
