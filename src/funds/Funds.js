import React, { useEffect, Fragment, useState } from "react";
import { Input, Button } from "semantic-ui-react";
import {
  Link
} from "react-router-dom";
import FundsList from "./FundsList";
import { debounce } from '../utils/utils';

const Funds = (props) => {

  const DEFAULT_NO_OF_FUNDS = 6;

  const limitFunds = (funds) => {
    return funds.length > DEFAULT_NO_OF_FUNDS ?
      funds.slice(0, DEFAULT_NO_OF_FUNDS)
      : funds;
  }
  const [filteredFunds, setFilteredFunds] = useState(limitFunds(props.funds))
  useEffect(() => {
    setFilteredFunds((limitFunds(props.funds)))
  }, [props.funds]);

  const filterFunds = (searchValue) => {
    const filterCriteria = (fund) => fund.fund_name.replace(' ', '').toLowerCase().includes(searchValue.replace(' ', '').toLowerCase())
    const funds = props.funds.filter(filterCriteria);
    setFilteredFunds(limitFunds(funds))
  }
  const debounceFilter = debounce(filterFunds, 500)

  const addOrRemove = (fundId) => {
    const fund = props.funds.find((fd) => fd.id === fundId)
    fund.in_portfolio = !fund.in_portfolio
    props.setFunds(props.funds)
  }

  return (
    <Fragment>
      <Input
        className='flex'
        placeholder='Search Mutual funds'
        onChange={(p, e) => debounceFilter(e.value)}
      />
      <FundsList
        funds={filteredFunds}
        addOrRemove={addOrRemove}
        setPortfolio={props.setPortfolio}
      />
      <Link to='portfolio'>
        <Button primary floated='right'>Next</Button>
      </Link>
    </Fragment>
  );
};

export default Funds;