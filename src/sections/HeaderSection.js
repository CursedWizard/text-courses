import React from 'react';
import PropTypes from 'prop-types';


class HeaderSection extends React.Component {

    constructor (props) 
	{
		HeaderSection.propTypes = {
			title: PropTypes.string,
			subtitle: PropTypes.string
		};

		super(props);
	}

	render()
	{
		return (
			<>
				<div className="header-content flex-column justify-center mt-12">
					<h1
						className="ml-auto mr-auto"
						style={{
							color: "white",
							marginBottom: "0px",
							fontWeight: "700",
							fontSize: "3.5rem"
						}}
					>{this.props.title}</h1>
					<h5
						className="ml-auto mr-auto"
						style={{
							fontSize: "1.8rem",
							marginTop: "-5px",
							color: "#EDEDED"
						}}
					>{this.props.subtitle}</h5>
				</div>
			</>
		);
	}
}

export default HeaderSection;
