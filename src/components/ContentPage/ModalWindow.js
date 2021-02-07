
import React from 'react';
// Icons
// TODO: put them in props and send from CourseInfo

import styled from "styled-components";
import {tailwind} from '../../styles/tailwind';

import ArrowRight from "../../img/ArrowBack";
import Close from "../../img/Close_2";

import {
  Link
} from "react-router-dom";


const ModalWrapper = styled.div`

	position: relative;
	background-color: rgb(255, 255, 255);
	height: 100%;
	overflow-y: auto;
	display: flex;

	transform: translateX(-300px);
	transition: all 0.3s ease-in-out;
	max-width: 300px;

	box-shadow: 0 0.35rem 1.125rem rgba(0,0,0,.15);
}
`;

const ModalOverlay = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
	right: 0;
    content: ' ';
	background-color: rgba(0, 0, 0, 0.4);
	background-size: contain;
	z-index: 1000;
`

const ClickBlocker = styled.div`

    position: fixed;
    top: 0;
    left: 300px;
    bottom: 0;
	right: 0;
    content: ' ';
	background-size: contain;
	z-index: 1001;

`

const HeaderWrapper = styled.div`

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: -1.5em;
	margin-right: -1.5em;
	margin-left: -1.5em;

	margin-bottom: 1em;
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0 1 300px;
	overflow: hidden;
	padding: 1.5em 1.5em 0px;
`;

const BackButton = styled.button`

display: flex;
justify-content: start;
margin: 0.25em;

	border-radius: 999px;
`

const ListObject = styled.div`
	width: 100%;
	margin-bottom: 1em;


	&.title {
		color: rgb(0, 0, 0);
		transition: all 0.2s ease 0s;
		cursor: pointer;
	}

	&.title:hover {
		color: rgba(255, 138, 55, 0.9);
		transition: all 0.2s ease 0s;
		cursor: pointer;
	}
`


class ModalWindow extends React.Component {
    constructor (props) 
	{
		super(props);
		this.state = {
			selected: false,
			text: "Some stuff",
			cardWidth: "300px",
			transformCard: "translateX(-300px)",

			balance: 3000
		}

		this.handleClose = this.handleClose.bind(this);
	}

	componentDidMount()
	{

		let func = () => {
			this.setState({
				transformCard: "translateX(0px)"
			});

		}
		setTimeout(() => {
			func();
		}, 10)

	}


	handleClose()
	{
		this.setState({
			transformCard: "translateX(-300px)"
		});

		let func = () => this.props.onClose();
		setTimeout(() => {
			func();
		}, 300)
	}

	render()
	{
		return ( 
			<>
				<ModalOverlay/>

				<ClickBlocker
					onClick={this.handleClose}
				/>


				<div className="modal-overlay-left"
				>
					<ModalWrapper
						style={{
							transform: this.state.transformCard
							// borderRadius: "12px"
						}}	
					>

						<Container>
							<HeaderWrapper>
								<div style={tailwind("flex justify-start items-center")}>
									<Link
										to="/web/theory-courses">

										<BackButton>
											<ArrowRight className="my-auto"/>
										</BackButton>

									</Link>
									<p style={{fontWeight: "600"}}>Вернуться к каталогу</p>
								</div>

								<div style={tailwind('my-auto')}>
									<BackButton
										onClick={this.handleClose}
									>
										<Close
											style={{
												overflow: "hidden",
											}}
										/>
									</BackButton>
								</div>
							</HeaderWrapper>


							<Link to="/web/theory-courses/math">
								<ListObject className="title">
									<h3>Математика</h3>
								</ListObject>
							</Link>

							<ListObject>
								<div className="flex h-full "
								>
									<p className=""
									>18% выполнено</p>
								</div>

								<div className="progress">
									<div 
										style={{width: "18%"}}
										className="progress-bar"
									/>
								</div>
							</ListObject>

							<div className="category-list mt-2">
								{this.props.children}
							</div>

						</Container>

					</ModalWrapper>
				</div>
			</>

		);
	}
}


export default ModalWindow;

