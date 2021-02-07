import React from 'react';

class LoadingPage extends React.Component {

	render()
	{
		return (
			<svg
className="loading mx-auto"
		role="img" style={{
				maxWidth: "1250px",
				height: "900px",
				
				// paddingLeft: "40px",
				// paddingTop: "40px",
				// paddingBottom: "20px"
				// paddingRight: "40px"
			}} aria-label="Loading interface..." viewBox="0 0 720 720" preserveAspectRatio="none">
				<title>Loading interface...</title>
				<rect x="0" y="0" width="720" height="720" clip-path="url(#clfw4cu8gk)" fill="url(&quot;#g2oq4hb11rk&quot;)"></rect>
				<defs>
					<clipPath id="clfw4cu8gk">
						<rect x="61.001" y="225" width="246" height="69" rx="6" fill="#D9D9D9"/>
						<rect x="61.001" y="511" width="367" height="39" rx="6" fill="#D9D9D9"/>
						<rect x="151.001" y="62" width="418" height="67" rx="6" fill="#D9D9D9"/>
						<rect x="61.001" y="563" width="224" height="28" rx="6" fill="#D9D9D9"/>
						<rect x="61.001" y="602" width="224" height="28" rx="6" fill="#D9D9D9"/>
						<rect x="61.001" y="641" width="224" height="28" rx="6" fill="#D9D9D9"/>
						<rect x="61.001" y="456" width="99" height="24" rx="6" fill="#D9D9D9"/>
						<rect x="176.001" y="456" width="99" height="24" rx="6" fill="#D9D9D9"/>
						<rect x="291.001" y="456" width="99" height="24" rx="6" fill="#D9D9D9"/>
						<rect x="60.001" y="323" width="596" height="118" rx="6" fill="#D9D9D9"/>
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


export default LoadingPage;

