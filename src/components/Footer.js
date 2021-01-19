
import PropTypes from 'prop-types';
import React from 'react';

import Facebook from "../img/social/Facebook";
import Twitter from "../img/social/Twitter";
import Instagram from "../img/social/Instagram";
import Vkontakte from "../img/social/Vkontakte";

class Footer extends React.Component {
    constructor (props) 
	{
		super(props);
	}

	render()
	{
		return (
			<footer>
				<div className="base-footer mx-auto">

					<div className="navigation-area">

						<div className="flex-row justify-between my-auto" >

							<div className="flex-column justify-center">
								<div 
									class="logo-area flex-row ml-1 mb-2 mx-auto"
									style={{
									}}
								>
									<img
										style={{borderRadius: "6px"}}
										src={"https://exode.ru/img/icon-square-256.png"}
										width="36" height="36" alt=""/>
									<p 
										className="col-blue ml-2"
									>exode.ru</p>
								</div>

								<div className="gradient-background flex-row items-center justify-center mx-auto pl-4 pr-4  pt-1 ">
									<a href="https://vk.com/exode_ru">
										<Vkontakte className="col-white" style={{width: "27px", height: "27px", marginRight: "2px"}}/>
									</a>
									<a href="https://twitter.com/exode_ru">
										<Twitter className="col-white" style={{width: "32px", height: "32px"}}/>
									</a>
									<a href="https://instagram.com/exode.ru">
										<Instagram className="col-white" style={{width: "32px", height: "32px"}}/>
									</a>
								</div>


							</div>
							<div className="flex-column ">
								<h4 className="mt-0 mb-3 font-bold">Команда</h4>
								<a className="base-link" href="https://exode.ru/about">О проекте</a>
								<a className="base-link" href="https://exode.ru/policy">Политика конфиденциальности</a>
								<a className="base-link" href="https://exode.ru/terms">Правила использования</a>
								<a className="base-link" href="https://t.me/yakovgellert">Стать частью команды</a>

							</div>

							<div className="flex-column">
								<h4 className="mt-0 mb-3 font-bold">Другие разделы</h4>
								<a className="base-link" href="https://exode.ru/">Главная страница</a>
								<a className="base-link" href="https://exode.ru/merch">Мерч</a>
								<a className="base-link" href="https://exode.ru/support">База знаний</a>

							</div>
						</div>
					</div>


					<div className="info-area mt-12">
						<p className="mx-auto col-grey"
							style={{textAlign: "center", fontSize: "0.65rem", textTransform: "uppercase"}}
						>
							Copyright © 2021 All Rights Reserved
						</p>
					</div>


				</div>

			</footer>
		);
	}
}


export default Footer;

