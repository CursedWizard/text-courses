
import PropTypes from 'prop-types';
import React from 'react';
import "../styles/course_page.css";

import {
  Link
} from "react-router-dom";


class AsideCard extends React.Component {
    // constructor (props) 
	// {
		// super(props);
	// }

	render()
	{
		return (
			<div className="mt-6 ml-2 mr-2">
				<div className=" floating flex-column right-sticky p-6 pl-6 pr-6"
					style={{borderRadius: "6px", minWidth: "300px"}}
				>

					<button className="gradient-background button w-full mt-0"
						style={{borderRadius: "6px"}}
					>
						<span className="col-white my-auto"
							style={{fontWeight: "700"}}
						>Весь курс 1200 ex.</span>
					</button>

					<div className="w-full mb-2 mt-6">
						<div className="flex h-full "
						>
							<h5 
								className="mt-0"
								style={{fontSize: "1.20rem", lineHeight: "1rem"}}
							>Ваш прогресс</h5>
						</div>


						<div className="progress"
							style={{height: "30px"}}
						>
							<div 
								style={{minWidth: "0%", width: "0%", height: "30px", textAlign: "right"
								}}
								className="progress-bar flex-row items-center orange-back"
							>
								<span 
									className="p-2 w-full"
									style={{textAlign: "right", fontSize: "0.75rem"}}>0%</span>
							</div>
						</div>
					</div>
					<Link to="/content" className="w-full">
						<button className="button-borders mb-0 w-full mt-2" >
							<span className="my-auto"
								style={{fontWeight: "600"}}
							>Начать</span>
						</button>
					</Link>
				</div>
			</div>
		);
	}
}


export default AsideCard;
