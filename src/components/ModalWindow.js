
import React from 'react';
import Close from "../img/Close";
import ExodeAuthor from "./ExodeAuthor";

// Icons
// TODO: put them in props and send from CourseInfo
import MathIcon from "../img/lessons-orange/Math";

import styled from "styled-components";
import {tailwind} from '../styles/tailwind';

const ModalWrapper = styled.div`
	box-shadow: 0 0.35rem 1.125rem rgba(0,0,0,.35);
	width: 435px;
	position: relative;
	background-color: rgb(255, 255, 255);
	height: 100%;
	overflow-y: auto;

	transform: translateX(435px);
	transition: all 0.4s ease-in-out;

	box-shadow: 0 0.35rem 1.125rem rgba(0,0,0,.15);
}
`;


class ModalWindow extends React.Component {
    constructor (props) 
	{
		super(props);
		this.state = {
			selected: false,
			text: "Some stuff",
			cardWidth: "435px",
			transformCard: "translateX(435px)",

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
			transformCard: "translateX(435px)"
		});

		let func = () => this.props.onClose();
		setTimeout(() => {
			func();
		}, 400)
	}

	render()
	{
		return ( 

			<>


				<div class="blocker" 
				>
				</div>

				<div class="blocker-2" 
					onClick={this.handleClose}
				>
				</div>

					<div className="modal-overlay"
					>
						<ModalWrapper
							style={{
								width: this.state.cardWidth,
								display: "flex",
								transform: this.state.transformCard
							// borderRadius: "12px"
						}}	
						>

							<div>
								<button
									onClick={this.handleClose}
										style={{
											position: "absolute",
											left: "12px",
											top: "12px"
										}}
								>
									<Close
										style={{
											position: "sticky",
											overflow: "hidden",
											width: "16px",
											height: "16px",
										}}
									/>
								</button>


								<div className="grey-back flex-column items-center mt-0">
									<ExodeAuthor 
										className="mt-8"
										textStyle={{
											marginTop: "2px",
											fontFamily: "Nunito",
											fontWeight: "600",
											fontSize: "24px",
											color: "#4B82D4"
										}}

									/>
									<h4
										className="mb-8"
										style={{
											marginTop: "6px",
											fontFamily: "Nunito",
											fontWeight: "700",
											fontSize: "24px",
											color: "#6b6a78"
										}}
									>Почти готово...</h4>
								</div>
							



							<div style={tailwind("pl-4 pr-4 flex flex-col")}>

								<div className="flex-row justify-between mt-4">

								<h1
									className="mt-0"
									style={{
										fontWeight: "700",
										fontSize: "1.25rem"
									}}
								>Ваш баланс:</h1>
									<h1
										className="mt-0"
										style={{
											color: "#FB5B69",
											fontSize: "1.25rem"
										}}
									>{this.state.balance} ex.</h1>
								</div>
								
								<button className="button-borders mb-4 w-full mt-1" >
									<span className="my-auto"
										style={{fontWeight: "600"}}
									>Пополнить баланс</span>
								</button>

								<h1
									className="mt-2"
									style={{
										fontWeight: "700",
										fontSize: "1.25rem"
									}}
								>Вы приобретаете:</h1>

								<div className="grey-back flex-column justify-start p-4"
									style={{
										borderRadius: "16px",
										paddingLeft: "1.5rem",
										paddingRight: "1.5rem",
										fontFamily: "Nunito"
									}}
								>

									<div className="flex-row items-center mt-0"
										style={{
											fontWeight: "700"
										}}
									>

										<MathIcon style={{
											width: "64px",
											height: "64px"
										}}/>

										<div style={tailwind("flex flex-col ml-4")}>

											<h6
												style={tailwind("leading-4 text-gray-400 my-1")}
											>{"урок"}</h6>
											<h5
												style={tailwind("leading-4 my-0")}
											>{this.props.product.name}</h5>
										</div>

									</div>

									<div className="mt-2 text-base">
										Полный курс, включающий в себя доступ ко всем 8 платным уроками.
									</div>

									<div className="flex-row justify-between mt-6">
										<div
											style={{
												fontWeight: "700",
											}}
										>Всего:</div>
										<div
											style={{
												fontWeight: "700",
												color: "#FB5B69",
											}}
										>{this.props.product.price} ex.</div>
									</div>

								</div>

								<button className="button mb-4 w-full mt-3" >
									<span className="my-auto"
										style={{fontWeight: "600"}}
									>Оплатить {this.props.product.price} ex.</span>
								</button>

								</div>



						</div>


						</ModalWrapper>
					</div>
					</>

		);
	}
}


export default ModalWindow;

