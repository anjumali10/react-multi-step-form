import React from 'react'

const Nav_item = (props) => {
  return (
    <div className='flex align-middle w-full'>
      {/* Step Icon */}
      <div className="icon mt-0.5 text-white font-bold flex items-center justify-center w-10 h-10 bg-transparent border border-2 border-lightblue rounded-full">
        {props.number}
      </div>

      {/* Step Info */}
      <div className="step-info ml-4">
        <div className="text-coolgray uppercase text-sm">Step {props.number}</div>
        <div className="step-name uppercase text-white text-md font-bold">{props.name}</div>
      </div>
    </div>
  )
}

export default Nav_item