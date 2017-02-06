import React from 'react';

class RegistrationForm extends React.Component{
	render(){
		const {orgName,webName,areaName,telNo} = this.props;
		return(
				<div className='s'>
					<legend> Add New Organization </legend> 
						<div >
						<lable htmlFor='orgName'>Organization Name </lable>
						<input 	id='orgName' 
										type='text' 
										required
										defaultValue={orgName}/>
						</div>
						<div >
						<lable htmlFor='webName'>Website </lable>
						<input 	id='webName' 
										type='text' 
										required
										defaultValue={webName}/>
						</div>
						<div >
						<lable  htmlFor='areaName'>Area </lable>
						<input 	id='areaName' 
										type='text' 
										required
										defaultValue={areaName}/>
						</div>
						<div >
						<lable  htmlFor='telNo'>Telephone </lable>
						<input 	id='telNo'
										type='text' 
										required
										defaultValue={telNo}/>
						</div>
						<button >Add</button>
					

				</div>			
		);
	}
}

RegistrationForm.defaultProps={
	orgName: 'CYF',
	webName: 'https://www.codeyourfutur.com',
	areaName: 'London',
	telNo: '+44 2014582635'

}
RegistrationForm.propTypes={
	orgName: React.PropTypes.string.isRequired,
	webName: React.PropTypes.string.isRequired,
	areaName: React.PropTypes.string.isRequired,
	telNo: React.PropTypes.string.isRequired
}

export default RegistrationForm;


