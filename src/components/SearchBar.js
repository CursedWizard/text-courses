
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

<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.92742C0 3.31537 2.88025 0.387207 6.4332 0.387207C8.13945 0.387207 9.77573 1.07627 10.9822 2.30279C12.1887 3.52933 12.8665 5.19286 12.8665 6.92742C12.8665 10.5395 9.98617 13.4677 6.4332 13.4677C2.88025 13.4677 0 10.5395 0 6.92742ZM12.76 12.1962L14.676 13.7517H14.7093C15.0969 14.1458 15.0969 14.7847 14.7093 15.1788C14.3216 15.5729 13.6932 15.5729 13.3055 15.1788L11.7155 13.346C11.5652 13.1936 11.4807 12.9868 11.4807 12.7711C11.4807 12.5553 11.5652 12.3485 11.7155 12.1962C12.0054 11.9066 12.4701 11.9066 12.76 12.1962Z" fill="#DDDDDD"/>
</svg>
				<input className="input-bar ml-4" placeholder="Поиск" type="search"
					value=""/>
			</form>
		);
	}
}

export default SearchBar;
