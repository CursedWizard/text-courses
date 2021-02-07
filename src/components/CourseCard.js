
import PropTypes from 'prop-types';
import React from 'react';
import { ReactSVG } from 'react-svg'
// import "../styles/nav_style.css"
//
import styled from "styled-components";

import PhysIcon from "../img/lessons/phys_2.svg";
import MathIcon from "../img/lessons/math-test.svg";
import RusIcon from "../img/lessons/rus_2.svg";
import InformIcon from "../img/lessons/inform_2.svg";
import SocIcon from "../img/lessons/society_2.svg";
import BioIcon from "../img/lessons/biology_2.svg";

import CircArc from "../img/forms/circ-arc_2.svg";
import Apart from "../img/forms/A-part.svg";
import Bpart from "../img/forms/B-part.svg";
import Cpart from "../img/forms/C-part.svg";

import ArrowRight from "../img/ArrowBack";
import {shortText} from "../utils/Utils";
import {tailwind} from '../styles/tailwind';


const HeaderTitle = styled.div`
	border-top-left-radius: 18px;
	border-top-right-radius: 18px;

	color: white;
	background: ${props => props.color};
	with: 100%;
	height: 8em;

	padding-left: 1em;
	padding-right: 1em;

	display: flex;
	flex-direction: column;
	justify-content:  center;

	
	& > h4 {
		margin-top: 0em;
		margin-bottom: 0em;
		font-weight: bold;
	}
	& > h6 {
		margin-top: -0.2em;
		margin-bottom: 0em;
		color: #EDEDED;
	}
`;

async function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class CourseCard extends React.Component {
    constructor (props) 
	{
		super(props);
		this.state = {
			selected: false,
			text: "Some stuff",
			subjIcon: MathIcon,
			subjOfficName: "Математика",
			arcColor: "#7A4AE0",
			subjectSemiName: null,
			partA: 1,
			partB: 1,
			partC: 1,

			triangleFirstColor: "#E0C54A",
			triangleSecondColor: "#DE3B76",
			diskColor: "#6EBEE4"
		}

		this.colorPalette = ["#b0e04a", "#7A4AE0", "#E0C54A", "#4ab0e0",
		"#DE3B76", "#E07A4A", "#e04ab0"]
	}

	async componentDidMount()
	{

		let subjIcon = MathIcon;
		let subjOfficName = "Math"
		let arcColor = this.state.arcColor;

		if (!this.props.subjectName)
			return;

		if (this.props.subjectName === "math")
		{
			subjIcon = MathIcon;
			subjOfficName = "Математика";
		}
		if (this.props.subjectName === "bio")
		{
			subjIcon = BioIcon;
			subjOfficName = "Биология";
			arcColor = "#b0e04a";
		}
		if (this.props.subjectName === "phys")
		{
			subjIcon = PhysIcon;
			subjOfficName = "Физика";
			arcColor = "#E0C54A";
		}
		if (this.props.subjectName === "progr")
		{
			subjIcon = InformIcon;
			subjOfficName = "Информатика";
			arcColor = "#4ab0e0";
		}
		if (this.props.subjectName === "rus")
		{
			subjIcon = RusIcon;
			subjOfficName = "Русский язык";
			arcColor = "#E07A4A";
		}
		if (this.props.subjectName === "soc")
		{
			subjIcon = SocIcon;
			subjOfficName = "Обществознание";
			arcColor = "#DE3B76";
		}

		await shuffle(this.colorPalette);
		this.setState({
			subjOfficName: subjOfficName,
			subjIcon: subjIcon,
			subjectSemiName: this.props.subjectSemiName,
			arcColor: arcColor,
			triangleFirstColor: this.colorPalette[0],
			triangleSecondColor: this.colorPalette[1],
			diskColor: this.colorPalette[2],

			partA: (this.props.partsBit & (1 << 0)) > 0,
			partB: (this.props.partsBit & (1 << 1)) > 0,
			partC: (this.props.partsBit & (1 << 2)) > 0
		})

		if (!this.props.partsBit)
			return;
	}

	render()
	{
		return (
			<div className="course-card-wrapper flex-column"
				// onClick={() => this.props.onClick("content")}
			>

				<HeaderTitle color="#A283E4">
					<h4 
					>
						{this.state.subjOfficName}
					</h4>

					<h6 
					>
						{this.state.subjectSemiName}
					</h6>
				</HeaderTitle>

				<div className="course-card-inside-wrapper h-full flex-column justify-between"
					style={{position: "relative"}}
				>
					<div className="flex-column">
						<p
							className="mt-1 text-base"
						>{shortText(this.props.overview, 60) || "Разбор типичных заданий тестовой части профильной математики..." }</p>
					</div>

				<div className="flex-column">
					<div 
						className="flex-row"
					>
						<p>Части:</p>

						{
							this.state.partA ? 
								<div 
									className="ml-1">
									<ReactSVG
										beforeInjection={(svg) => {
											svg.classList.add('ege-part')}}
										src={Apart} />
								</div>
								:
								null
						}

						{
							this.state.partB ? 
								<div 
									className="ml-1">
									<ReactSVG
										beforeInjection={(svg) => {
											svg.classList.add('ege-part')}}
										src={Bpart} />
								</div>
								:
								null
						}

						{
							this.state.partC ? 
								<div 
									className="ml-1">
									<ReactSVG
										beforeInjection={(svg) => {
											svg.classList.add('ege-part')}}
										src={Cpart} />
								</div>
								:
								null
						}
					</div>

					<hr className="MuiDivider-root"
						style={{
							marginTop: "7px",
							marginBottom: "10px",
							backgroundColor: "#6EBEE4",
							height: "2px"
						}}
					/>

					<div class="flex-row items-center justify-between mt-auto"
					>

						<div 
							class="flex-row"
							style={{
								// display: "inline-flex"
							}}
						>
							<img
								src={this.props.author ? this.props.author.avatar_url : "https://exode.ru/img/icon-square-256.png" }
								className="rounded-full"
								width="36" height="36" alt=""/>
							<p 
								className="mt-auto mb-auto"
								style={{
									maxWidth: "100px",
									lineHeight: "0.85rem",
									fontSize: "14px",
									marginLeft: "8px"
								}}
							>{this.props.author ? this.props.author.fn + " " + this.props.author.ln : "exode"}
							</p>
						</div>

						<button class="flex-row ml-auto" 
						>
							<span
								style={{
									// fontSize: "20px",
									fontWeight: "600",
								}}
							>Начать</span>

							<ArrowRight
								style={{
									marginLeft: "5px",
									transform: "rotate(180deg)",
									fill: "#FF7D20"
								}}
							/>

						</button>
					</div>
				</div>


			</div>
			</div>
		);
	}
}

CourseCard.propTypes = {
	subjectName: PropTypes.string,
	subjectSemiName: PropTypes.string,
	subjectOverview: PropTypes.string,
	parts: PropTypes.number
};

export default CourseCard;

