
import React from 'react';
import {tailwind} from '../styles/tailwind';

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
				className="pt-4 pr-4"
				style={this.props.style}
			>

				<div
					className="flex-column justify-start"
					style={{
						maxWidth: "315px",
						minWidth: "220px"
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

						<h5 style={tailwind("leading-4 font-bold")} className="my-auto"
						>{this.props.title}</h5>
					</div>

					<p className="text-base">{this.props.text}</p>
				</div>

			</div>
		);
	}
}


export default InfoBlock;

