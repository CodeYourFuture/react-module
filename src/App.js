import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Organisation from'./OrganisationComp';



class App extends Component {
  renderServiceProviders = () => {
    if (!this.state.orgData)
        return <p> No Data Returned</p>;
    let serviceProviders = [];
    let organisationList = this.state.orgData.data;
    //loops through list
    for(let i = 0; i < organisationList.length; i++) {
      serviceProviders.push(
        //organisation component here!!
        //<Organisation/>
        <div>
        <p className="list" key={i}>
        Organisation: {organisationList[i].organisation}
        <br></br> 
        Telephone: {organisationList[i].tel}
        <br></br> 
        Website: {organisationList[i].website}
        <br></br>
        Email: {organisationList[i]["email\r"]}
        <br></br>
        Hours of Operation: {organisationList[i].day}
        <br></br>
        Services Provided: {organisationList[i].services}
        <br></br>
        Clients: {organisationList[i].clients}
        <br></br>
        Areas Covered: {organisationList[i].area}
        <br></br>
        Borough: {organisationList[i].borough}
        <br></br>
        How we work: {organisationList[i].process}
        </p>
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