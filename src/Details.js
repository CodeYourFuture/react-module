import React, {Component} from 'react';
import './App.css';

class Details extends Component {

	render() {
		const name=this.props.name;
		const tel=this.props.tel;
		const web=this.props.web;
		const email=this.props.email;
		const hours=this.props.hours;
		const services=this.props.services;
		const clients=this.props.clients;
		const areas=this.props.areas;
		const borough=this.props.borough;
		const operation=this.props.operation;
	
	return (
		<div className='list'>
			<h2>{name}</h2>
			<p><strong>Telephone: </strong>{tel}</p>
			<p><strong>Website: <a href={web}>{web}</a></strong></p>
			<p><strong>Services: </strong>{services}</p>
			<p><strong>Email: </strong>{email}</p>
			<p><strong>Opening Hours: </strong>{hours}</p>
			<p><strong>Clients: </strong>{clients}</p>
			<p><strong>Areas Covered: </strong>{areas}</p>
			<p><strong>Borough: </strong>{borough}</p>
			<p><strong>Process: </strong>{operation}</p>
		</div>
			);
	}
}

export default Details;
