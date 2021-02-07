

import React from 'react';
// import "../styles/nav_style.css";
import NavItem from "./NavItem";
import ArrowRight from "../img/ArrowBack";

import {tailwind} from '../styles/tailwind';

import Close from "../img/Close_2";

import styled from "styled-components";
import {
  Link
} from "react-router-dom";

const HeaderWrapper = styled.div`

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: -1.5em;
	margin-right: -1.5em;
	margin-left: -1.5em;

	margin-bottom: 1em;
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0 1 300px;
	overflow: hidden;
	padding: 1.5em 1.5em 0px;
`;

const BackButton = styled.button`

display: flex;
justify-content: start;
margin: 0.25em;

	border-radius: 999px;
`

const ListObject = styled.div`
	width: 100%;
	margin-bottom: 1em;


	&.title {
		color: rgb(0, 0, 0);
		transition: all 0.2s ease 0s;
		cursor: pointer;
	}

	&.title:hover {
		color: rgba(255, 138, 55, 0.9);
		transition: all 0.2s ease 0s;
		cursor: pointer;
	}
`


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
			<Container>

				<HeaderWrapper>
					<div style={tailwind("flex justify-start items-center")}>
						<Link
							to="/web/theory-courses">

							<BackButton>
								<ArrowRight className="my-auto"/>
							</BackButton>

						</Link>
						<p style={{fontWeight: "600"}}>Вернуться к каталогу</p>
					</div>

					<div style={tailwind('my-auto')}>
					<BackButton>
						<Close
							style={{
								overflow: "hidden",
							}}
						/>
					</BackButton>
					</div>
				</HeaderWrapper>


				<Link to={this.state.courseUrl}>
					<ListObject className="title">
						<h3>Математика</h3>
					</ListObject>
				</Link>

				<ListObject>
					<div className="flex h-full "
					>
						<p className=""
							>18% выполнено</p>
					</div>

					<div className="progress">
						<div 
							style={{width: "18%"}}
							className="progress-bar"
						/>
					</div>
				</ListObject>

				<div className="category-list mt-2">
					{this.props.children}
				</div>

		</Container>
		);
	}
}

NavItem.propTypes = {
	navItem: NavItem
};

export default NavLessonList;
