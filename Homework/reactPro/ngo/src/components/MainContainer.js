import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Navigation from './Navigation';
import SearchOption from './SearchOption';
import Legend from './Legend';
import UserSearch from './UserSearch';
import Organisation from './Organisation';

import '../App.css';


class MainContainer extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      pageHeader: 'London NGO Trucking System',
      searchTypeResult: [],
      organizationList: [],
      searchType: []
    };
  }

  render(){
    return (
      <div className="App">
        <Navigation /> 
        <form name="mainForm" className="group" action="#">
        <ol>  
          <Legend title="Advanced Search"/>
          <SearchOption getService={this.getServiceType} title="Search option" placeHolder="Select..." 
             type="By service type" area="By service area" clients="By service clients" />
          <UserSearch searchTypeList={ this.state.searchTypeResult } getUserInput={this.getOrganization}/>
        </ol>
        <div id="searchResult" >
          <Organisation organisations={this.state.organizationList} />
        </div>
      </form>   
      </div>
    );
  }

  componentDidMount=()=>{
     
  };

  getServiceType=(Type)=>{
    const url='https://code-your-future.github.io/api-demo/' + Type + '/index.json';
    this.setState({ searchType: Type });
    this.getServiceTypeDetailAPI(url);
        
  };
  
  getOrganization=(userInput)=>{
    const url='https://code-your-future.github.io/api-demo/'+ this.state.searchType +'/' + userInput +'/index.json';
    this.getOrganizationDetailAPI(url);   
    //console.log(this.state.organizationList);  
  };

  getOrganizationDetailAPI = (url) => {
    const APIAddress = url;
    fetch(APIAddress)
    .then(response => {
      return response.json();
    })
    .then(jsonData => {
      this.setState( { organizationList: jsonData.data } ); 
    });
  };


  getServiceTypeDetailAPI = (url) => {
    const APIAddress = url;
    fetch(APIAddress)
    .then(response => {
      return response.json();
    })
    .then(jsonData => {
      this.setState( { searchTypeResult: jsonData.data} );     
    });
  };

}

export default MainContainer;
