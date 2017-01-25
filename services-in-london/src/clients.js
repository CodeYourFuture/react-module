import React, { Component } from 'react';

class Clients extends Component {
	render() {
		const data=this.props.dataInfo.data;
		return(
			<div>
				<h2>List of Organization</h2>
					<div id="buttons">
					{
						data.map( (client, index) => {return (<button key={index} className="btn">{client}</button>);})
					}
					</div>
				<div className="clear"></div>
			</div>
		)
	}
}

export default Clients;
