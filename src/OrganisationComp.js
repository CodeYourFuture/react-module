import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

renderOrganisations() {
	const orgData = this.state.orgData;
	return orgData.map(function renderData(organisation) {
        return (
            <Organisation
                Org={organisation.organisation}
                tel= {organisation.tel ? organisation.tel : 'Currently Unavailable'}
                web={organisation.website}
                email={organisation["email\r"] ? organisation["email\r"] : 'Currently Unavailable'}
                hours={organisation.day}
                services={organisation.services}
                clients={organisation.clients}
                areas={organisation.area}
                borough={organisation.borough ? organisation.borough : 'Not Applicable'}
                operation={organisation.process}
            />
        )
    });
}

render() {
      return (
        <div className="App">
          {this.renderOrganisations()}
        </div>
      );
  }
}
export=<Organisation/>;
