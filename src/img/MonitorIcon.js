import React from 'react';

class Disk extends React.Component {

	render()
	{
		return (
			<svg style={this.props.style} className={this.props.className} width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="68" height="68" rx="34" fill="#FF8D3C"/>
				<path d="M52.091 17H16.9091C14.7493 17 13 18.7494 13 20.9091V44.3637C13 46.5234 14.7493 48.2728 16.9091 48.2728H30.5909V52.1819H26.6818V56.091H42.3182V52.1818H38.4091V48.2727H52.0909C54.2506 48.2727 56 46.5234 56 44.3636V20.9091C56 18.7494 54.2507 17 52.091 17ZM52.091 44.3637H16.9091V20.9091H52.091V44.3637Z" fill="white"/>
			</svg>
		);
	}
}


export default Disk;

