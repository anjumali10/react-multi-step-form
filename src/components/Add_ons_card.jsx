import React from 'react';
import iconCheckmark from '../assets/icon-checkmark.svg'

const Add_ons_card = (props) => {

  return (
    <div className={`border-2 border-lightgray p-4 rounded-lg w-[75%] flex justify-between items-center cursor-pointer ${props.isChecked ? 'border-purplishblue bg-magnolia':''}`}
    onClick={props.onChange}>
      <div className='flex items-center gap-10'>
        <div className={`w-5 h-5 rounded-md border-2 border-lightgray flex justify-center ${props.isChecked ? 'bg-purplishblue border-none': 'bg-white'}`}>
          <img className='w-2.5' src={iconCheckmark} alt="iconcheckmark" />
        </div>
        <div>
          <p className='text-marineblue font-bold text-lg'>{props.title}</p>
          <p className='text-coolgray'>{props.description}</p>
        </div>
      </div>
      <p className='text-purplishblue'>+${props.price}/yr</p>
    </div>
  )
}

export default Add_ons_card