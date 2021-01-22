

import PropTypes from 'prop-types';
import React from 'react';

import "../styles/content_page.css"

import SubLessonItem from "./SubLessonItem";
import ArrowExtend from "../img/ArrowExtend"

class NavLessonItem extends React.Component {
    constructor (props) 
	{
		super(props);
		this.state = {
			selected: false,
			text: "Some stuff",
			extended: false
		}

		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	componentDidMount()
	{
		this.setState({
			extended: this.props.extended
		})
	}
	handleButtonClick()
	{
		this.setState({
			extended: this.state.extended ^ true
		})

		console.log("Clicked " + this.state.extended)
	}

	render()
	{
		return (
			<div className="collection-sidebar-category">

				<div className="category-title-wrapper">

					<div className="flex clickable"
						onClick={this.handleButtonClick}
						style={{alignItems: "start"}}
					>
						<h5>{this.props.indexNumber}</h5>
						<h5
							className="ml-2"
						>{this.props.title}</h5>
					</div>


					<div className="flex-row">

						{
							this.props.price > 0 ? 

								<button className="button"
									style={{
										minWidth: "6rem"
									}}
								>
									{this.props.price} ex.
								</button>
							:
								null
						}
					<button 
						className={"button-base button-root rounded-full p-0  " + this.props.butClassName}
						type="button"
						onClick={this.handleButtonClick}
					>
						<ArrowExtend
							className={`${this.state.extended ? "button-rotate-down" : "button-rotate-up"} arrow-button`}
						/>

					</button>

					</div>

				</div>

				<div className="lessons-sublist mt-2"
					style={this.state.extended ? null : {display: "none"}}
				>
					<SubLessonItem
						title="Introduction"
						done={true}
					/>
					<SubLessonItem
						title="Something in the middle"
						done={true}
					/>
					<SubLessonItem
						title="Conclusiob"
						done={false}
					/>
				</div>


			</div>
		);
	}
}

NavLessonItem.propTypes = {
	title: PropTypes.string,
	extended: PropTypes.bool,
	onClick: PropTypes.func,
};

export default NavLessonItem;

