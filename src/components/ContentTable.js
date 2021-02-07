
import React from 'react';

import PcContentTable from "./CoursePage/ContentTable";
import MobileContentTable from "./mobile/ContentTable";

import {determineDevice} from "../utils/Utils";

class ContentTable extends React.Component {
    constructor (props) 
	{
		super(props);
		this.color = "#ff";

		this.state = {
			device: "pc"
		}
	}

	componentDidMount()
	{
		console.log("Content mounted")
		determineDevice(this, 400);

		// modifyDevice(window.innerWidth);
		window.addEventListener('resize', () => determineDevice(this, 400));
	}

	render()
	{
		return (

			this.state.device === "mobile" ? 
				<MobileContentTable>
					{this.props.children}
				</MobileContentTable>
			:
			<>
				<h4 className="mb-6 mt-8"
				>Содержание курса</h4>

				<PcContentTable>
					{this.props.children}
				</PcContentTable>
			</>
		);
	}
}

export default ContentTable;
