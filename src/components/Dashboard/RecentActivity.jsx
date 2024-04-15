import React from 'react'
import Explore from '../ui/Explore';
import SingleServices from './singleService';
import RecentItems from './RecentItems';

const RecentActivity = () => {
  return (
    <div className='recentActivitiesBox'>
        <div className='upcomingHeader pb-4'>
            <p className='upcomingEvnets'>Recent Activity</p>   
            <Explore className="exploreButton"/>   
        </div>
        <RecentItems/>
        <hr />
        <RecentItems/>
        <hr />
        <RecentItems/>
    </div>
  )
}

export default RecentActivity;