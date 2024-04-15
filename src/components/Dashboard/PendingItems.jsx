import React from 'react'
import {Star} from "phosphor-react"

const PendingItems = () => {
  return (
    <div className='flex justify-between pl-5 pr-5 pt-3  items-center'>
      <div className='flex items-center gap-3'>
        <div className='imageBox'></div>
        <div>
        <p>Samsung Ultra 22</p>
        <p>Product</p>
        </div>
      </div>
      <div className='flex gap-1'>
        <Star className='translate-y-1'/>
        <p>3.8</p>
      </div>
    </div>
  )
}

export default PendingItems
