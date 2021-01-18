
import React from 'react';
import Lesson from "./Lesson"
import Exercise from "./Exercise";
import Illustration from "./Illustration";

class HighlightedFeature extends React.Component {
    constructor (props) 
	{
		super(props);
		this.color = "#ff";
	}

	render()
	{
		let Icon = Lesson;

		switch(this.props.icon)
		{
			case "lesson":
				Icon = Lesson;
				break;

			case "exercise":
				Icon = Exercise;
				break;

			case "images":
				Icon = Illustration;
				break;

			default:
				break;
		}

		return (
				<div className="flex-row items-center justify-center high-feature"
					style={this.props.style}
				>
					<Icon style={{
						marginRight: "10px"
					}}
					/>
					<p className="text-base">{this.props.number} {this.props.text}</p>

				</div>
		);
	}
}

export default HighlightedFeature;
