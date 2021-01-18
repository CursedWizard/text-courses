import React from 'react';

class ArrowBack extends React.Component {

	render()
	{
		return (
			<svg style={this.props.style} className={this.props.className}
				width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z" fill={"#B0B0B7"}></path>
			</svg>
		);
	}
}

export default ArrowBack;

