import React, { Component } from 'react';
import response from './organization.json';

class Organization extends Component {
	render() {
		// const name = this.props.name;
		return(
			<div>
				<h2>List of Organization</h2>
					<div id="buttons">
					{
						response.data.map( (org) => {return (<button className="btn">{org}</button>);})
					}
					</div>
				<div className="clear"></div>
			</div>
		)
	}
}

export default Organization;