import React from 'react';
import './Model.css';

class Model extends React.Component {
	constructor(props){
    super(props);

    this.state = {
      name: this.props.name,
    }
  }
  
  render() {
    return (
      <li>
        {this.state.name}
      </li>
    )
  }
};

export default Model;
