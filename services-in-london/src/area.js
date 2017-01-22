import React from 'react';
import response from './area.json';

class Area extends React.Component {
	/*constructor(props) {
		super(props);
		this.state = response;
	}*/
	render() {
		
		return(
			<div>
				<h2>List of Areas</h2>
					<div id="buttons">
					{
						response.data.map( (area) => {return (<button className="btn">{area}</button>);})
					}
					</div>
				<div className="clear"></div>
			</div>
		)
	}
}

export default Area;