import React from 'react';
import { Card, Checkbox } from 'semantic-ui-react';

const FundCard = (props) => {

  return (
    <Card className='margin--std'>
      <Card.Content header={props.fund.fund_name} />
      <Card.Content description={props.fund.sub_category} />
      <Card.Content extra>
        <Checkbox label='Add to portfolio'
          checked={props.fund.in_portfolio}
          onClick={() => props.onClickHandler(props.fund.id)}
        />
      </Card.Content>
    </Card>
  )
};

export default FundCard;
