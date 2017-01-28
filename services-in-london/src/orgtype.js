import React, { Component } from 'react';

class OrgType extends Component {
  render() {
    const data=this.props.dataInfo.data;
    const func=this.props.whenClick;
    return(
      <div>
        <h2>List of Organisation Type</h2>
          <div id="buttons">
          {
            data.map( (type, index) => {return (<button key={index} className="btn" onClick={() => func(type)}>{type}</button>);})
          }
          </div>
        <div className="clear"></div>
      </div>
    )
  }
}

export default OrgType;
