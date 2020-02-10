import React, { useState, useEffect } from 'react';
import './App.css';
import Routes from './Routes';
import axios from 'axios';

function App() {

  const [funds, setFunds] = useState([]);

  const [portfolio, setPortfolio] = useState({
    funds: [],
    amount: 0
  });

  useEffect(() => {
    getFunds();
  }, [])

  async function getFunds() {
    const funds = await axios.get('http://www.mocky.io/v2/5e3415ce3000008900d962b1');
    setFunds(funds.data.content);
  }

  return (
    <Routes
      funds={funds}
      setFunds={setFunds}
      portfolio={portfolio}
      setPortfolio={setPortfolio}
    />
  );
}



export default App;
