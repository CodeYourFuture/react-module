import React, { Component } from 'react';

class Type extends Component {
	render() {
		const data=this.props.dataInfo.data;
		return(
			<div>
				<h2>List of Clients</h2>
					<div id="buttons">
					{
						data.map( (type, index) => {return (<button key={index} className="btn">{type}</button>);})
					}
					</div>
				<div className="clear"></div>
			</div>
		)
	}
}

export default Type;
