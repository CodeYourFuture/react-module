import React, { Component } from 'react';

class Details extends Component {
  render() {
    const website = this.props.website;
    const email = this.props.email;
    const tel = this.props.tel;
    const area = this.props.area;
    const process = this.props.process;
    const clients = this.props.clients;
    const services = this.props.services;
    const borough = this.props.borough;
    const type = this.props.type;
    const day = this.props.day;
    const organisation = this.props.organisation;
    return(
      <div className='info'>
        <p><strong>website: </strong>{website}</p>
        <p><strong>email: </strong>{email}</p>
        <p><strong>tel: </strong>{tel}</p>
        <p><strong>area: </strong>{area}</p>
        <p><strong>process: </strong>{process}</p>
        <p><strong>organisation: </strong>{organisation}</p>
        <p><strong>clients: </strong>{clients}</p>
        <p><strong>services: </strong>{services}</p>
        <p><strong>borough: </strong>{borough}</p>
        <p><strong>type: </strong>{type}</p>
        <p><strong>day: </strong>{day}</p>
      </div>
    )
  }
}

export default Details;