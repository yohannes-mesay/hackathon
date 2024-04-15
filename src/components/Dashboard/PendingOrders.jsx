import React from 'react'
import Explore from '../ui/Explore';
import PendingItems from './PendingItems';

const PendingOrders = () => {
  return (
    <div className='pendingOrdersBox'>
        <div className='upcomingHeader pb-4'>
            <p className='upcomingEvnets'>Pending Orders</p>   
            <Explore className="exploreButton"/>   
        </div>
        <PendingItems/>
        <PendingItems/>
        <PendingItems/>
    </div>
  )
}

export default PendingOrders;