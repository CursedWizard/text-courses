
import PropTypes from 'prop-types';
import React from 'react';
// import "../styles/nav_style.css"
//

class MenuBurger extends React.Component {
    constructor (props) 
	{
		super(props);
		this.state = {
			selected: false,
		}
	}

	render()
	{
		return (
			<svg className={this.props.className} style={this.props.style} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
				<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
			</svg>
		);
	}
}


export default MenuBurger;

