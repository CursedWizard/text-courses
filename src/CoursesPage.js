import React from 'react';
import SearchBar from "./components/SearchBar";
import "./styles/course_page.css"

import CourseCard from "./components/CourseCard";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class CoursesPage extends React.Component {
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

	componentDidMount()
	{
		/*
		 * fetch request
		 * {
		 *
		 * }
		*/
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

				<div className="courses-page-wrapper mt-12">
				{/* <SearchBar/> */}
					<div className="flex-column courses-header mb-4">
						<div className="courses-header-wrapper">

							<h1 className="mb-6">Каталог курсов</h1>

							<SearchBar/>

							<div className="flex-row tabs-container items-center mt-4 ml-4">

								<button className="tab mt-auto"
									style={this.state.currentTab === "all" ? null : this.notSelectedStyle}
									onClick={() => this.handleTabClick("all")}
								>Все курсы
								</button>

								<button className="tab mt-auto"
									style={this.state.currentTab === "all" ? this.notSelectedStyle : null}
									onClick={() => this.handleTabClick("my")}
								>Мои курсы
								</button>

							</div>

						</div>
					</div>

				<div id="dashboard">
					<div id="dashboard-grid">

						<Link to="/index/info/1">
							<CourseCard
								subjectName="math"
								subjectSemiName="профильная"
								partsBit={(1 << 0) | (1 <<  1) | (1 << 2)}
								link={"math"}
							/>
						</Link>

						<Link to="/index/info/2">
							<CourseCard
								subjectName="phys"
								partsBit={(1 << 0) | (1 <<  1)}
								onClick={this.props.onclick}
								link={"phys"}
							/>
						</Link>

					</div>
				</div>
				</div>

				<Footer/>
			</>

		);
	}
}

export default CoursesPage;

/*
 *
						<coursecard
							subjectname="phys"
							partsbit={(1 << 0) | (1 <<  1)}
							onclick={this.props.onclick}
						/>

						<CourseCard
							subjectName="rus"
							partsBit={(1 << 0)}

						/>
						<CourseCard
							subjectName="progr"
							partsBit={(1 << 0)}
						/>
						<CourseCard
							subjectName="soc"
							partsBit={(1 << 1) | (1 << 2)}
						/>

						<CourseCard
							subjectName="bio"
							partsBit={(1 << 0)}
						/>
		*/
