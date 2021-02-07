
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
		<div className="nav-item-list"
			style={{
				display: "none"
			}}
		>
			<StudentCard/>
			<div className="flex-column mt-4">
				{this.props.children}
			</div>

		</div>
		);
	}
}

NavItem.propTypes = {
	navItem: NavItem
};

export default NavItemList;
