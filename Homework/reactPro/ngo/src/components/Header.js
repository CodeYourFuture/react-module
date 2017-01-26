import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import '../App.css';

const Header=({message})=>{
  return(
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{message}</h2>
      </div>
    );
};

Header.propType={
  message:React.PropTypes.string
};

export default Header;