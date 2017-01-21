import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OrganisationList from'./OrganisationComp';



class App extends Component {
  renderServiceProviders = () => {
    if (!this.state.orgData)
        return <p> Data Not Displayed</p>;
    let serviceProviders=[];
    let organisationList=this.state.orgData.data;
    //loops through list
    for(let i = 0; i < organisationList.length; i++) {
      serviceProviders.push(
        //organisation component here!!
        <div>
        //{Details}
          <div className="list" key={i}>
            <strong>Organisation: </strong>{organisationList[i].organisation}
            <br></br> 
            <strong>Telephone: </strong>{organisationList[i].tel ? organisationList[i].tel: 'Not Available'}
            <br></br> 
            <strong>Website: </strong>{organisationList[i].website ? organisationList[i].website: 'Search Online'}
            <br></br>
            <strong>Email: </strong>{organisationList[i]["email\r"] ? organisationList[i]["email\r"]: 'Not Available'}
            <br></br>
            <strong>Hours of Operation: </strong>{organisationList[i].day ? organisationList[i].day: 'Contact Organisation Directly'}
            <br></br>
            <strong>Services Provided: </strong>{organisationList[i].services}
            <br></br>
            <strong>Clients: </strong>{organisationList[i].clients}
            <br></br>
            <strong>Areas Covered: </strong>{organisationList[i].area}
            <br></br>
            <strong>Borough: </strong>{organisationList[i].borough}
            <br></br>
            <strong>How we work: </strong>{organisationList[i].process}
          </div>
        </div>
      );
    };
    return serviceProviders;
  }
  //set intial state of your component
  constructor(props) {
    super(props);
    this.state = {
       orgData: null
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to RAMS</h2>
        </div>
        <div className="App-intro">
          {this.renderServiceProviders()}
        </div>
      </div>
    );
  }

  callAPI = () => {
    const APIAddress = 'https://code-your-future.github.io/api-demo/area/All/index.json';
    fetch(APIAddress)
    .then(function(response) {
      return response.json();
    })
    .then((jsonData)=> {
      this.setState({ orgData: jsonData });
    });
  
  this.callAPI.bind(this);
  }

  componentDidMount() {
    this.callAPI();
  }
}

export default App;