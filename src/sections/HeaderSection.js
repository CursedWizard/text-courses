import React from 'react';
import PropTypes from 'prop-types';


import styled from "styled-components";
import {determineDevice} from "../utils/Utils";


const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3em;
  padding-left: 1.25em;
  padding-right: 1.25em;

	background-color: rgba(122, 74, 224, 0.76);
	padding-top: 1em;
	padding-bottom: 1.5em;


  @media (max-width: 700px) {
  	

  }
`;

const TitleWrapperH1 = styled.h1`
	color: white;
	font-weight: 700;

@media (min-width: 700px) {
	margin-left: auto;
	margin-right: auto;
}
`

const TitleWrapperH2 = styled.h2`

	color: #EDEDED;
	margin-top: -1em;

	@media (min-width: 700px) {
		margin-left: auto;
		margin-right: auto;
	}
`

const Button = styled.button`
	color: white;
	font-weight: 700;
	font-size: 1.25em;

	background: linear-gradient(91.51deg, #FB5B69 9.99%, #FF8D3C 94.44%);
	padding-left: 1.5em;
	padding-right: 1.5em;

	@media (min-width: 700px) {
		display: none;
	}

`

class HeaderSection extends React.Component {

    constructor (props) 
	{
		HeaderSection.propTypes = {
			title: PropTypes.string,
			subtitle: PropTypes.string
		};

		super(props);

		this.state = {
			device: "mobile"
		}
	}

	componentDidMount()
	{
		determineDevice(this, 720);

		// modifyDevice(window.innerWidth);
		window.addEventListener('resize', () => determineDevice(this, 720));
	}

	render()
	{
		return (
			<>
				<HeaderWrapper>
					<TitleWrapperH1>
						{this.props.title}
					</TitleWrapperH1>

					<TitleWrapperH2>
						{this.props.subtitle}
					</TitleWrapperH2>

					<div>
					<Button
					>
						<div>Продолжить</div>
					</Button>
					</div>
				</HeaderWrapper>
			</>
		);
	}
}

export default HeaderSection;
