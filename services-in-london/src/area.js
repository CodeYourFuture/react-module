import React, { Component } from 'react';

class Area extends Component {
  render() {
    const data=this.props.dataInfo.data;
    const func=this.props.whenClick;
    return(
      <div>
        <h2>List of Areas</h2>
          <div id="buttons">
          {
            data.map( (area, index) => {return (<button key={index} className="btn" onClick={() => func(area)}>{area}</button>);})
          }
          </div>
        <div className="clear"></div>
      </div>
    )
  }
}

export default Area;

/*import response from './response.json';
class Area extends Component {
  constructor(props) {
    super(props);
    this.state = {organisations: []};
  }
  areas = (area) => {
    //call api
    console.log(area)
    // this.setState({organisations: ['amit']})
  }

  render() {
    if (this.state.organisations.length === 1) {
      return        <div>{this.state.organisations}</div>

    }
    return(
      <div>
        <h2>List of Areas</h2>
          <div id="buttons">
          {
            response.data.map( (area) => {return (<button className="btn" onClick={() =>this.areas(area)}>{area}</button>);})
          }
          </div>
        <div className="clear"></div>
      </div>
    )
  }
}

export default Area;*/
