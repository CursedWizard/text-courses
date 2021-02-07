
import * as React from "react";
import { Container } from './TestPage.styled.js';

interface Props {
	/**
	* description
	*/
	prop_1?: number;


    mode?: 'red' | 'gradient' | 'grey';
	/*
	* description
	*/
	prop_2?: string;

	onClick: () => void;
};

interface State {
	val_1?: number;
	val_2?: string;
};

class TestPage extends React.Component<Props, State> {
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

export default TestPage;

