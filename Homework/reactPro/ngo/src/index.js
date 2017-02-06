import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './components/MainContainer';
import PageNotFound from './components/PageNotFound';

import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render(
  <Router history = {hashHistory} >
  	<Route path="/" component= { MainContainer }/>
  	<Route path="add-organization" component= { MainContainer } />
  	<Route path="about"  component = { MainContainer } />
  	<Route path= "*" component= { PageNotFound }/> 

  </Router>,
  document.getElementById('root')
);
