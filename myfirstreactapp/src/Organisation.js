import React, { Component } from 'react';

export default class Organisation extends Component {
  render() {
    const website=this.props.website;
    // const [email\r]=this.props.["email\r"];
    const tel=this.props.tel;
    const area=this.props.area;
    const process=this.props.process;
    const name=this.props.name;
    const clients=this.props.clients;
    const services=this.props.services;
    const borough=this.props.borough;
    const type=this.props.type;
    const day=this.props.day;
    return (
      <div className='test'>
      
    {/*  website:{website}<br/>*/}
      tel:   {tel}<br /><br />
      area:  {area}<br /><br />
      process:  {process}<br /><br />
      name:  {name}<br /><br />
      clients: {clients}<br /><br />
      services: {services}<br /><br />
      borough: {borough}<br /><br />
      type:  {type}<br /><br />
      day:  {day}<br /><br />
      </div>

    );
  }
}