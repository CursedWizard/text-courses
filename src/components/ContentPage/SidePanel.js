
import PropTypes from 'prop-types';
import React from 'react';
import { ReactSVG } from 'react-svg'
// import "../styles/nav_style.css";

import ArrowRight from "../../img/ArrowBack";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class NavLessonList extends React.Component {
    constructor (props) 
	{
		super(props);

		this.state= {
			courseUrl: ""
		}
	}

	componentDidMount()
	{
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
		<div className="collection-sidebar">

			<div className="-m-6 text-base font-semibold mb-4"
			>
				<Link
					to="/web/theory-courses">
					<button 
						className="justify-start w-full p-1 h-12"
						style={{
							height: "57px",
							paddingLeft: "24px",
							borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
						}}
					>
						<ArrowRight className="icon-left svg-back my-auto"/>
						<p style={{fontWeight: "600"}}>Вернуться к каталогу</p>
					</button>
				</Link>

			</div>

				<Link to={this.state.courseUrl}>

					<div className="category-title mb-5 mt-0">
						<h3>Математика</h3>
					</div>
				</Link>

			<div className="w-full mb-5">
				<div className="flex h-full "
				>
					<p>18% выполнено</p>
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


export default NavLessonList;
