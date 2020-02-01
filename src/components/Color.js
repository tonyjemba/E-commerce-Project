import React, { Component } from 'react';

export default class Color extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colors: props.colors,
		};
	}
	render() {
		//colors props only accepts a string array of colors
		let colorOptions = this.state.colors.map((color, index) => (
			<div
				key={index}
				style={{
					backgroundColor: `${color}`,
					height: '16px',
					width: '16px',
					borderRadius: '8px',
                    // border:'1px solid black',
                    fontSize:'2px',
                    color:`${color}`
                }}
                className="tc ma1"
			>
				c
			</div>
		));

		return <div className="flex flex-row justify-around pointer">{colorOptions}</div>;
	}
}
