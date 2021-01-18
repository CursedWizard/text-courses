
import React from 'react';
import GLCommander from "./GlCommander";


export default class WebGl extends React.Component
{
	constructor(props)
	{
		super(props);

		this.canvasRef = React.createRef();
		this.draw = this.draw.bind(this);
	}

	componentDidMount()
	{
		// const canvas = document.querySelector("webgl");
		this._isMounted = true;

		const canvas = this.canvasRef.current;
		const gl = canvas.getContext("webgl");

		// canvas.height = "800px";
		// canvas.width = "800px";

		if (!gl)
		{
			console.log("gl didnt get initialized");
			return null;
		}

		const view = this.canvasRef.view;
		const ratio = window.devicePixelRatio || 1;
		const width = (view.clientWidth * ratio) | 0;
		const height = (view.clientHeight * ratio) | 0;
		const resizing = false;

		this.setState({ width, height, ratio, resizing });

		this.GLC = new GLCommander();

		this.GLC.init(gl);
		this.GLC.useProgram();
		this.GLC.setVertexPosition("aVertexPosition");
		this.GLC.setTime();
		// let width = window.innerWidth;
		// let height = 300;
		// console.log(width)
		this.GLC.setResolution(width, height);
		this.GLC.setUniform("centers");

		let updateResolution = () => {
			let width = window.innerWidth;
			let height = this.canvasRef.current.offsetHeight;
			let webgl_ = document.getElementById('webgl');
			webgl_.width = width;
			console.log(width)
			this.GLC.setResolution(width, height);
		}
		window.addEventListener('resize', updateResolution);

		this.draw();
	}

	componentWillUnmount() 
	{
      this._isMounted = false;
  	}

	draw()
	{
		// this.GLC.setResolution(this.canvasRef.current.offsetWidth, this.canvasRef.current.offsetHeight);
		// this.GLC.setResolution(canvas.width, canvas.height);
		//
		this.GLC.drawScene();
		let _draw = () => this.draw();
		setTimeout(() => requestAnimationFrame(_draw), 1000 / 60);
	}

	render()
	{
		return (
			<canvas id="webgl" 
				width={this.state.width}
				height={this.state.height}
				style={{
					width: '100%',
					height: '100%',
				}}
				ref={this.canvasRef}
			/>

		)
	}
}
