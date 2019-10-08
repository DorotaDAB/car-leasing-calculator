import React from 'react';
import MakeList from '../MakeList/MakeList';
import Offers from '../Offers/Offers';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faSearchDollar } from '@fortawesome/free-solid-svg-icons';


class HomePage extends React.Component {
  render () {
    return (
      <div className="home-page--container">
        <div className="home-page--nav">
          <h1>Kalkulator raty leasingowej</h1>
        </div>
        <div className="home-page--info">
          <p>Na naszej stronie możesz:</p>
          <div className="home-page--offer">
            <div className="home-page--offer-icon">
              <FontAwesomeIcon icon={faCar} size="lg"/> 
              <p>Wyszukać samochód</p>
            </div>
            <div className="home-page--offer-icon">
              <FontAwesomeIcon icon={faSearchDollar} size="lg" /> 
              <p>Obliczyć ratę leasingową</p>
            </div>
          </div>
          <p>Sprawdź naszą ofertę!</p>
        </div>
        <div className="home-page--main">
          <MakeList />  
          <Offers />
        </div>
      </div>
    );
  }
}

export default HomePage;

