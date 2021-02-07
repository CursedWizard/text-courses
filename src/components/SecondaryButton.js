
import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';
import { ReactSVG } from 'react-svg'
import styled from "styled-components";
import {styles, SecondaryText, FlexColumn} from "../styles/baseStyle";

// import tailwind from 'tailwind-rn';
import {tailwind} from "../styles/tailwind";

const SecondaryButton = styled.div`

	background-color: #fb5b69;
	border-radius: 6px;
	color: white;


	font-size: 1rem;

	cursor: pointer;
	line-height: 1.33333;

	width: 70px;
	align-items: center;
	display: inline-flex;
	justify-content: center;
	font-weight: 700;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	  transition: all ease-in-out;

  &:hover {
	  background-color: #f84353;
	  transition: all ease-in-out;
  }
`;

export default SecondaryButton;
