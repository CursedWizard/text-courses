

import React from 'react';
import Close from "../img/Close";
import ExodeAuthor from "./ExodeAuthor";

// Icons
// TODO: put them in props and send from CourseInfo
import MathIcon from "../img/lessons-orange/Math";

import styled from "styled-components";
import {tailwind} from '../styles/tailwind';

const ModalWrapper = styled.div`
	width: 435px;
	position: relative;
	background-color: rgb(255, 255, 255);
	height: 100%;
	overflow-y: auto;

	transform: translateX(435px);
	transition: all 0.4s ease-in-out;

}
`;


class ModalWindow extends React.Component {
    constructor (props) 
	{
		super(props);
		this.state = {
			selected: false,
			cardWidth: "435px",
			transformCard: "translateX(435px)",

		}

		this.handleClose = this.handleClose.bind(this);
	}

	componentDidMount()
	{

		let func = () => {
			this.setState({
				transformCard: "translateX(0px)"
			});

		}
		setTimeout(() => {
			func();
		}, 10)
	}


	handleClose()
	{
		this.setState({
			transformCard: "translateX(435px)"
		});

		let func = () => this.props.onClose();
		setTimeout(() => {
			func();
		}, 400)
	}

	render()
	{
		return ( 

			<ModalWrapper
				style={{
					width: this.state.cardWidth,
					display: "flex",
					transform: this.state.transformCard
				}}	
			>
				{this.props.children}
			</ModalWrapper>

		);
	}
}


export default ModalWindow;

