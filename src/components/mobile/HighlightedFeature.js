
import React from 'react';
import Lesson from "../CoursePage/Lesson"
import Exercise from "../CoursePage/Exercise";
import Illustration from "../CoursePage/Illustration";

class HighlightedFeature extends React.Component {
    constructor (props) 
	{
		super(props);
		this.state = {
			width: 15,
			height: 19,
			icon: Lesson
		}
	}

	componentDidMount()
	{
		let Icon = Lesson;

		switch(this.props.icon)
		{
			case "lesson":
				Icon = Lesson;
				break;

			case "exercise":
				Icon = Exercise;
				this.setState({
					width: 17,
					height: 22
				})
				break;

			case "images":
				Icon = Illustration;

				this.setState({
					width: 20,
					height: 22
				})
				break;

			default:
				break;
		}

		this.setState({
			icon: Icon
		})

	}

	render()
	{

		return (
				<div className="flex-column items-center justify-center no-shrink"
					style={{
						marginTop: "-0.75em",
						marginBottom: "0.75em"
					}}
				>
					<this.state.icon style={{
						width: this.state.width,
						height: this.state.height
						// marginRight: "10px"
					}}
					/>
					<p className="text-base"
						style={{
							color: "#B1B1B1"
						}}
					>{this.props.number} {this.props.text}</p>

				</div>
		);
	}
}

export default HighlightedFeature;
