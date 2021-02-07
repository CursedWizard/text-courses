

import React from 'react';
// import "../styles/nav_style.css";

import {determineDevice} from "../../utils/Utils";
import ModalWindow from "../NavLessonList";
import SidePanel from "./SidePanel";

class NavLessonList extends React.Component {
    constructor (props) 
	{
		super(props);

		this.state= {
			courseUrl: "",
			device: "pc"
		}
	}

	componentDidMount()
	{

		determineDevice(this, 700);

		window.addEventListener('resize', () => determineDevice(this, 700));

		let url_now = window.location.href;

		let beginUrl = url_now.indexOf("/web");
		// console.log(url_now.substr(beginUrl, url_now.length))
		
		for (let i = url_now.length-1; i > 0; i--)
		{
			if (url_now[i] === "/")
			{
				this.setState({
					courseUrl: url_now.substring(beginUrl, i)
				})
				break;
			}
		}
	}

	render()
	{
		return (
			this.state.device === "mobile" ?
				<ModalWindow>
					{this.props.children}
				</ModalWindow>
			:
				<SidePanel>
					{this.props.children}
				</SidePanel>

		);
	}
}


export default NavLessonList;
