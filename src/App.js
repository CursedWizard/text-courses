import React from "react";
import IndexPage from "./IndexPage";
import ContentPage from "./ContentPage";
import "./media/gotham_font/stylesheet.css"
import "./styles/base_stylesheet.css"
import "./styles/button.css"

import './styles/App.css';
import {determineDevice} from "./utils/Utils";

import {
  BrowserRouter as Router,
  Switch,
  Route,
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
			currentPage: "index",
			device: "pc"
		}
		
		this.handleItemClick = this.handleItemClick.bind(this);
	}

	componentDidMount()
	{

		let setFont = () => {
			let mobile = determineDevice(this, 500);

			let e = document.getElementById("root");
			if (mobile)
			{
				e.style["font-size"] = "14px";
			}
			else
				e.style["font-size"] = "18px";

		}
		setFont();


		// modifyDevice(window.innerWidth);
		window.addEventListener('resize', () => setFont(this));
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
					<Route path="/web/theory-courses/:course/:id" exact component={ContentPage}/>
					<Route path="/web/theory-courses" component={IndexPage}/>
				</Switch>
			</Router>
		);
	}
}
			/* <Page onContentPageSwitch={this.handleItemClick}/> */

/* <div className="ContainerWrapper"> */
export default App;
