
import PropTypes from 'prop-types';
import React from 'react';
import EditorJs from "react-editor-js";

import { EDITOR_JS_TOOLS } from "./Constants";

class EditorWrapper extends React.Component {
    constructor (props) 
	{
		super(props);
		this.state = {
			selected: false,
			text: "Some stuff",
			clicked: false
		}

		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick()
	{
		this.setState({
			clicked: this.state.clicked ^ true
		})

		console.log("Clicked " + this.state.clicked)
	}

	render() 
	{
		return (
			<EditorJs
				tools={EDITOR_JS_TOOLS}
				data={{
					time: 1556098174501,
					blocks: [
						{
							type: "header",
							data: {
								text: "Юридическая ответственность и её виды",
								level: 2
							}
						},
						{
							type: "paragraph",
							data: {
								text:
								"Юридическая ответственность — это применение мер государственного принуждения к нарушителю за совершение противоправного деяния."
							}
						},
						{
							type: "header",
							data: {
								text: "Особенности юридической ответственности:",
								level: 4
							}
						},
						{
							type: "list",
							data: {
								style: "unordered",
								items: [
									"Устанавливается за нарушение правовых требований, а не за их выполнение.",
									"Всегда оценивает прошлое: это ответственность за действие (бездействие), которое уже имело место, произошло."
								]
							}
						},
						{
							type: "paragraph",
							data: {
								text:
								'Юридическая ответственность не сводится к государственному принуждению, а возникает после установления факта правонарушения, который является основанием её возникновения.'
							}
						},
						{
							type: "header",
							data: {
								text: "Цели юридической ответственности:",
								level: 4
							}
						},
						{
							type: "list",
							data: {
								style: "unordered",
								items: [
									"создание упорядоченного состояния общественных отношений;",
									"снижение уровня правонарушений;",
									"воспитание активной гражданской позиции, формирование уважительного отношения к закону и вытеснение из сознания граждан правового нигилизма;"
								]
							}
						},
						{
							type: "delimiter",
							data: {}
						},
						{
							type: "paragraph",
							data: {
								text:
								"Привет 👋 "
							}
						},
					],
					version: "2.12.4"
				}}
			/>
		);
  }

}

export default EditorWrapper;

