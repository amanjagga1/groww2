import React from 'react';
import { Input } from 'semantic-ui-react';

const Fund = ({fund, changePercent}) => {
  return (
    <div className='flex'>
      <span style={{width: '350px'}}>{fund.fund_name }</span>
      <Input
        placeholder='percentage'
        value={fund.percent}
        onChange={(p, e) => changePercent(fund.id, e.value)}
      />
      <span>{fund.amount}</span>
    </div>
  )
}
export default Fund;