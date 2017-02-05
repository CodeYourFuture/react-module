import React, { Component } from 'react';

class Clients extends Component {
  render() {
    const data=this.props.dataInfo.data;
    const func=this.props.whenClick;
    return(
      <div>
        <h2>List of Clients</h2>
          <div id="buttons">
          {
            data.map( (client, index) => {return (<button key={index} className="btn" onClick={() => func(client)}>{client}</button>);})
          }
          </div>
        <div className="clear"></div>
      </div>
    )
  }
}

export default Clients;
