

import React from 'react';
import PropTypes from 'prop-types';

import Highlighter from "../components/Highlighter";
import InfoBlock from "../components/InfoBlock";

import HighlightedFeature from "../components/CoursePage/HighlightedFeature";

import overview_text from "../media/texts/course_overview";

class CourseOverview extends React.Component {
    constructor (props) 
	{
		CourseOverview.propTypes = {
			text: PropTypes.string,
			authorIcon: PropTypes.string,
			authorName: PropTypes.string
		};

		super(props);


		this.handleTabClick = this.handleTabClick.bind(this);
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

				<div className="mt-6"
					style={{
						maxWidth: "38rem",
						display: "block"
					}}
				>
					<h4 className="mb-3"
					>Краткое описание курса</h4>
					<p className="text-base whitespace-pre-line">Алгебра ( от араб.— восполнение) — старейшая ветвь математики. Когда приемов арифметики стало не хватать для решения различных практических задач, ученые мужи древности начали искать способы, как быстрее и проще выполнять вычисления, как решать задачи, которые сводятся к решению уравнений. Так зародилась алгебра.</p>

				</div>


				<div className="flex-row justify-start mt-1">
					<HighlightedFeature icon={"lesson"} number={37} text={"уроков"}/>
					<HighlightedFeature icon={"exercise"} number={12} text={"упражнений"}/>
					<HighlightedFeature icon={"images"} number={170} text={"иллюстраций"}/>
				</div>
			</>
		);
	}
}

export default CourseOverview;
