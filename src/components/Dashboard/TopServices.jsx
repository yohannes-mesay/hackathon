import React from 'react'
import Explore from '../ui/Explore';
import SingleServices from './singleService';

const TopServices = () => {
  return (
    <div className='topServicesBox'>
        <div className='upcomingHeader pb-4'>
            <p className='upcomingEvnets'>Pending Orders</p>   
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

export default TopServices;