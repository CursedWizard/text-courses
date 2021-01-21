
import React from 'react';

class InfoBlock extends React.Component {
    constructor (props) 
	{
		super(props);
		this.state = {
			selected: false,
			text: "Some stuff"
		}

	}

	render()
	{
		return (

			<div
				className="p-4"
				style={this.props.style}
			>

				<div
					className="flex-column justify-start"
					style={{
						width: "360px"
					}}
				>

					<div className="flex-row justify-start items-center mb-1"
					>
						<this.props.icon
							style={{
								width: "32px",
								height: "32px"
							}}
							className="mr-3"/>

						<h4 style={{fontSize: "1.25rem"}} className="mb-0 my-auto"
						>{this.props.title}</h4>
					</div>

					<p className="text-base">{this.props.text}</p>
				</div>

			</div>
		);
	}
}


export default InfoBlock;

