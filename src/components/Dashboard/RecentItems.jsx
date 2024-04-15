import React from 'react'
import {Star} from "phosphor-react"

const RecentItems = () => {
  return (
    <div className='flex justify-between pl-5 pr-5 pt-1.5 pb-1.5  items-center'>
      <div className='flex items-center gap-3'>
        <div className='imageBox'></div>
        <div>
        <p>Samsung Ultra 22</p>
        <p>Product</p>
        </div>
      </div>
      <p>Done</p>
    </div>
  )
}

export default RecentItems