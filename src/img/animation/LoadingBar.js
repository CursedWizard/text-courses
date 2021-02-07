
import React from 'react';
import "./loading_bar.css"

class LoadingCard extends React.Component {

	render()
	{
		let loading = this.props.loading ? true : false;

		return (
			loading ? 
				<div
					style={this.props.style}
					class="loader-line"/>
			:
			null
		);
	}
}

export default LoadingCard;

