import React from 'react';
import clsx from 'clsx';

const Nav_item = (props) => {
  const { number, name, isActive } = props;

  return (
    <div className='flex align-middle w-full'>
      {/* Step Icon */}
      <div className={clsx(
        "icon mt-0.5 font-bold flex items-center justify-center w-10 h-10 bg-transparent border-2 rounded-full",
        isActive ? 'text-marineblue border-lightblue bg-lightblue' : 'border-lightblue text-white'
      )}>
        {number}
      </div>

      {/* Step Info */}
      <div className="step-info ml-4">
        <div className="text-coolgray uppercase text-sm">Step {number}</div>
        <div className="step-name uppercase text-md font-bold text-white">
          {name}
        </div>
      </div>
    </div>
  );
}

export default Nav_item;
