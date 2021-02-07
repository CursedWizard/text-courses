import React from 'react';
import SearchBar from "./components/SearchBar";
import "./styles/course_page.css"

import CourseCard from "./components/CourseCard";
import Footer from "./components/Footer";
import {getCourses} from "./utils/FetchData"

import {loadingCards} from "./img/animation/LoadingCard"

import LoadingBar from "./img/animation/LoadingBar";
import SubjectCard from "./components/SubjectCard";


import {
  Link
} from "react-router-dom";
import {tailwind} from "./styles/tailwind";


class CoursesPage extends React.Component {
    constructor (props) 
	{
		super(props);

		this.notSelectedStyle = {
			borderBottom: "3px solid transparent",
			color: "#656565"
		}
		this.state = {
			currentTab: "all",
			courses: [],
			loading: true,
			device: "pc"
		}

		this.handleTabClick = this.handleTabClick.bind(this);
	}


	async componentDidMount()
	{
		console.log("Data hrer")

		let data = [1, 2]
		let courses = await getCourses();
		for (let i in courses)
		{
			data.push(courses[i])
		}

		console.log(data)
		this.setState({
			courses: data
		})

		let modifyDevice = (width) => {
			if (width <= 400 && this.state.device !== "mobile")	
				this.setState({
					device: "mobile"
				});

			else if (width > 400 && this.state.device === "mobile")
				this.setState({
					device: "pc"
				});
		}

		modifyDevice(window.innerWidth);
		window.addEventListener('resize', () => modifyDevice(window.innerWidth));

		setTimeout(() => {
			this.setState({
				loading: false
			})
		}, 0);
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

				<div 
					style={tailwind("min-h-70")}
					className="courses-page-wrapper mt-12">

					<div className="flex-column courses-header mb-4">
						<div className="courses-header-wrapper">

							<LoadingBar loading={this.state.loading}/>

							{this.state.device === "mobile" ? 
							null
							:
							<h1 style={null}>Каталог курсов</h1>
							}


							<SearchBar/>

							<div className="flex-row tabs-container items-center mt-4">

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

					<div id="dashboard"
						className="mx-auto"
					>
						<div id="dashboard-grid">

							{
								this.state.loading ?
									loadingCards.map((card, index) => {
										return card;
									})
									:
								this.state.courses.map((course, index) => {
									return (
										<Link style={this.state.device === "mobile" ? tailwind("w-full") : null} to="/web/theory-courses/math">
											{
												this.state.device === "mobile" ?
													<SubjectCard/>
												:
												<CourseCard
													subjectName="math"
													subjectSemiName="профильная" 
													overview={course.descr} 
													partsBit={course.parts_bit} 
													author={course.author_info} 
													link={"math"} 
												/> 
											}
										</Link>
									) 
								})
							}

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
 *
		*/
