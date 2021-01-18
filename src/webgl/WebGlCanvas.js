import React, {PropTypes} from 'react';
import GLCommander from "./GlCommander";

class WebGlCanvas extends React.Component {
	constructor(props) {
		super(props);
		this.canvasRef = React.createRef();
		this.view = React.createRef();


		this.state = {
			width: 0,
			height: 0
		}
		this.state.style = {
			width: "100%",
			height: "300px"
		}
		this.draw = this.draw.bind(this);
		this.setResolution = this.setResolution.bind(this);
		this.initGlCommander = this.initGlCommander.bind(this);
	}

	initGlCommander()
	{
		const canvas = this.canvasRef.current;
		const gl = canvas.getContext("webgl");

		if (!gl)
		{
			console.log("gl didnt get initialized");
			return null;
		}

		this.GLC = new GLCommander();

		this.GLC.init(gl);
		this.GLC.useProgram();
		this.GLC.setVertexPosition("aVertexPosition");
		this.GLC.setTime();
	}

	async setResolution(view)
	{
		const ratio = window.devicePixelRatio || 1;
		const width = (view.clientWidth * ratio) | 0;
		const height = (view.clientHeight * ratio) | 0;

		console.log(`${width} of view container and ${height}`)
		this.GLC.setResolution(width, height);

		let canvas = document.querySelector("#webgl");
		canvas.width = width;
		canvas.height = height;
	}

	componentDidMount() 
	{
		this._isMounted = true;

		let view = this.refs.view;
		let updateResolution = () => {
			this.setResolution(view);
		}
		window.addEventListener('resize', updateResolution);

		this.initGlCommander();
		this.setResolution(view);
		this.draw();
	}

	componentWillUnmount() 
	{
      this._isMounted = false;
  	}

	draw() {
		this.GLC.drawScene();
		let _draw = () => this.draw();
		setTimeout(() => requestAnimationFrame(_draw), 1000 / 60);
	}

	render() {
		return (
			<div
				ref='view'
				className={'view'}>

				<canvas
					id="webgl"
					ref={this.canvasRef}
					width={window.screen.availWidth}
					height={window.screen.availHeight}
					style={this.state.style}
				/>
			</div>
		);
	}
}

export default WebGlCanvas;
