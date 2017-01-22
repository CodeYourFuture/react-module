import React, { Component } from 'react';
import response from './area.json';

class Area extends Component {
	constructor(props) {
		super(props);
		this.state = {organisations: []};
	}
areas = (area) => {
	//call api
	console.log(area)
	this.setState({organisations: ['amit']})
}

	render() {
		if (this.state.organisations.length == 1) {
			return 				<div>{this.state.organisations}</div>

		}
		return(
			<div>
				<h2>List of Areas</h2>
					<div id="buttons">
					{
						response.data.map( (area) => {return (<button className="btn" onClick={() => this.areas(area)}>{area}</button>);})
					}
					</div>
				<div className="clear"></div>
			</div>
		)
	}
}

export default Area;