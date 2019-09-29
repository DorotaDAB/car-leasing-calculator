import React from 'react';
import VehicleList from './Components/VehicleList/VehicleList';
import Offers from './Components/Offers/Offers';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Kalkulator raty leasingowej</h1>
      <VehicleList />
      <Offers />
    </div>
  );
}

export default App;

