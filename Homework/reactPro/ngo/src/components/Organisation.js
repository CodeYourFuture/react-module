
import React from 'react';
import OrganisationDetail from './OrganisationDetail';

class Organisation extends React.Component{
	
	render(){
		return(
			<fieldset>
				{
					this.props.organisations.map(items =>{
						return Object.keys(items).map(key => {
							return <p><span>{key}</span> : {items[key]}</p>;
						})
					})					
				}
			</fieldset>
		);
	}

}

export default Organisation;


/*
		if(key==='organisation' || key==='Organisation' )
							return <legend>{ items[key] }</legend>;
*/