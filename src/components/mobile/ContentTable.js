
import React from 'react';
import NavLessonList from "../NavLessonList";

class MobileContentTable extends React.Component {
    constructor (props) 
	{
		super(props);
		this.color = "#ff";
	}

	render()
	{
		return (
				<div 
					style={{
						marginLeft: "-1.25em",
						marginRight: ".50em",

					}}
				>

					<div className="mt-1 ml-0 category-list"
						style={{
							marginTop: "1.25rem",
							// marginRight: "1rem",
							maxWidth: "850px"
						}}
					>
						{this.props.children.map((child, index) => {
							return (
								<div>
									<hr style={{
										// backgroundColor: "#F3F3F3",
										borderTop: "1px solid #EFEFEF",
										marginTop: "0px",
										marginBottom: "0px",
										marginRight: "0px",
										marginLeft: "0px",

									}}/>
									
									{child}

								</div>
							)
						})}
					</div>


				</div>
		);
	}
}

export default MobileContentTable;
