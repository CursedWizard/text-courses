

import React from "react";
import NavPanel from"./NavPanel"

import NavLessonItem from "./components/NavLessonItem";
import NavLessonList from "./components/NavLessonList";
import EditorWrapper from "./components/EditorWrapper";

class ContentPage extends React.Component {
    constructor (props) 
	{
		super(props);
		this.state = {
			activeItem: "courses"
		}
		
		this.handleItemClick = this.handleItemClick.bind(this);
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
			<NavPanel 
				activeItem={this.state.activeItem} 
				webgl={false}
				navigation={
					<NavLessonList
						onContentPageSwitch={this.props.onContentPageSwitch}
					>
						<NavLessonItem
							title="Текстовые задачи"
							extended={true}
							indexNumber={"1."}
						/>

						<NavLessonItem
							title="Графики и диаграммы"
							extended={false}
							indexNumber={"2."}
						/>

						<NavLessonItem
							title="Начала теории вероятностей"
							extended={false}
							indexNumber={"3."}
						/>

						<NavLessonItem
							title="Производная и первообразная"
							extended={false}
							indexNumber={"4."}
						/>

						<NavLessonItem
							title="Планиметрия"
							extended={false}
							indexNumber={"5."}
						/>
					</NavLessonList>
				}
			>
			<div className="content-base mt-12 mx-auto">
				<EditorWrapper/>
			</div>

			</NavPanel>
		);
	}
}

/* <div className="ContainerWrapper"> */
export default ContentPage;
