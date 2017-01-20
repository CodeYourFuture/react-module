import React, { Component } from 'react';
import App from './App';
import './App.css';

class Organisation extends Component {
  render() {
    const name = this.props.name;
    const website = this.props.website;
    const borough = this.props.borough;
    const services = this.props.services;
    const tel = this.props.tel; 
    const hours = this.props.hours;
    const email = this.props.email;
    const clients = this.props.clients;
    const process = this.props.process;
    const area =this.props.area;

    return (
        <div className ="org">
         <h3 className = "org-header">{name}</h3><br /> 
         <b>Website:</b>{website} <br /> 
         <b>Borough:</b>{borough} <br /> 
         <b>Services:</b>{services} <br />
         <b>Telephone:</b>{tel} <br />
         <b>Email:</b>{email} <br />
         <b>Opening Hours:</b>{hours} <br />
         <b>Clients:</b>{clients} <br />
         <b>Areas Covered:</b>{area} <br />
         <b>Process:</b>{process}
        </div>
    );
  }
}

export default Organisation; 