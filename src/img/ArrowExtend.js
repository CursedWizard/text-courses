import PropTypes from 'prop-types';
import React from 'react';
// import "../styles/nav_style.css"
//

class ArrowExtend extends React.Component {
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
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={this.props.style} className={this.props.className}
				viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
				stroke-linecap="round" stroke-linejoin="round">
				<polyline points="18 15 12 9 6 15"></polyline>
			</svg>
		);
	}
}


export default ArrowExtend;

