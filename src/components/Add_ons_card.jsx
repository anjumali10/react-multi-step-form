import React from 'react';
import iconCheckmark from '../assets/icon-checkmark.svg';

const Add_ons_card = ({ title, description, price, isChecked, onChange }) => {
  return (
    <div
      className={`border-2 p-4 rounded-lg flex justify-between items-center cursor-pointer transition-all duration-200 ${
        isChecked ? 'border-purplishblue bg-magnolia' : 'border-lightgray'
      } sm:w-[70%]`}
      onClick={onChange}
      role="checkbox"
      aria-checked={isChecked}
    >
      {/* Left Section */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Checkmark Box */}
        <div
          className={`w-5 h-5 rounded-md flex justify-center items-center border-2 transition-all duration-200 ${
            isChecked ? 'bg-purplishblue border-none' : 'bg-white border-lightgray'
          }`}
        >
          {isChecked && (
            <img className="w-2.5" src={iconCheckmark} alt="Checked" />
          )}
        </div>

        {/* Title and Description */}
        <div>
          <p className="text-marineblue font-bold text-sm md:text-lg">{title}</p>
          <p className="text-coolgray text-xs md:text-sm">{description}</p>
        </div>
      </div>

      {/* Price */}
      <p className="text-purplishblue text-sm md:text-md font-medium">
        +${price}/yr
      </p>
    </div>
  );
};

export default Add_ons_card;
