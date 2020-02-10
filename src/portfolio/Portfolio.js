import React, { useState, useEffect } from 'react';
import { Input } from 'semantic-ui-react';
import Fund from './Fund';
import Heading from './Heading';

const Portfolio = (props) => {

  const { portfolio, setPortfolio } = props;

  useEffect(() => {
    const funds = props.funds.filter((fund) => fund.in_portfolio)
    setPortfolio({...portfolio, funds });
  }, []);

  const setPortfolioAmount = (amount) => {
    const funds = portfolio.funds.map((fund) => (
      fund.percent ?
      {...fund, amount: getFundAmount(fund.percent, amount)}
      : fund
    ))
    setPortfolio({ funds, amount });
  }

  const getFundAmount = (percent, amount) => {
    console.log('port', percent, amount)
    return percent/100 * amount;
  }

  const changePercent = (fundId, percent) => {
    const funds = portfolio.funds.map((fund) => {
      if (fund.id === fundId) {
        let amount = 0;
        if (portfolio.amount) {
          amount = getFundAmount(percent, portfolio.amount)
        }
        return { ...fund, percent, amount }
      }
      return fund;
    })
    console.log('fuff', funds)
    setPortfolio({ ...portfolio, funds })
  }


  return (
    <div>
      <div className='flex'>
        <h2>Total Amount to be invested</h2>
        <Input placeholder='Amount' onChange={(p, e) => setPortfolioAmount(e.value)} />
      </div>
      <Heading />
      {portfolio.funds.map((fund) => (
        <Fund fund={fund} changePercent={changePercent}/>
      ))}
    </div>
  )
};

export default Portfolio;