
import PropTypes from 'prop-types';
import React from 'react';

class Lesson extends React.Component {
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
			<svg style={this.props.style} width="23" height="29" viewBox="0 0 23 29" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M20.125 0H2.875C1.29375 0 0 1.29375 0 2.875V25.875C0 27.4562 1.29375 28.75 2.875 28.75H20.125C21.7062 28.75 23 27.4562 23 25.875V2.875C23 1.29375 21.7062 0 20.125 0ZM7.1875 2.875H10.0625V10.0625L8.625 8.98438L7.1875 10.0625V2.875ZM2.875 25.875H20.125V2.875H12.9375V15.8125L8.625 12.5781L4.3125 15.8125V2.875H2.875V25.875Z" fill="#FF8D3C"/>
			</svg>
		);
	}
}


export default Lesson;

