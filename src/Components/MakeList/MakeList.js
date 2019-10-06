import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Make from './Make/Make';
import './MakeList.css';

class MakeList extends React.Component {
	constructor(props){
    super(props);

    this.state = {
      makes: [],
    }

    this.getMakes = this.getMakes.bind(this);
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
          <p>Lista wszystkich marek i modeli samochodów osobowych</p>
          <ul>
            {this.state.makes.map( make => <Make name={make.MakeName} id={make.MakeId} key={make.MakeId}/>)}
          </ul> 
        </div> 
      )
    } else { 
      return (
      <FontAwesomeIcon icon={faSpinner} spin  size="lg" />
    )}
  }

	render() {
    return (
      <>
        <div className="make-search">
          <p>Wybierz markę pojazdu (filtr w przygotowaniu)</p>
          <input type="text" placeholder="marka pojazdu"></input>
        </div>
        {this.displayMakes()};
      </>
    )
  }
};

export default MakeList;
