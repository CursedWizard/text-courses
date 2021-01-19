
import PropTypes from 'prop-types';
import React from 'react';
import "../styles/content_page.css"

import CircleDone from "../img/CircleDone"
import Disk from "../img/Disk"

class SubLessonItem extends React.Component {
    constructor (props) 
	{
		super(props);
		this.state = {
			selected: false,
			text: "Some stuff",
			clicked: false
		}

		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick()
	{
		this.setState({
			clicked: this.state.clicked ^ true
		})

		console.log("Clicked " + this.state.clicked)
	}

	render()
	{
		return (
			<div className="lesson-instance">
				{
					this.props.done ?
						<CircleDone className="no-shrink" style={{marginLeft: "-9.8px"}} />
					:
					<Disk className="no-shrink" style={{marginLeft: "-9.8px"}}/>
				}
				<h6 style={{marginTop: "-0px"}} className="lesson-text">{this.props.title}</h6>
			</div>
		);
	}
}

SubLessonItem.propTypes = {
	title: PropTypes.string,
	done: PropTypes.bool,
	onClick: PropTypes.func,
};

export default SubLessonItem;

