import React from 'react';
import ReactDOM from 'react-dom';
class UserSearch extends React.Component{
	render(){
		const typeData=this.props.searchTypeList;
		return(
			<li className="group">
				<input onKeyPress={this.handleEnterKey} type="text" list="typeService" 
				placeholder="search..."  name="searchField"/>
				<datalist id="typeService" name="typeService">
					{
						typeData.map((item,index) => {
							return <option key={index}>{item}</option>
							}
						)
					}
				</datalist>
			</li>);
	}

	handleEnterKey=(event)=>{

		if (event.charCode === 13){
			this.props.getUserInput(event.target.value);
			event.preventDefault();
		}
		
		
	};
}

export default UserSearch;