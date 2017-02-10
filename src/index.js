import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, browserHistory} from 'react-router';
import Area from './Area.js';
import OrgDetails from './OrgDetails.js';


ReactDOM.render(
	(<Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/area/:areaName" component={App} />
    <Route path="/area/:areaName/organisation/:orgName" component={OrgDetails}/>
  </Router>),
  	document.getElementById('root')
);
