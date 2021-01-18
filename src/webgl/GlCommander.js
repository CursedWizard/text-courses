
import React from 'react';
import initShaderProgram from "./initShader"

const vsSource = `
attribute vec4 aVertexPosition;
varying vec4 v_positionWithOffset;

void main()
{
	 gl_Position = aVertexPosition;
	 v_positionWithOffset = aVertexPosition;
}
`

const fsSource = `
precision highp float;

uniform float time;
uniform vec2 resolution;

float field(in vec3 p,float s) {
	float strength = 7. + .03 * log(1.e-6 + fract(sin(time) * 4373.11));
	float accum = s/4.;
	float prev = 0.;
	float tw = 0.;
	for (int i = 0; i < 26; ++i) {
		float mag = dot(p, p);
		p = abs(p) / mag + vec3(-.5, -.4, -1.5);
		float w = exp(-float(i) / 7.);
		accum += w * exp(-strength * pow(abs(mag - prev), 2.2));
		tw += w;
		prev = mag;
	}
	return max(0., 5. * accum / tw - .7);
}

float field2(in vec3 p, float s) {
	float strength = 7. + .03 * log(1.e-6 + fract(sin(time) * 4373.11));
	float accum = s/4.;
	float prev = 0.;
	float tw = 0.;
	for (int i = 0; i < 18; ++i) {
		float mag = dot(p, p);
		p = abs(p) / mag + vec3(-.5, -.4, -1.5);
		float w = exp(-float(i) / 7.);
		accum += w * exp(-strength * pow(abs(mag - prev), 2.2));
		tw += w;
		prev = mag;
	}
	return max(0., 5. * accum / tw - .7);
}

vec3 nrand3( vec2 co ) {
	vec3 a = fract( cos( co.x*8.3e-3 + co.y )*vec3(1.3e5, 4.7e5, 2.9e5) );
	vec3 b = fract( sin( co.x*0.3e-3 + co.y )*vec3(8.1e5, 1.0e5, 0.1e5) );
	vec3 c = mix(a, b, 0.5);
	return c;
}


void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
	vec2 uv = 2. * fragCoord.xy / resolution.xy - 1.;
	vec2 uvs = uv * resolution.xy / max(resolution.x, resolution.y);
	vec3 p = vec3(uvs / 4., 0) + vec3(1., -1.3, 0.);
	p += .2 * vec3(sin(time / 16.), sin(time / 12.),  sin(time / 128.));

	float freqs[4];
	// TODO: Add music support for liquidbounce
	// https://github.com/CCBlueX/LiquidBounce-Issues/issues/3932
	freqs[0] = 0.02;
	freqs[1] = 0.07;
	freqs[2] = 0.15;
	freqs[3] = 0.30;

	float t = field(p,freqs[2]);
	float v = (1. - exp((abs(uv.x) - 1.) * 6.)) * (1. - exp((abs(uv.y) - 1.) * 6.));

	//Second Layer
	vec3 p2 = vec3(uvs / (4.+sin(time*0.11)*0.2+0.2+sin(time*0.15)*0.3+0.4), 1.5) + vec3(2., -1.3, -1.);
	p2 += 0.25 * vec3(sin(time / 16.), sin(time / 12.),  sin(time / 128.));
	float t2 = field2(p2,freqs[3]);
	vec4 c2 = mix(.4, 0.5, v) * vec4(0.8 * t2 * t2 * t2 , 1.5 * t2 * t2 , 1.5 * t2, t2);


	//Let's add some stars
	vec2 seed = p.xy * 2.0;
	seed = floor(seed * resolution.x);
	vec3 rnd = nrand3( seed );
	vec4 starcolor = vec4(pow(rnd.y,40.0));

	//Second Layer
	vec2 seed2 = p2.xy * 2.0;
	seed2 = floor(seed2 * resolution.x);
	vec3 rnd2 = nrand3( seed2 );
	starcolor += vec4(pow(rnd2.y,40.0));

	fragColor = vec4(1.5*freqs[2] * t * t* t , 1.2*freqs[1] * t * t, freqs[3]*t, 1.0)+c2+starcolor;
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

class GLCommander
{
	init(gl)
	{
		this.gl = gl;
		this.shaderProgram = initShaderProgram(gl, vsSource, fsSource);

		this.startTime = Date.now();
	}

	drawScene()
	{
		let verts = [1, -1,
			-1, -1,
			1, 1,
			-1, -1,
			-1, 1,
			-1, -1
		];

		let buffer = this.createBuffer(verts);
		this.useBuffer(buffer);

		let time = Date.now() - this.startTime;
		this.rad = (this.rad + 0.02) % (Math.PI);

		this.gl.uniform1f (this.uTime, time / 1000);

		this.gl.clear( this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT );
		this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 6);
	}

	useProgram()
	{
		this.gl.useProgram(this.shaderProgram);
	}

	createBuffer(positions)
	{
		const positionBuffer = this.gl.createBuffer();

		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);
		this.gl.bufferData(this.gl.ARRAY_BUFFER,
		  			new Float32Array(positions),
		  			this.gl.STATIC_DRAW);

		return positionBuffer;
	}

	setVertexPosition(vertexValue)
	{
		this.vertexPosition = this.gl.getAttribLocation(this.shaderProgram, vertexValue);
	}

	setUniform(value)
	{
		this.offsetLoc = this.gl.getUniformLocation(this.shaderProgram, value);
	}

	setResolution(width, height)
	{
		this.resolution = this.gl.getUniformLocation(this.shaderProgram, "resolution");
		this.gl.uniform2f(this.resolution, width, height);
	}
	

	setTime()
	{
		this.uTime = this.gl.getUniformLocation(this.shaderProgram, "time");
	}

	useBuffer(positionBuffer)
	{
		const numComponents = 2;  // pull out 2 values per iteration
		const type = this.gl.FLOAT;    // the data in the buffer is 32bit floats
		const normalize = false;  // don't normalize
		const stride = 0;         // how many bytes to get from one set of values to the next
                              // 0 = use type and numComponents above
		const offset = 0;         // how many bytes inside the buffer to start from

		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);
		this.gl.vertexAttribPointer(
			this.vertexPosition,
			numComponents,
			type,
			normalize,
			stride,
			offset
		);

		this.gl.enableVertexAttribArray(this.vertexPosition);
	}

	justClear()
	{
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);
	}

	clear(r, g, b, a)
	{
		this.gl.clearColor(r, g, b, a);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);
	}
}

export default GLCommander;
