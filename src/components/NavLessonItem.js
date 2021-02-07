

import PropTypes from 'prop-types';
import React from 'react';

import styled from "styled-components";

import "../styles/content_page.css"

import SubLessonItem from "./SubLessonItem";
import ArrowExtend from "../img/ArrowExtend"

import SecondaryButton from "./SecondaryButton";
import tailwind from 'tailwind-rn';

import {
  Link
} from "react-router-dom";

const LessonWrapper = styled.div`
	display: flex;
	/* align-items: center; */
	-moz-box-pack: justify;
	justify-content: space-between;
	flex-wrap: nowrap;
	margin-left: 1.25em;
	margin-right: 1.25em;
	margin-bottom: 0.50em;
`

const PriceButton = styled(SecondaryButton)`
	width: 4.5em;
	height: 38px;
	font-size: 1em;
	margin-left: 0.5em;
	margin-top: 0.6em;
	margin-bottom: 0.6em;
`

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

				<LessonWrapper>

					<div className="flex clickable no-wrap"
						onClick={this.handleButtonClick}
						style={{alignItems: "start", minWidth: "170px"}}
					>
						<h5>{this.props.indexNumber}</h5>
						<h5
							className="ml-2"
						>{this.props.title}</h5>
					</div>



					<div style={tailwind("flex justify-between")}>

						{
							this.props.price > 0 ? 

								<PriceButton
									onClick={() => this.props.onPurchase(
									{
										// product object
										price: this.props.price,
										name: this.props.title
									})}
								>
									{this.props.price} ex.
								</PriceButton>
							:

							<button 
								className={"button-base button-root rounded-full p-0  " + this.props.butClassName}
								type="button"
								onClick={this.handleButtonClick}
							>
								<ArrowExtend
									className={`${this.state.extended ? "button-rotate-down" : "button-rotate-up"} arrow-button`}
								/>

							</button>

						}
					</div>


				</LessonWrapper>

				<div className="lessons-sublist mt-2"
					style={this.state.extended ? null : {display: "none"}}
				>
					{
						this.props.subLessons.map((subLesson, index) => {
							return (
								<SubLessonItem
									link={subLesson.link}
									title={subLesson.title}
									done={true}
								/>
							)
						})
					}
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

