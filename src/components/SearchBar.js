
import React from 'react';
import '../styles/search.css';


class SearchBar extends React.Component {
    constructor (props) 
	{
		super(props);
		this.color = "#ff";
	}

	render()
	{
		return (
			<form className="search-bar">
				<input className="input-bar" placeholder="Поиск" type="search"
					value=""/>
			</form>
		);
	}
}

export default SearchBar;
