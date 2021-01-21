
import React from 'react';
import SvgBackground from "../img/SvgBackground_1";
import Close from "../img/Close";

class ModalWindow extends React.Component {
    constructor (props) 
	{
		super(props);
		this.state = {
			selected: false,
			text: "Some stuff"
		}

	}

	render()
	{
		return (
					<div className="modal-overlay">
						<div className="modal-window"
						style={{
							borderRadius: "12px"
						}}	
						>

							
							<div className="p-2 w-full flex-row items-center ml-1 mr-1">

								<button>
									<Close
										style={{
											width: "16px",
											height: "16px"
										}}
									/>
								</button>

								<div
									className="pl-auto mx-auto"
									style={{
										marginBottom: "0px",
										fontWeight: "700",
										fontSize: "1.4rem"
									}}
								>Подтверждение платежа</div>

							</div>

							<hr 
								style={{
									color: "#C8C8C8",
									marginTop: "0px",
									marginBottom: "0px",
								}}
							/>
							<div className="pl-8 pr-8 flex-column">
								
							<div className="mt-4">
								<button 
									className="button mx-auto w-full flex-column"
								>

									<h1
										className="ml-auto mr-auto mb-0"
										style={{
											color: "white",
											fontWeight: "700",
											fontSize: "1.45rem"
										}}
									>3000 ex.</h1>
									<h5
										className="ml-auto mr-auto"
										style={{
											color: "white",
											fontWeight: "700",
											fontSize: "1.35rem"
										}}
									>Пополнить баланс</h5>
								</button>
							</div>

								<h1
									className="mt-4"
									style={{
										fontWeight: "700",
										fontSize: "1.25rem"
									}}
								>Вы покупаете:</h1>

								<div className="grey-back flex-column justify-start p-4"
									style={{
										borderRadius: "16px",
										paddingLeft: "1.5rem",
										paddingRight: "1.5rem",
										fontFamily: "Nunito"
									}}
								>

									<div className="flex-row"
										style={{
											fontWeight: "700",
											color: "#7A4AE0"
										}}
									>
										курс Математика (профильная)
									</div>

									<div className="mt-2">
										Полный курс, включающий в себя доступ ко всем 8 платным уроками.
									</div>

									<div className="flex-row justify-between mt-4">
										<div>Всего:</div>
										<div
											style={{
												color: "#FF7C57"
											}}
										>1200 ex.</div>
									</div>

								</div>

								<h1
									className="mt-4"
									style={{
										fontWeight: "700",
										fontSize: "1.25rem"
									}}
								>Итого:</h1>

								<div className="grey-back flex-column justify-start p-4"
									style={{
										borderRadius: "16px",
										paddingLeft: "1.5rem",
										paddingRight: "1.5rem",
										fontFamily: "Nunito"
									}}
								>


									<div className="flex-row justify-between">
										<div>Цена:</div>
										<div
											style={{
												color: "#FF7C57"
											}}
										>1200 ex.</div>
									</div>

									<div className="flex-row justify-between mt-3">
										<div>До покупки:</div>
										<div
											style={{
												color: "#FF7C57"
											}}
										>3000 ex.</div>
									</div>

									<div className="flex-row justify-between mt-3">
										<div>После покупки:</div>
										<div
											style={{
												color: "#FF7C57"
											}}
										>1800 ex.</div>
									</div>



								</div>
						</div>


						</div>
					</div>

		);
	}
}


export default ModalWindow;

