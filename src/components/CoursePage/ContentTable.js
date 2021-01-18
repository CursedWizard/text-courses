
import React from 'react';
import NavLessonList from "../NavLessonList";

class ContentTable extends React.Component {
    constructor (props) 
	{
		super(props);
		this.color = "#ff";
	}

	render()
	{
		return (
				<div 
					style={this.props.style}
				>

					<div className="mt-1 ml-4 category-list"
						style={{
							marginTop: "1.25rem",
							marginLeft: "0.75rem",
							marginRight: "1rem",
							maxWidth: "850px"
						}}
					>
						{this.props.children}
					</div>


				</div>
		);
	}
}

export default ContentTable;
