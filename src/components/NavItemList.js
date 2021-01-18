
import PropTypes from 'prop-types';
import React from 'react';
// import "../styles/nav_style.css";
import NavItem from "./NavItem";
import StudentCard from "./StudentCard";

class NavItemList extends React.Component {
    // constructor (props) 
	// {
		// super(props);
	// }

	render()
	{
		return (
		<div className="nav-item-list">
			<StudentCard/>
			{this.props.children}

		</div>
		);
	}
}

NavItem.propTypes = {
	navItem: NavItem
};

export default NavItemList;
