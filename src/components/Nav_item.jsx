import React from 'react'

const Nav_item = (props) => {
  return (
    <div className='flex align-middle w-full'>
      {/* Step Icon */}
      <div className="icon text-white flex items-center justify-center w-10 h-10 bg-transparent border border-1 border-lightblue rounded-full">
        {props.number}
      </div>

      {/* Step Info */}
      <div className="step-info ml-4">
        <div className="text-gray-300 uppercase text-sm">Step {props.number}</div>
        <div className="step-name uppercase text-white text-lg font-bold">{props.name}</div>
      </div>
    </div>
  )
}

export default Nav_item