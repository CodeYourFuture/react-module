import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import '../App.css';


class MainContainer extends React.Component {
  
  state={
    test: 34,
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
        <Header message={this.state.pageHeader}/>
        <Navigation />
       {this.state.pageHeader}
      </div>
    );
  }
}
export default MainContainer;
