import React, { Component } from 'react';

export default class Size extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sizes: props.sizes,
		};
	}
	render() {
		
		let sizes = this.state.sizes.map((size, index) => (
			<div
				key={index}
				style={{
                    border:'1px solid black',
                    fontSize:'10px',
                    color:"black",
                    verticalAlign:"center"
                }}
                className="tc ma1 pl1 pr1"
			>
				{size}
			</div>
		));

		return <div className="flex flex-row justify-around pointer ">{sizes}</div>;
	}
}
