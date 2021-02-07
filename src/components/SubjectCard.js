
import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';
import { ReactSVG } from 'react-svg'
import styled from "styled-components";
import {styles, SecondaryText, FlexColumn} from "../styles/baseStyle";

// import tailwind from 'tailwind-rn';
import {tailwind} from "../styles/tailwind";

const CardWrapper = styled.div`
	width: 100%;
	min-width: 240px;
	padding: 15px;
	border-radius: 6px;

	height: 70px;

	color: white;
	background-color: #A283E4;
	display: block;
	position: relative;
	margin-top: 7px;
	margin-bottom: 7px;
	margin-right: 0px;

`;

const FlexColumnCenter = styled(FlexColumn)`
	// align-items: center;
	display: flex;
	width: 100%;
	height: 100%;
	margin-top: auto;
	margin-bottom: auto;
	justify-content: center;
`

const RadialProgress = styled.div`
	height: 55px;
	width: 55px;

	
	position: absolute;
	right: 10px;
	bottom: 7px;
	top: auto;

	background-color: #fff;
	border-radius: 100%;
	font-weight: 700;


`;


const TextWrapper = styled.div`
color: #21242c;
font-size: 14px;
align-items: center;
display: flex;
height: 100%;
left: 0;
top: 0;
justify-content: center;
position: absolute;
width: 100%;
`;

class SubjectCard extends React.Component {
    constructor (props) 
	{
		super(props);
		this.state = {
		}

		this.colorPalette = ["#b0e04a", "#7A4AE0", "#E0C54A", "#4ab0e0",
		"#DE3B76", "#E07A4A", "#e04ab0"]
	}


	render()
	{
		return (
			<CardWrapper>
				<FlexColumnCenter>
					<div style={tailwind("text-5 font-bold")}>Математика</div>

					<SecondaryText style={tailwind("text-3 leading-4")}>профильная
					</SecondaryText>

				</FlexColumnCenter>
				<RadialProgress>
					<svg aria-label="20% progress" viewBox="0 0 100 100" height="55" width="55"><circle cx="50" cy="50" r="45" stroke="#E7E7E7" stroke-width="10" fill="none" opacity=".2"></circle><circle cx="50" cy="50" r="45" stroke="#FFC42E" stroke-width="10" stroke-linecap="round" fill="none" opacity="1" stroke-dashoffset="244" stroke-dasharray="290" transform="rotate(-90 50 50)"></circle></svg>
					<TextWrapper>16%</TextWrapper>
				</RadialProgress>
			</CardWrapper>
		);
	}
}

SubjectCard = Radium(SubjectCard);

export default SubjectCard;

