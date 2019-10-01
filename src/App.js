import React from 'react';
import MakeList from './Components/MakeList/MakeList';
import Offers from './Components/Offers/Offers';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>To będzie kalkulator raty leasingowej</h1>
      <Offers />
      <MakeList />
    </div>
  );
}

export default App;

