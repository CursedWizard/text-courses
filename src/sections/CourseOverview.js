

import React from 'react';
import PropTypes from 'prop-types';

import Highlighter from "../components/Highlighter";
import InfoBlock from "../components/InfoBlock";

import HighlightedFeature from "../components/CoursePage/HighlightedFeature";
import MobileHighlightedFeature from "../components/mobile/HighlightedFeature";

import overview_text from "../media/texts/course_overview";

import {determineDevice} from "../utils/Utils";

class CourseOverview extends React.Component {
    constructor (props) 
	{
		super(props);
		CourseOverview.propTypes = {
			text: PropTypes.string,
			authorIcon: PropTypes.string,
			authorName: PropTypes.string
		};

		this.state = {
			device: "pc"
		}



		this.handleTabClick = this.handleTabClick.bind(this);
	}


	componentDidMount()
	{
		determineDevice(this);

		// modifyDevice(window.innerWidth);
		window.addEventListener('resize', () => determineDevice(this));
	}

	handleTabClick(tabName)
	{
		this.setState({
			currentTab: tabName
		});
	}

	render()
	{
		return (
			<>

				{
					this.state.device === "mobile" ?

						<div className="flex-row justify-center">
							<MobileHighlightedFeature icon={"lesson"} number={37} text={"ур."}
							/>
								<svg className="ml-3 mr-3"
									style={{
										marginTop: "-0.75em"
									}}
									width="1" height="37" viewBox="0 0 1 37" fill="none" xmlns="http://www.w3.org/2000/svg">
								<line x1="0.5" x2="0.5" y2="37" stroke="#D1D0D0"/>
								</svg>
							<MobileHighlightedFeature icon={"exercise"} number={12} text={"упр."}/>

								<svg className="ml-3 mr-3"
									style={{
										marginTop: "-0.75em"
									}}
									width="1" height="37" viewBox="0 0 1 37" fill="none" xmlns="http://www.w3.org/2000/svg">
								<line x1="0.5" x2="0.5" y2="37" stroke="#D1D0D0"/>
								</svg>
							<MobileHighlightedFeature icon={"images"} number={170} text={"ил."}/>
						</div>
						:
						null
				}

				<div className="mt-0"
					style={{
						maxWidth: "38rem",
						display: "block"
					}}
				>
					{
						this.state.device === "mobile" ?
							null
							:
								<h4 className="mb-3"
								>Краткое описание курса</h4>
					}
					<p className="text-base whitespace-pre-line">Алгебра ( от араб.— восполнение) — старейшая ветвь математики. Когда приемов арифметики стало не хватать для решения различных практических задач, ученые мужи древности начали искать способы, как быстрее и проще выполнять вычисления, как решать задачи, которые сводятся к решению уравнений. Так зародилась алгебра.</p>

				</div>

				{
					this.state.device === "mobile" ?
						null
					:

						<div className="flex-row justify-start mt-1 wrap">
							<HighlightedFeature icon={"lesson"} number={37} text={"уроков"}/>
							<HighlightedFeature icon={"exercise"} number={12} text={"упражнений"}/>
							<HighlightedFeature icon={"images"} number={170} text={"иллюстраций"}/>
						</div>
				}
			</>
		);
	}
}

export default CourseOverview;

/*
 *
				<div className="mt-0">
					<h4 className="mb-2"
					>Авторы курса</h4>
					<div 
						class="flex-row ml-1"
						style={{
						}}
					>
						<img
							style={{borderRadius: "6px"}}
							src={"https://exode.ru/img/icon-square-256.png"}
							width="36" height="36" alt=""/>
						<p 
							className="ml-2"
						>exode</p>
					</div>
				</div>
*/
