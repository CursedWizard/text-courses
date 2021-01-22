
import React from 'react';
import SvgBackground from "../img/SvgBackground_1";
import Close from "../img/Close";
import ExodeAuthor from "./ExodeAuthor";

// Icons
// TODO: put them in props and send from CourseInfo
import MathIcon from "../img/lessons-orange/Math";

class ModalWindow extends React.Component {
    constructor (props) 
	{
		super(props);
		this.state = {
			selected: false,
			text: "Some stuff",
			cardWidth: "435px",
			transformCard: "translateX(435px)"
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
						<div className="modal-window floating"
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
							



							<div className="pl-8 pr-8 flex-column">

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
									>3000 ex.</h1>
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
											width: "42px",
											height: "42px"
										}}/>
										<h5
											className="ml-2 mt-0 mb-1"
										>курс Математика (проф.)</h5>
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
										>1200 ex.</div>
									</div>

								</div>

								<button className="button mb-4 w-full mt-3" >
									<span className="my-auto"
										style={{fontWeight: "600"}}
									>Оплатить 1200 ex.</span>
								</button>

								</div>



						</div>


						</div>
					</div>
					</>

		);
	}
}


export default ModalWindow;

