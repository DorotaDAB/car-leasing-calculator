import React from 'react';
import ModelList from './ModelList/ModelList';
import './Make.css';

class Make extends React.Component {
	constructor(props){
    super(props);

    this.state = {
      name: this.props.name,
      id: this.props.id
    }
  }
  
  render() {
    return (
      <li>
        {this.state.name}
        <ModelList id={this.state.id}/>
      </li>
    )
  }
};

export default Make;
