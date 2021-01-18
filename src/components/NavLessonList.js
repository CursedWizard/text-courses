

import PropTypes from 'prop-types';
import React from 'react';
import { ReactSVG } from 'react-svg'
// import "../styles/nav_style.css";
import NavItem from "./NavItem";
import StudentCard from "./StudentCard";
import ArrowRight from "../img/ArrowBack";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class NavLessonList extends React.Component {
    // constructor (props) 
	// {
		// super(props);
	// }

	render()
	{
		return (
		<div className="collection-sidebar">

			<div className="-m-6 text-base font-semibold mb-4"
			>
				<Link to="/index/catalog">
					<button 
						className="justify-start w-full p-1 h-12"
						style={{
							height: "57px",
							paddingLeft: "24px",
							borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
						}}
					>
						<ArrowRight className="icon-left svg-back my-auto"/>
						Вернуться к каталогу
					</button>
				</Link>

			</div>

			<div className="category-title mb-5 mt-1">
				<h4 >Математика</h4>
			</div>

			<div className="w-full mb-5">
				<div className="flex h-full "
				>
					<span>18% выполнено</span>
				</div>
				
				<div className="progress">
					<div 
						style={{width: "18%"}}
						className="progress-bar"
					/>
				</div>
			</div>

			<div className="category-list mt-4">
				{this.props.children}
			</div>

		</div>
		);
	}
}

NavItem.propTypes = {
	navItem: NavItem
};

export default NavLessonList;
