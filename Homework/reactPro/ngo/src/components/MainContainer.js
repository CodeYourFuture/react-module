import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Navigation from './Navigation';
import SearchOption from './SearchOption';
import Legend from './Legend';
import UserSearch from './UserSearch';
import Organisation from './Organisation';
import RegistrationForm from './RegistrationForm';
import About from './About';
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
          {
            (this.props.location.pathname ==='/') ?
              <div>
              <ol>  
                <Legend title="Advanced Search"/>
                <SearchOption getService={this.getServiceType} title="Search option" placeHolder="Select..." 
                  type="By service type" area="By service area" clients="By service clients" />
                <UserSearch searchTypeList={ this.state.searchTypeResult } getUserInput={this.getOrganization}/>
              </ol>            
                <Organisation organisations={this.state.organizationList} />
              </div> :
              (this.props.location.pathname === '/about') ?
                <About />:
              <RegistrationForm/> 
                        

          }

        
      </form>   
      </div>
    );
  }

  getServiceType=(Type)=>{
    const url='https://code-your-future.github.io/api-demo/' + Type + '/index.json';
    this.setState({ searchType: Type });
    this.getServiceTypeDetailAPI(url);
        
  };
  
  getOrganization=(userInput)=>{
    const url='https://code-your-future.github.io/api-demo/'+ this.state.searchType +'/' + userInput +'/index.json';
    this.getOrganizationDetailAPI(url);   
  };

  getOrganizationDetailAPI = (url) => {
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(jsonData => {
      this.setState( { organizationList: jsonData.data } ); 
    }).catch(
      this.setState({ organizationList: [] } )
    );
  };

  getServiceTypeDetailAPI = (url) => {
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(jsonData => {
      this.setState( { searchTypeResult: jsonData.data} );     
    }).catch(
      this.setState({ searchTypeResult: [] } )
    );
  };
}

export default MainContainer;
