import React, { Fragment } from "react"
import FundCard from "./FundCard"

const FundsList = (props) => {
  return (
    <div className='flex-wrap'>
      {props.funds.map((fund) => (
        <FundCard fund={fund} onClickHandler={props.addOrRemove}/>
      ))}
    </div>
  )
}

export default FundsList;