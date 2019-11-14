import React from 'react';
import './Offers.css';

class Offers extends React.Component {  
  
  calculateLeaseRate() {
    alert('W przygotowaniu');
  }

	render() {
    return (
      <div className="offers">
        <p>Masz już pojazd? Sfinansujemy go dla Ciebie!</p>
        <form className="input-form">
          <label for="term">Liczba rat (24-60)</label>
          <input className="input" type="number" label="value" min="24" max="60.000" step="1"></input>
        </form>
        <form className="input-form">
          <label for="value">Podaj wartosc pojazdu:</label>
          <input className="input" type="number" label="value" min="0" max="500000" step="1"></input>
        </form>
        <form className="input-form">
          <label for="contribution">Opłata wstępna (1-40%):</label>
          <input className="input" type="number" label="contribution" min="0" max="40.000" step="1"></input>
        </form>
        <form className="input-form">
          <label for="residual">Wartosć wykupu (1-40%):</label>
          <input type="number" label="residual" min="0" max="40.000" step="1"></input>
        </form>
        <button onClick={this.calculateLeaseRate}>Oblicz ratę</button>
      </div>
    )}
};

export default Offers;
