import React from "react";
import IndexPage from "./IndexPage";
import ContentPage from "./ContentPage";
import "./media/gotham_font/stylesheet.css"
import "./styles/base_stylesheet.css"

import './styles/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
    constructor (props) 
	{
		super(props);
		this.state = {
			activeItem: "courses",
			/*
			 * content  - страница с курсом
			 * index - страница с каталогом курсов
			*/
			currentPage: "index"
		}
		
		this.handleItemClick = this.handleItemClick.bind(this);
	}

	handleItemClick(pageName)
	{
		this.setState({
			currentPage: pageName
		});
	}

	render()
	{

		return (
			<Router>
				<Switch>
					<Route path="/index" component={IndexPage}/>
					<Route path="/content" component={ContentPage}/>
				</Switch>
			</Router>
		);
	}
}
			/* <Page onContentPageSwitch={this.handleItemClick}/> */

/* <div className="ContainerWrapper"> */
export default App;
