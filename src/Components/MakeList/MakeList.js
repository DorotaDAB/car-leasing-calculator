import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faSearch } from '@fortawesome/free-solid-svg-icons';
import Make from './Make/Make';
import './MakeList.css';

class MakeList extends React.Component {
	constructor(props){
    super(props);

    this.state = {
      makes: [],
      currentFilter: ""
    }

    this.getMakes = this.getMakes.bind(this);
    this.filterValueHandler = this.filterValueHandler.bind(this)
  }
  
  getMakes() {
    axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json`)
      .then(res => {
        this.setState({ makes: res.data.Results});
      })
  }

  componentDidMount() {
    this.getMakes();
  }  

  displayMakes() {
    if (this.state.makes.length > 0) {
      return (
        <div className="make-list">
          <ul>
            {this.state.makes
              .filter(make => {return make.MakeName.toLowerCase().startsWith(this.state.currentFilter.toLowerCase())})
              .map( make => <Make name={make.MakeName} id={make.MakeId} key={make.MakeId}/>)}
          </ul> 
        </div> 
      )
    } else { 
      return (
      <FontAwesomeIcon icon={faSpinner} spin  size="lg" />
    )}
  }

  filterValueHandler(ev) {
    this.setState({currentFilter: ev.target.value});
  }

	render() {
    return (
      <>
        <div className="make-container">
        <p>Lista marek i modeli samochodów osobowych</p>
          <div className="make-search">
            <FontAwesomeIcon icon={faSearch}/>
            <input type="text" placeholder="Wpisz markę" onChange={this.filterValueHandler}></input> 
          </div>
            {this.displayMakes()}
        </div>
      </>
    )
  }
};

export default MakeList;
