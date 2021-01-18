import React from 'react';

class Disk extends React.Component {

	render()
	{
		return (
			<svg style={this.props.style} className={this.props.className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="10" cy="10" r="9.5" stroke="#FF8935"/>
			</svg>
		);
	}
}


export default Disk;

