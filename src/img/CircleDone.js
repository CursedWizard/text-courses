
import React from 'react';

class CircleDone extends React.Component {

	render()
	{
		return (
			<svg style={this.props.style} className={this.props.className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="10" cy="10" r="9.5" fill="#FF8935" stroke="#FF8935"/>
				<path d="M14.8536 5.19943C14.6583 4.93352 14.3417 4.93352 14.1464 5.19943L8.15614 13.3564L5.85356 10.2211C5.65831 9.95515 5.34175 9.95518 5.14645 10.2211C4.95118 10.4869 4.95118 10.918 5.14645 11.1839L7.80258 14.8007C7.99778 15.0665 8.31458 15.0664 8.50969 14.8007L14.8536 6.16229C15.0488 5.89641 15.0488 5.46533 14.8536 5.19943Z" fill="white"/>
			</svg>
		);
	}
}


export default CircleDone;

