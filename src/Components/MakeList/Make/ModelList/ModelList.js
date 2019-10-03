import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Model from './Model/Model';
import './ModelList.css';

class ModelList extends React.Component {
	constructor(props){
    super(props);

    this.state = {
      models: []
    }

    this.getModelsForMakeId = this.getModelsForMakeId.bind(this);
  }

  displayModels() {
    if (this.state.models.length > 0) {
      return (
        <div className="model-list">
          <ul>
            {this.state.models.map( model => <Model name={model.Model_Name} key={model.Model_ID}/>)}
          </ul> 
        </div> 
      )
    } else { 
      return (
        <FontAwesomeIcon icon={faSpinner} spin  size="lg" />
    )}
  }
    
  componentDidMount() {
     this.getModelsForMakeId();
  }

  getModelsForMakeId() {
    axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${this.props.id}?format=json`)
      .then(res => {
        this.setState({models: res.data.Results});
      })
  }

	render() {
    return (
      <div className="model-list">
        {this.displayModels()}
      </div>
    )
  }
};

export default ModelList;
