
import React from 'react';


class MainPage extends React.Component {
    constructor (props) 
	{
		super(props);
		this.color = "#ff";
	}

	render()
	{
		return (
			<h1 className="mt-12" style={{textAlign: "center"}}> MainPage </h1>
		);
	}
}

export default MainPage;
