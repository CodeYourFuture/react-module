import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Organisation from './Organisation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orgData: []
    }
    this.callAPI.bind(this);
  }
  componentDidMount() {
    this.callAPI();
  }
  
  callAPI() {
    const APIAddress = 'https://code-your-future.github.io/api-demo/area/All/index.json';
    fetch(APIAddress)
    .then(function(response) {
      return response.json();
    })
    .then((response) => {
      this.setState({ orgData: response.data });
    });
  }
  
  renderOrganisations() {
    const orgData = this.state.orgData;
    return orgData.map(function renderData(organisation) {
        return (
            <Organisation
                name={organisation.organisation}
                borough={organisation.borough ? organisation.borough : 'None'}
                website= {organisation.website}
                services={organisation.services}
                tel= {organisation.tel}
                email={organisation["email\r"] ? organisation["email\r"] : 'None'}
                hours={organisation.day}
                clients={organisation.clients}
                area={organisation.area}
                process={organisation.process}
            />
        )
    });
  }
  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to RAMS</h2>
        </div>
        <div className="App-intro">
          {this.renderOrganisations()}
        </div>
      </div>
      );
  }
}
export default App;



