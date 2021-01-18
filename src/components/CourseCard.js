
import PropTypes from 'prop-types';
import React from 'react';
import { ReactSVG } from 'react-svg'
// import "../styles/nav_style.css"
//

import PhysIcon from "../img/lessons/phys_2.svg";
import MathIcon from "../img/lessons/math-test.svg";
import RusIcon from "../img/lessons/rus_2.svg";
import InformIcon from "../img/lessons/inform_2.svg";
import SocIcon from "../img/lessons/society_2.svg";
import BioIcon from "../img/lessons/biology_2.svg";

import CircArc from "../img/forms/circ-arc_2.svg";
import SkyLine from "../img/forms/sky-line.svg";
import Apart from "../img/forms/A-part.svg";
import Bpart from "../img/forms/B-part.svg";
import Cpart from "../img/forms/C-part.svg";
import Separat from "../img/forms/blue-sep.svg";

import Triangle from "../img/forms/triangle.svg";
import DiskSvg from "../img/forms/disk.svg";
import ArrowRight from "../img/ArrowBack";


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
				<ReactSVG  
					beforeInjection={(svg) => {
						svg.classList.add('circ-arc')
						svg.setAttribute('style', `--color-stop: ${this.state.arcColor}`)
					}}
					src={CircArc} />

				<div className="course-card-inside-wrapper"
					style={{position: "relative"}}
				>

				<div 
						class="flex-row items-center"
				>
					<ReactSVG  
						beforeInjection={(svg) => {
							svg.classList.add('subj-icon')}}
						/* Setting icon of the subject */
						src={this.state.subjIcon}
					/>
					<div 
						className="flex-column ml-2 my-auto"
					>
						<h5 
							className="test-item mb-0 font-bold mb-0 lh-5"
						>
							{this.state.subjOfficName}
						</h5>

						<h6 
							className="col-grey mt-0 mb-2"
						>
							{this.state.subjectSemiName}
						</h6>

					</div>
				</div>


				<p
					className="mt-3 text-base"
				>Разбор типичных заданий тестовой части профильной математики...</p>

				<div 
					style={{marginBottom: "0%", marginTop: "16px"}}
						id="row-flex"
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
							style={{borderRadius: "6px"}}
							src={"https://exode.ru/img/icon-square-256.png"}
							width="36" height="36" alt=""/>
						<p 
							className="mt-auto mb-auto"
							style={{
								fontSize: "16px",
								marginLeft: "5px"
							}}
						>exode</p>
					</div>

					<button class="flex-row ml-auto" 
						style={{
							display:"flex"
						}}
					>
						<p
							style={{
								fontSize: "20px",
								fontWeight: "bold",
							}}
						>Начать</p>

						<ArrowRight
						style={{
							marginLeft: "5px",
							transform: "rotate(180deg)",
							fill: "#FC6900"
						}}
						/>

					</button>
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

