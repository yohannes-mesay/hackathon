import React from 'react'
import Explore from '../ui/Explore';
import SingleServices from './singleService';

const LatestPosts = () => {
  return (
    <div className='LatestPostsBox'>
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

export default LatestPosts;