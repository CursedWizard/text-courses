
import React from 'react';
import "./styles/course_page.css"


// Components
import AsideCard from "./components/AsideCard"
import NavLessonItem from "./components/NavLessonItem";
import Footer from "./components/Footer";
import ModalWindow from "./components/ModalWindow";
import LoadingPage from "./img/animation/LoadingPage";
import LoadingBar from "./img/animation/LoadingBar";

// Sections
import CourseOverview from "./sections/CourseOverview";
import HeaderSection from "./sections/HeaderSection";
import ProsSection from "./sections/ProsSection";


import ContentTable from "./components/ContentTable";
import MobileContentTable from "./components/mobile/ContentTable";

import {getCourseInfo} from "./utils/FetchData";


class CourseInfo extends React.Component {
    constructor (props) 
	{
		super(props);

		this.notSelectedStyle = {
			borderBottom: "3px solid transparent",
			color: "#656565",
		}
		this.state = {
			curProduct: {
				price: 3000,
				name: "Nothing"
			},
			modalActive: false,
			contentUrl: null,
			loading: true,
			lessons: []
		}

		this.handleTabClick = this.handleTabClick.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	async componentDidMount()
	{
		let data = await getCourseInfo();

		setTimeout(() => {
			this.setState({
				contentUrl: "/web/theory-courses/math/lesson-1",
				loading: false,
				lessons: data.lessons
			});

		}, 2000);


	}

	handleTabClick(tabName)
	{
		this.setState({
			currentTab: tabName
		});
	}

	handleCloseModal(product)
	{
		this.setState({
			curProduct: product,
			modalActive: this.state.modalActive ^ 1
		});

	}

	render()
	{
		return (
			<>
				<LoadingBar loading={this.state.loading}/>
				{
					this.state.loading ? 
						<div className="w-full flex-row mt-12">
						<LoadingPage/>
						</div>
					:

				<div className="_next">
					{
						this.state.modalActive ?
							<ModalWindow
								onClose={this.handleCloseModal}
								product={this.state.curProduct}
							/>
						:
							null
					}

					<HeaderSection
						title="Математика"
						subtitle="профильная"
						contentUrl={this.state.contentUrl}
					/>


					<div className="flex-row mx-auto justify-between"
						style={{
							maxWidth: "1050px",
						}}
					>
						<div id="dashboard"
							className="p-5"
							style={{
								padding: "1.25em",
								maxWidth: "700px"
							}}
						>
							<CourseOverview />


							<ContentTable>
								{
									this.state.lessons.map((lesson, index) => {
										return (
											<NavLessonItem
												title={lesson.title}
												extended={false}
												indexNumber={`${index+1}.`}
												price={lesson.price}
												subLessons={lesson.subLessons}
												onPurchase={this.handleCloseModal}
											/>
										)

									})
								}
							</ContentTable>


						</div>

						<AsideCard
							onPurchase={this.handleCloseModal}
							contentUrl={this.state.contentUrl}
						/>

					</div>

					<ProsSection />

					<Footer/>

				</div>
				}
			</>

		);
	}
}

export default CourseInfo;
