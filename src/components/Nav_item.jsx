import React from 'react';
import clsx from 'clsx';

const Nav_item = (props) => {
  const { number, name, isActive } = props;

  return (
    <div className="flex items-center w-full sm:flex-row flex-col text-center sm:text-left">
      {/* Step Icon */}
      <div
        className={clsx(
          "icon font-bold flex items-center justify-center w-10 h-10 border-2 rounded-full",
          isActive
            ? "text-marineblue border-lightblue bg-lightblue"
            : "border-lightblue text-white bg-transparent"
        )}
      >
        {number}
      </div>

      {/* Step Info (Only visible on larger screens) */}
      <div className="step-info sm:ml-4 mt-2 sm:mt-0">
        <div className="text-coolgray uppercase text-xs sm:text-sm hidden sm:block">
          Step {number}
        </div>
        <div className="step-name uppercase text-sm sm:text-md font-bold text-white hidden sm:block">
          {name}
        </div>
      </div>
    </div>
  );
};

export default Nav_item;
