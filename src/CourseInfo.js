
import React from 'react';
import "./styles/course_page.css"

import Highlighter from "./components/Highlighter";
import InfoBlock from "./components/InfoBlock";

import {flexible_format, text_base, concise_material, practise} from "./media/texts/text_course";

import TextIcon from "./img/TextIcon";
import BulbIcon from "./img/BulbIcon";
import FormatIcon from "./img/MonitorIcon";

import Button from "./components/Button"

// Components
import AsideCard from "./components/AsideCard"
import HighlightedFeature from "./components/CoursePage/HighlightedFeature";
import NavLessonItem from "./components/NavLessonItem";
import Footer from "./components/Footer";
import ModalWindow from "./components/ModalWindow";

// Sections
import CourseOverview from "./sections/CourseOverview";
import HeaderSection from "./sections/HeaderSection";
import ProsSection from "./sections/ProsSection";


import ReactSVG from "react-svg";
import ContentTable from "./components/CoursePage/ContentTable"


import overview_text from "./media/texts/course_overview";

class CourseInfo extends React.Component {
    constructor (props) 
	{
		super(props);

		this.notSelectedStyle = {
			borderBottom: "3px solid transparent",
			color: "#656565"
		}

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
				<div className="_next">
					{/* <ModalWindow/> */}

					<HeaderSection
						title="Математика"
						subtitle="профильная"
					/>


					<div className="flex-row mx-auto justify-between"
						style={{
							maxWidth: "1050px",
						}}
					>
						<div id="dashboard"
							className="p-5"
							style={{
								maxWidth: "700px"
							}}
						>
							<CourseOverview />

							<h4 className="mb-6 mt-8"
							>Содержание курса</h4>

							<ContentTable>
								<NavLessonItem
									title="Текстовые задачи"
									extended={false}
									indexNumber={"1."}
									price={0}
									butClassName="ml-4 -mr-4"
								/>

								<NavLessonItem
									title="Графики и диаграммы"
									extended={false}
									indexNumber={"2."}
								price={0}
									butClassName="ml-4 -mr-4"
								/>

								<NavLessonItem
									title="Начала теории вероятностей"
									extended={false}
									indexNumber={"3."}
									price={0}
									butClassName="ml-4 -mr-4"
								/>

								<NavLessonItem
									title="Производная и первообразная"
									extended={false}
									indexNumber={"4."}
									price={250}
									butClassName="ml-4 -mr-4"
								/>

								<NavLessonItem
									title="Планиметрия"
									extended={false}
									indexNumber={"5."}
									price={300}
									butClassName="ml-4 -mr-4"
								/>
							</ContentTable>


						</div>

						<AsideCard />

					</div>

					<ProsSection />

					<Footer/>

				</div>
			</>

		);
	}
}

export default CourseInfo;
