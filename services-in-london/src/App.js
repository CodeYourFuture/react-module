import React, { Component } from 'react';
import './App.css';
import Area from './area';
import Organization from './organization';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
				display: null
		}
	}
	organization() {
		this.setState({
			display: <Organization />
		})
	}
	areas() {
		this.setState({
			display: <Area />
		})
	}
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>Services in London</h2>
				</div>
				<div>
					<button className="infoBtn" onClick={this.organization.bind(this)}>Organization</button>
					<button className="infoBtn" onClick={this.areas.bind(this)}>Areas</button>
					{this.state.display}
				</div>
			</div>
		);
	}
}

export default App;
