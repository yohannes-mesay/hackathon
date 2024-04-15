import React from 'react'
import Explore from '../ui/Explore';

const OrderStatus = () => {
  return (
    <div className='orderStatusBox'>
        <div className='orderHeader'>
            <p className='orderStatus'>Order Status</p>   
            <Explore className="exploreButton"/>   
        </div>
    </div>
  )
}

export default OrderStatus;
