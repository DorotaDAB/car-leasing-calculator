import React from 'react';
import ModelList from './ModelList/ModelList';
import './Make.css';

class Make extends React.Component {
	constructor(props){
    super(props);

    this.state = {
      name: this.props.name,
      id: this.props.id,
      showModelList: false
    }
    this.displayModelList = this.displayModelList.bind(this);
    this.toggleModelListVisibility = this.toggleModelListVisibility.bind(this);
  }

  toggleModelListVisibility = () => {
    this.setState({showModelList: !this.state.showModelList})
  }

  displayModelList = () => { 
    if (this.state.showModelList) {
      return (<ModelList id={this.state.id}/>)
    }
  }

  render() {
    let buttonLabel = this.state.showModelList ? 'Ukryj modele' : 'Pokaż modele'
    
    return (
      <li>
        {this.state.name}
        <button onClick={ () =>this.toggleModelListVisibility()}>{buttonLabel}</button>
        {this.displayModelList()}
      </li>
    )
  }
};

export default Make;
