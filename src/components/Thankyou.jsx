import React from 'react';
import Navbar from './Navbar';
import iconThankYou from '../assets/icon-thank-you.svg';

const Thankyou = () => {
  return (
    <div className="main p-4 flex w-full gap-10 flex-col sm:flex-row">
      <div className="lg:w-[26%] w-full">
          <Navbar />
        </div>
        <div className="right flex-1 p-6 lg:p-10 flex flex-col justify-center items-center gap-5">
        <img className="w-16 sm:w-24" src={iconThankYou} alt="iconthankyou" />
        <p className='text-marineblue text-3xl sm:text-4xl font-bold'>Thank You!</p>
        <p className='text-coolgray w-full sm:w-[50%] text-center sm:text-left'>
          Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need our support, please feel free to email us at support@loremgaming.com
        </p>
      </div>
    </div>
  );
};

export default Thankyou;
