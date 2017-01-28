import React , { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchPanel extends React.Component{
	
	state={
		areaData:[]
	}

	componentDidMount(){

	}


	render(){
		
		const Legend=({title})=>{
			return(
				<li className="group">
					<legend>{title}</legend>
				</li>
				);
		};

		const SelectOption=({title,type,area,clients,placeHolder})=>{
			return(
				<li className="group">
					<label htmlFor="chooseType">{title}</label>
					<select id="choose" name="chooseType">
						<option>{placeHolder}</option>
						<option value="type">{type}</option>
						<option value="area">{area}</option>
						<option value="clients">{clients}</option>
					</select>
				</li>
				);

		};

		const TextBox=()=>{
			return(
				<li className="group">
					<input type="text" id='search' list="typeService" 
					placeholder="search..."  name="searchField"/>
					<datalist id="typeService" name="typeService"></datalist>
				</li>
				);
		};

		return(
			<form name="mainForm" className="group" action="#">
				<ol>	
					<Legend title="Advanced Search"/>
					<SelectOption  title="Search option" placeHolder="Select..." 
					 type="By service type" area="By service area" clients="By service clients" />
					<TextBox/>
				</ol>
				<div id="searchResult" ></div>
			</form>
			
	    );
    }
}

export default SearchPanel;

