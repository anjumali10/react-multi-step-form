import React from 'react';
import iconCheckmark from '../assets/icon-checkmark.svg'

const Add_ons_card = () => {
  return (
    <div className='border-2 border-lightgray p-5 rounded-md w-[85%] flex justify-between items-center'>
      <div className='flex items-center gap-10'>
        <div className='w-5 h-5 rounded-md border-2 border-lightgray bg-purplishblue flex justify-center'>
          <img className='w-2.5' src={iconCheckmark} alt="iconcheckmark" />
        </div>
        <div>
          <p className='text-marineblue font-bold text-lg'>Online service</p>
          <p className='text-coolgray'>Access to multiplayer games</p>
        </div>
      </div>
      <p className='text-coolgray'>+$10/yr</p>
    </div>
  )
}

export default Add_ons_card