import React from 'react';
import axios from 'axios';
import './MakeList.css';

class MakeList extends React.Component {
	constructor(props){
    super(props);

    this.state = {
      makes: [],
    }
  }

  componentDidMount() {
      axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json`)
      .then(res => {
        this.setState({ makes: res.data.Results });
      })
  }

	render() {
    return (
      <div className="make-list">
        <p>Lista wszystkich marek samochodów osobowych</p>
        <ul>
          {this.state.makes.map( (make, key) => <li key={make.MakeId}>{make.MakeName}</li>)}
        </ul>
      </div>  
    )
  }
};

export default MakeList;
