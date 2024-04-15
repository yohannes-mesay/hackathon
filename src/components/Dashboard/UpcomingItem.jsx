import React from 'react'

const UpcomingItem = () => {
  return (
    <div className='flex justify-between pl-5 pr-5 pt-4 items-center'>
      <p className='eventDesc'>10:00AM</p>
      <div className='upItemsDecor'>
        <div className='w-2px separator'></div>
        <div>
            <p className='eventName'>Event name</p>
            <p className='eventDesc'>Host name</p>
        </div>
      </div>
        <p className='eventDesc'>April,20</p>
    </div>
  )
}

export default UpcomingItem
