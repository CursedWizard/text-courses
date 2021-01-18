
import "./media/gotham_font/stylesheet.css"
import React from 'react';
import MainPage from "./MainPage"
import CoursesPage from "./CoursesPage"
import NavPanel from"./NavPanel"

import NavItemList from "./components/NavItemList"
import NavItem from "./components/NavItem"

import MainIcon from "./img/nav_icons/Home";
import CoursesIcon from "./img/nav_icons/Catalog";
import QAnswIcon from "./img/nav_icons/Chat";
import TournIcon from "./img/nav_icons/Play";
import LibIcon from "./img/nav_icons/Folder";
import WalletIcon from "./img/nav_icons/Wallet";

import CourseInfo from "./CourseInfo"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class IndexPage extends React.Component {
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
				webgl={true}
				navigation={
					<NavItemList>
						<NavItem 
							text="Главная"
							itemName="main"
							selected={this.state.activeItem === "main"}
							onClick={this.handleItemClick}
							icon={MainIcon}
							link="/index/main"
						/>

						<NavItem 
							text="Курсы"
							itemName="courses"
							selected={this.state.activeItem === "courses"}
							onClick={this.handleItemClick}
							icon={CoursesIcon}
							link="/index/catalog"
						/>

						<NavItem 
							text="Course Info"
							itemName="course_info"
							selected={this.state.activeItem === "course_info"}
							onClick={this.handleItemClick}
							icon={CoursesIcon}
							invincible={true}
							link="/index/info"
						/>

						<NavItem 
							text="Лента ответов"
							itemName="q_answ"
							selected={this.state.activeItem === "q_answ"}
							onClick={this.handleItemClick}
							icon={QAnswIcon}
						/>

						<NavItem 
							text="Турниры"
							itemName="tourns"
							selected={this.state.activeItem === "tourns"}
							onClick={this.handleItemClick}
							icon={TournIcon}
						/>

						<NavItem 
							text="База знаний"
							itemName="lib"
							selected={this.state.activeItem === "lib"}
							onClick={this.handleItemClick}
							icon={LibIcon}
						/>

						<NavItem 
							text="Кошелек"
							itemName="wallet"
							selected={this.state.activeItem === "wallet"}
							onClick={this.handleItemClick}
							icon={WalletIcon}
						/>
					</NavItemList>
			}>

				<div>
					<Route path="/index/main" exact component={MainPage}/>
					<Route path="/index/catalog" exact component={CoursesPage}/>
					<Route path="/index/info" component={CourseInfo}/>
				</div>

			</NavPanel>
		);
	}
}

/* <div className="ContainerWrapper"> */
export default IndexPage;
