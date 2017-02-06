import React from 'react';
import { Link } from 'react-router';

const Navigation=()=>{
  return(
    <div className="nav">
    	<ul>
				<Link to='/add-organization' activeClassName='selected' className="listItem">New Organisation </Link>
				<Link to='/' activeClassName='selected' className='listItem'>Search </Link>
				<Link to='/about' activeClassName='selected' className="listItem">About Us </Link>	
      </ul>
    </div>
    );
};

export default Navigation;