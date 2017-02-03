import React from 'react';


class OrganisationDetail extends React.Component{
	render(){
		const organisationDetail=this.props.detail;
		return(
				<fieldset>
				{
					Object.keys(organisationDetail).map(key => {
						if(key==='organisation' || key==='Organisation' )
							return <legend>{ organisationDetail[key] }</legend>;
						else
							return <p><span>{key}</span> : {organisationDetail[key]}</p>;
								
						})
				}					
				
				</fieldset>
			);
	}
}
export default OrganisationDetail;