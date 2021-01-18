
import PropTypes from 'prop-types';
import React from 'react';
import WebGlCanvas from "./webgl/WebGlCanvas"
import Button from "./components/Button"
import NavItemList from "./components/NavItemList"
import MenuBurger from "./img/MenuBurger";
import "./styles/nav_style.css"

import MainPage from "./MainPage"
import CoursesPage from "./CoursesPage"
import CourseInfo from "./CourseInfo"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class NavPanel extends React.Component {
    constructor (props) 
	{
		super(props);
		this.navItemList = [];

		this.state = {
			selectedItem: null,
			activePage: null,
			title: "",
			showNavPanel: 1
		}

		this.setPageInfo = this.setPageInfo.bind(this);
		this.handleNavPanelSwitch = this.handleNavPanelSwitch.bind(this);
	}


	componentDidMount()
	{
		this.navItemList = React.Children.toArray(
					this.props.navigation.props.children).map(
					function(child) {
						return child.props.itemName
					});

		this.setPageInfo();
	}

	setPageInfo()
	{
		for (let i = 0; i < this.navItemList.length; i++)
		{
			if (this.navItemList[i] === this.props.activeItem)
			{
				let title = "";
				if (this.props.activeItem === "courses")
					title = "Каталог курсов";
				if (this.props.activeItem === "main")
					title = "Главная";

				this.setState({
					activePage: this.props.children[i],
					title: title
				});
				break;
			}
		}

	}

	handleNavPanelSwitch()
	{
		this.setState({
			showNavPanel: this.state.showNavPanel ^ 1
		});

	}

	componentDidUpdate(prevProps)
	{
		if (prevProps.activeItem !== this.props.activeItem)
		{
			this.setPageInfo();
		}
	}

	render()
	{

		return (
			<>
				{/* <div className="shadow-simulation"/> */}
			<div className="main-page">
				<div className={this.state.showNavPanel === 0 ? "dis-off" : ""}>
					{this.props.navigation}
				</div>

				<div className={`${this.state.showNavPanel === 0 ? "ml-0" : "ml-300"} content-page`}>

					<header className="top-navigation p-1">

						<button className="ml-1"
							onClick={this.handleNavPanelSwitch}
						>
							<MenuBurger className="w-6 h-6 col-grey"/>
						</button>

						<img
							className="ml-2"
							src={"https://exode.ru/img/icon-square-256.png"}
							width="30" height="30" alt=""/>
						<a href="https://exode.ru/" className="col-blue ml-1">exode</a>
					</header>

					{this.props.children}

				</div>

			</div>
			</>

		);
	}
}

NavPanel.propTypes = {
	navigation: NavItemList,
	activeItem: PropTypes.string
};

export default NavPanel;
