import React, { Component } from 'react';

class ListComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listLinks: props.listData,
		};
	}

	render() {
		let links = this.state.listLinks.map((link, index, itemStyle) => {
			return (
				<a href={'/' + `${link}`}>
					<div className="mb1 black-50 hover-black  " key={index}>
						{link}
					</div>
				</a>
			);
		});

		return <div className="pointer ">{links}</div>;
	}
}
export default ListComponent;
