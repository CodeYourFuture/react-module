import React from 'react';

class SearchOption extends React.Component{
	render(){
		return(
			<li className="group">
				<label htmlFor="chooseType">Search Service By : </label>
				<select onChange={this.hundelOnchange} name="chooseType">
					<option>select...</option>
					<option value="type">Type</option>
					<option value="area">Area</option>
					<option value="clients">Clients</option>
				</select>
			</li>
		);
	}
	
	hundelOnchange=(event)=>{
			return this.props.getService(event.target.value);
	}
}

export default SearchOption;