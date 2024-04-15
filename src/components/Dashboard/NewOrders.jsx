import React from 'react'
import Explore from '../ui/Explore';
import SingleServices from './singleService';

const NewOrders = () => {
  return (
    <div className='NewOrdersBox'>
        <div className='upcomingHeader pb-4'>
            <p className='upcomingEvnets'> Latest Posts</p>   
            <Explore className="exploreButton"/>   
        </div>
        <SingleServices/>
        <hr />
        <SingleServices/>
        <hr />
        <SingleServices/>
    </div>
  )
}

export default NewOrders;