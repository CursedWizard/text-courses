
import React from 'react';
import "./styles/course_page.css"

import Highlighter from "./components/Highlighter";

import {flexible_format, text_base, concise_material, practise} from "./media/texts/text_course";

import TextIcon from "./img/TextIcon";
import BulbIcon from "./img/BulbIcon";
import FormatIcon from "./img/MonitorIcon";

import Button from "./components/Button"

import HighlightedFeature from "./components/CoursePage/HighlightedFeature";
import NavLessonItem from "./components/NavLessonItem";
import Footer from "./components/Footer";


import ContentTable from "./components/CoursePage/ContentTable"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import overview_text from "./media/texts/course_overview";

class CourseInfo extends React.Component {
    constructor (props) 
	{
		super(props);

		this.notSelectedStyle = {
			borderBottom: "3px solid transparent",
			color: "#656565"
		}
		this.state = {
			currentTab: "all"
		}
		this.color = "#ff";

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
		console.log(this.state.currentTab)
		return (
			<>

				<div className="header-content flex-column justify-center mt-12">
					<h1
						className="ml-auto mr-auto"
						style={{
							color: "white",
							marginBottom: "0px"
						}}
					>Математика</h1>
					<h5
						className="ml-auto mr-auto"
						style={{
							fontSize: "1.5rem",
							marginTop: "-5px",
							color: "#EDEDED"
						}}
					>профильная</h5>
					<Link to="/content" className="mx-auto">
						<Button 
							// onClick={this.props.onContentPageSwitch}
						/>
					</Link>
				</div>

				<div id="dashboard"
					className="p-5"
					style={{
						marginTop: "0px",
						maxWidth: "850px",
						paddingTop: "0px"
					}}
				>
				<div className="mt-6">
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
					{/* <p class="text-base mt-4 mb-0 whitespace-pre-line sm:mb-10 lg:mb-0" */}
					{/* >{overview_text}</p> */}

				</div>


				<div className="flex-row justify-start mt-1">
					<HighlightedFeature icon={"lesson"} number={37} text={"уроков"}/>
					<HighlightedFeature icon={"exercise"} number={12} text={"упражнений"}/>
					<HighlightedFeature icon={"images"} number={170} text={"иллюстраций"}/>
				</div>


					<h4 className="mb-6 mt-8"
					>Содержание курса</h4>
					<ContentTable>
						<NavLessonItem
							title="Текстовые задачи"
							extended={false}
							indexNumber={"1."}
							price={0}
							butClassName="ml-4 mr-8"
						/>

						<NavLessonItem
							title="Графики и диаграммы"
							extended={false}
							indexNumber={"2."}
							price={0}
							butClassName="ml-4 mr-8"
						/>

						<NavLessonItem
							title="Начала теории вероятностей"
							extended={false}
							indexNumber={"3."}
							price={0}
							butClassName="ml-4 mr-8"
						/>

						<NavLessonItem
							title="Производная и первообразная"
							extended={false}
							indexNumber={"4."}
							price={250}
							butClassName="ml-4 mr-8"
						/>

						<NavLessonItem
							title="Планиметрия"
							extended={false}
							indexNumber={"5."}
							price={300}
							butClassName="ml-4 mr-8"
						/>
					</ContentTable>

					<h4 className="mb-2 mt-4"
					>Чем наши курсы лучше?</h4>
					<div className="flex-row items-center ml-auto mr-auto justify-start wrap">
						<Highlighter
							icon={TextIcon}
							title={"Текстовые курсы."}
							text={text_base}
						/>

						<Highlighter
							icon={BulbIcon}
							title={"Коротко и по делу."}
							text={concise_material}
						/>
						<Highlighter
							style={{
								marginTop: "0px",
							}}
							icon={FormatIcon}
							title={"Гибкий формат."}
							text={flexible_format}
						/>

						<Highlighter

							style={{
								marginTop: "0px",
							}}
							icon={FormatIcon}
							title={"Турниры."}
							text={practise}
						/>
					</div>

				</div>

				<Footer/>

			</>

		);
	}
}

export default CourseInfo;
