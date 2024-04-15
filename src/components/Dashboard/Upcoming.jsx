import React from 'react'
import Explore from '../ui/Explore';
import UpcomingItem from './UpcomingItem';

const Upcoming = () => {
  return (
    <div className='upcomingEventsBox'>
        <div className='upcomingHeader'>
            <p className='upcomingEvnets'>Upcoming Events</p>   
            <Explore className="exploreButton"/>   
        </div>
        <UpcomingItem/>
        <UpcomingItem/>
        <UpcomingItem/>
    </div>
  )
}

export default Upcoming;