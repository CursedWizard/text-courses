import React from 'react';

class LoadingCard extends React.Component {

	render()
	{
		return (
			<svg
className="course-card-wrapper loading"
		role="img" style={{
				width: "330px",
				height: "300px",
				// paddingLeft: "40px",
				// paddingTop: "40px",
				// paddingBottom: "20px"
				// paddingRight: "40px"
			}} aria-label="Loading interface..." viewBox="0 0 330 300" preserveAspectRatio="none">
				<title>Loading interface...</title>
				<rect x="0" y="0" width="330" height="300" clip-path="url(#clfw4cu8gk)" fill="url(&quot;#g2oq4hb11rk&quot;)"></rect>
				<defs>
					<clipPath id="clfw4cu8gk">
						<rect x="100" y="27" width="166" height="24" rx="6" fill="#D9D9D9"/>
						<rect x="100" y="59" width="97" height="24" rx="6" fill="#D9D9D9"/>
						<rect x="25" y="27" width="56" height="56" rx="6" fill="#D9D9D9"/>
						<rect x="25" y="252" width="99" height="24" rx="6" fill="#D9D9D9"/>
						<rect x="206" y="252" width="99" height="24" rx="6" fill="#D9D9D9"/>
						<rect x="25" y="100" width="280" height="64" rx="6" fill="#D9D9D9"/>
					</clipPath>

					<linearGradient id="g2oq4hb11rk">
						<stop offset="0%" stop-color="#f9f9f9" stop-opacity="1">
							<animate attributeName="offset" values="-2; -2; 1" keyTimes="0; 0.25; 1" dur="2s" repeatCount="indefinite"></animate>
						</stop>
						<stop offset="50%" stop-color="#efefef" stop-opacity="1">
							<animate attributeName="offset" values="-1; -1; 2" keyTimes="0; 0.25; 1" dur="2s" repeatCount="indefinite"></animate>
						</stop>
						<stop offset="100%" stop-color="#f9f9f9" stop-opacity="1">
							<animate attributeName="offset" values="0; 0; 3" keyTimes="0; 0.25; 1" dur="2s" repeatCount="indefinite"></animate>
						</stop>
					</linearGradient>
				</defs>
			</svg>
		);
	}
}

let loadingCards = [
	<LoadingCard/>,
	<LoadingCard/>,
	<LoadingCard/>,
	// <LoadingCard/>,
	// <LoadingCard/>,
	// <LoadingCard/>
]

export {loadingCards};

