import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Organisation from './Organisation';


class App extends Component {
 
  // constructor gets called once when the class is initiated
  constructor(props) {
    super(props);
    this.state = {
    orgData: {data: []},
    areaData: {data: []}
    };

  
  }

   renderAreas = () => {
    const myData = this.state.areaData.data; 
     return myData.map((area) =>{
     return ( <button onClick={() =>this.getOrganizations(area)}>{area}</button>);
   });
     
   }
  renderOrganisations = () => {
    const myData = this.state.orgData.data; 
     return myData.map(function(organisation) {
     return ( <Organisation
     website={organisation.website}
     tel={organisation.tel ? organisation.tel : 'None'}
     area={organisation.area}
     process={organisation.process}
     name={organisation.organisation}
     clients={organisation.clients}
     services={organisation.services}
     borough={organisation.borough}
     type={organisation.type}
     day={organisation.day}
     />);
   });
     
   }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           <p className="App-head">Services In London</p>
        </div>
           <p className="App-intro"></p>

           {this.renderAreas()}
           {this.renderOrganisations()}
      </div>
   );            
}

  getOrganizations = (area) => {
    const APIAddress = 'https://code-your-future.github.io/api-demo/area/'+ area +'/index.json';
    fetch(APIAddress)
    .then(function(response) {
    console.log(response) 
    return response.json();
    })
    .then((jsonData) => {
      this.setState({ orgData: jsonData });
    });
 }

  callAreas = () => {
    const APIAddress = 'https://code-your-future.github.io/api-demo/area/index.json';
    fetch(APIAddress)
    .then(function(response) {
    console.log(response) 
    return response.json();
    })
    .then((jsonData) => {
      this.setState({ areaData: jsonData });
    });

  }

 componentDidMount() {
    this.callAreas();

    
  }
}

export default App;
