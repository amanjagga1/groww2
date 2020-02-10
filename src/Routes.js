import React from 'react';
import Funds from './funds/Funds';
import Portfolio from './portfolio/Portfolio';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/portfolio">
          <Portfolio
            funds={props.funds}
            portfolio={props.portfolio}
            setPortfolio={props.setPortfolio}
          />
        </Route>
        <Route path="/">
          <Funds
            setPortfolio={props.setPortfolio}
            funds={props.funds}
            setFunds={props.setFunds}
          />
        </Route>
      </Switch>
    </Router>
  )
};

export default Routes;