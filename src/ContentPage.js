

import React from "react";
import NavPanel from"./NavPanel"

import NavLessonItem from "./components/ContentPage/NavLessonItem";
import NavLessonList from "./components/ContentPage/NavLessonList";
import EditorWrapper from "./components/EditorWrapper";

import LoadingBar from "./img/animation/LoadingBar";

import {determineDevice} from "./utils/Utils";

import {getCourseInfo} from "./utils/FetchData";

class ContentPage extends React.Component {
    constructor (props) 
	{
		super(props);
		this.state = {
			activeItem: "courses",
			loading: true,
			lessons: [],

			device: "mobile"
		}
		
		this.handleItemClick = this.handleItemClick.bind(this);
	}

	async componentDidMount()
	{

		determineDevice(this, 400);

		window.addEventListener('resize', () => determineDevice(this, 400));
		let data = await getCourseInfo();

		setTimeout(() => {
			this.setState({
				loading: false,
				lessons: data.lessons
			});

		}, 1000);

	}
	handleItemClick(itemName)
	{
		console.log("Item chosen:")
		console.log(itemName)
		this.setState({
			activeItem: itemName
		});
	}

	render()
	{
		return (

			<>
				<LoadingBar loading={this.state.loading}/>
				{
					this.state.loading ? 
						null
						:
							<NavPanel 
								activeItem={this.state.activeItem} 
								navigation={
									this.state.lessons.map((lesson, index) => {
										return (
											<NavLessonItem
												title={lesson.title}
												extended={false}
												indexNumber={`${index+1}.`}
												price={lesson.price}
												subLessons={lesson.subLessons}
												onPurchaseUrl={"/web/theory-courses/math"}
											/>
										)

									})
								}
							>

								<div className="content-base mt-12 mx-auto">
									<EditorWrapper/>
								</div>

							</NavPanel>
				}
			</>
		);
	}
}

/* <div className="ContainerWrapper"> */
export default ContentPage;
