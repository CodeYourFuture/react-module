import React from 'react';
import ReactDOM from 'react-dom';

const listItem=({menuItemName})=>{
	return(
		<li>{menuItemName}</li>
	);
};

listItem.propType={
	menuItemName:React.PropTypes.string
};

const Navigation=()=>{
  return(
    <div className="nav">
      <ul>
		<listItem className="listItem">New Organisation</listItem>
		<listItem className="listItem">Search</listItem>
		<listItem className="listItem">About Us</listItem>	
      </ul>
    </div>
    );
};

export default Navigation;