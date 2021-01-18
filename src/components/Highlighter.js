
import React from 'react';

class Highlighter extends React.Component {
    constructor (props) 
	{
		super(props);
		this.state = {
			selected: false,
			text: "Some stuff"
		}

	}

	render()
	{
		return (

			<div
				className="highlighter"
				style={this.props.style}
			>
				<div>
					<this.props.icon className="mr-3"/>
				</div>

				<div
					className="flex-column justify-start -mt-3">
					<h5 className="mb-0"
					>{this.props.title}</h5>
					<p className="text-base">{this.props.text}</p>
				</div>

		</div>
		);
	}
}


export default Highlighter;

