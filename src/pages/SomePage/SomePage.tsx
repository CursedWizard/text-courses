
import * as React from "react";
import { Container } from './SomePage.styled.js';
import TestPage from "../TestPage/TestPage"

interface Props {
	/**
	* description
	*/
	prop_1?: number;

	/*
	* description
	*/
	prop_2: string;
};

interface State {
	val_1?: number;
	val_2?: string;
};

class SomePage extends React.Component<Props, State> {
	state = {
		val_1: this.props.prop_1 || 0,
		val_2: this.props.prop_2 || ""
	};

	value: number = 0;

	handleClick() {
		
	}

	render() {
		return (
			<Container>
				Hello!
			</Container>
		);
	}
}

export default SomePage;

