import React from 'react'
import Navbar from './Navbar'
import iconThankYou from '../assets/icon-thank-you.svg'

const Thankyou = () => {
  return (
    <>
    <div className="main p-4 flex w-[100%] gap-10">
        <Navbar/>
        <div className="right relative w-full h-min-[80vh] p-10 px-20 flex flex-col items-center justify-center gap-5">
            <img src= {iconThankYou} alt="iconthankyou" />
            <p className='text-marineblue text-3xl font-bold'>Thankyou!</p>
            <p className='text-coolgray w-[50%] text-center'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need our support, please feel free to email us at support@loremgaming.com</p>
        </div>
    </div>
    </>
  )
}

export default Thankyou