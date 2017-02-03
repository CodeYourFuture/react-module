
import React from 'react';

class Organisation extends React.Component{
	state={
		totalSearch: 0
	}
	render(){
		let orgnisationName;
		let countResult=0;
		return(
			<div> <span>Search Result : </span>[{this.state.totalSearch}]
				{
					this.props.organisations.map(items =>{
						countResult++;
						return (<fieldset> 
							{	Object.keys(items).map(key => {
								if(key==='organisation' || key==='Organisation' )
									orgnisationName=items[key];

								if(key==='Website' || key==='website')
									return <p> <span>{key}</span> : <a target='blank' href={items[key]}> {items[key]}</a></p>
								else
									return <p><span>{key}</span> : {items[key]}</p>
										
								})
								
							}
							<legend>{ orgnisationName }</legend>
						</fieldset>
						)
					})

				}
				{this.setState( { totalSearch: countResult } )}

			</div>
		);
	}

}

export default Organisation;
