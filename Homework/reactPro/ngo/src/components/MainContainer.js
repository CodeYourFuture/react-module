import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import SearchPanel from './SearchPanel';
import '../App.css';


class MainContainer extends React.Component {
  
  state={
    pageHeader: 'London NGO Trucking System'

  };
  
  /* constructor(props){
    super(props);
    this.state={
      test: 32
    }
  }*/

 
  render(){
    return (
      <div className="App">
       
        <Navigation />  
        <SearchPanel />     
      </div>
    );
  }
}
export default MainContainer;
