
import PropTypes from 'prop-types';
import React from 'react';

import {
  Link
} from "react-router-dom";

class NavItem extends React.Component {
    constructor (props) 
	{
		super(props);
		this.state = {
			selected: false,
			text: "Some stuff"
		}

		console.log(typeof(MainIcon));
	}

	render()
	{
		return (
			<Link to={this.props.link}
					style={this.props.invincible ? {display: "none"} : null}
					className={this.props.selected ?"nav-item-selected" : "nav-item"} 
					onClick={() => this.props.onClick(this.props.itemName)}>

				<this.props.icon className="nav-image-item ml-3"/>

				<span>{this.props.text}</span>

			</Link>
		);
	}
}

NavItem.propTypes = {
	text: PropTypes.string,
	itemName: PropTypes.string,
	selected: PropTypes.bool,
	onClick: PropTypes.func,
	icon: PropTypes.string
};

export default NavItem;

{/* <div className="test-icon"/> */}

// <img
// 	style={{marginLeft: "10px"}}
// 	className="rounded-full"

// 	width="30" height="30" alt=""/>
