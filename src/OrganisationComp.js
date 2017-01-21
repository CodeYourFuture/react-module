import React, { Component } from 'react';
import './App.css';



class OrganisationList extends Component {
  renderOrganisations= () => {
    const orgData = this.state.orgData;
      return orgData.map(function renderData(detailsOfServiceProvider) {
        return (
            <Details
                Org={detailsOfServiceProviders.organisation}
                tel= {detailsOfServiceProviders.tel ? detailsOfServiceProviders.tel : 'Currently Unavailable'}
                web={detailsOfServiceProviders.website}
                email={detailsOfServiceProviders["email\r"] ? detailsOfServiceProviders["email\r"] : 'Currently Unavailable'}
                hours={detailsOfServiceProviders.day}
                services={detailsOfServiceProviders.services}
                clients={detailsOfServiceProviders.clients}
                areas={detailsOfServiceProviders.area}
                borough={detailsOfServiceProviders.borough ? detailsOfServiceProviders.borough : 'Not Applicable'}
                operation={detailsOfServiceProviders.process}
            />
        )
    });
  render() 
  return (
    <div className="App">
      {this.renderOrganisations()}
    </div>
  );
}

}



export default Organisation;
