import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import iconArcade from '../assets/icon-arcade.svg';
import iconAdvance from '../assets/icon-advanced.svg';
import iconPro from '../assets/icon-pro.svg';

const Plan = () => {
    const navigate = useNavigate();
    const [Plan, setPlan] = useState();
    const [billingType, setBillingType] = useState("monthly");

    const handleChange = (value) => {
        if (Plan !== value) {
            setPlan(value);
        }
    };

    const onSubmit = (data) => {
        console.log(data); // Handle form submission
        navigate('/Addson'); // Navigate to the next page after form submission
    };

    const handleGoBack = () => {
        // Handle the 'Go Back' button (optional)
        navigate(-1); // This takes the user to the previous page in the history
    };

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm();

    return (
        <>
            <div className="main p-4 flex w-[100%] gap-10">
                <Navbar />
                <div className="right relative w-full h-min-[80vh] p-10 px-20">
                    <div className="plan">
                        <h1 className='text-4xl font-bold'>Select your plan</h1>
                        <p className='text-coolgray mt-4'>You have the option of monthly or yearly billing.</p>
                        <form className='mt-10 flex gap-5' onSubmit={handleSubmit(onSubmit)}>
                            <label
                                onClick={() => handleChange('arcade')}
                                className={`border-2 p-3 pl-3 rounded-md cursor-pointer w-[120px] flex flex-col gap-7 ${Plan === 'arcade' ? 'border-purplishblue shadow-lg bg-magnolia' : 'border-gray-300'}`}
                                htmlFor="arcade"
                            >
                                <img className='w-8' src={iconArcade} alt="iconArcade" />
                                <div>
                                    <p className='text-marineblue font-bold'>Arcade</p>
                                    <p className='text-coolgray text-sm'>{billingType === 'monthly' ? '$9/mo': '$90/yr'}</p>
                                    {billingType === 'yearly' && <span className='text-sm text-marineblue'>2 months free</span>}
                                </div>
                                <input
                                    {...register('plan')}
                                    type="radio"
                                    value="arcade"
                                    id="arcade"
                                    className="hidden"
                                />
                            </label>

                            <label
                                onClick={() => handleChange('advance')}
                                className={`border-2 p-3 pl-3 rounded-md cursor-pointer w-[120px] flex flex-col gap-7 ${Plan === 'advance' ? 'border-purplishblue shadow-lg bg-magnolia' : 'border-gray-300'}`}
                                htmlFor="advance"
                            >
                                <img className='w-8' src={iconAdvance} alt="iconAdvance" />
                                <div>
                                    <p className='text-marineblue font-bold'>Advance</p>
                                    <p className='text-coolgray text-sm'>{billingType === 'monthly' ? '$12/mo': '$120/yr'}</p>
                                    {billingType === 'yearly' && <span className='text-sm text-marineblue'>2 months free</span>}
                                </div>
                                <input
                                    {...register('plan')}
                                    type="radio"
                                    value="advance"
                                    id="advance"
                                    className="hidden"
                                />
                            </label>

                            <label
                                onClick={() => handleChange('pro')}
                                className={`border-2 p-3 pl-3 rounded-md cursor-pointer w-[120px] flex flex-col gap-7 ${Plan === 'pro' ? 'border-purplishblue shadow-lg bg-magnolia' : 'border-gray-300'}`}
                                htmlFor="pro"
                            >
                                <img className='w-8' src={iconPro} alt="iconPro" />
                                <div>
                                    <p className='text-marineblue font-bold'>Pro</p>
                                    <p className='text-coolgray text-sm'>{billingType === 'monthly' ? '$15/mo': '$150/yr'}</p>
                                    {billingType === 'yearly' && <span className='text-sm text-marineblue'>2 months free</span>}
                                </div>
                                <input
                                    {...register('plan')}
                                    type="radio"
                                    value="pro"
                                    id="pro"
                                    className="hidden"
                                />
                            </label>
                            <div className="flex self-auto absolute bottom-[150px] justify-center items-center gap-4 bg-magnolia p-3 rounded-lg w-[39%] mx-auto">
                                {/* Monthly Label */}
                                <span
                                    className={`text-sm font-medium ${billingType === "monthly" ? "text-marineblue" : "text-coolgray"
                                        }`}
                                >
                                    Monthly
                                </span>

                                {/* Toggle Button */}
                                <div
                                    className="relative w-12 h-6 bg-marineblue rounded-full cursor-pointer transition peer-checked:bg-marineblue"
                                    onClick={() =>
                                        setBillingType(billingType === "monthly" ? "yearly" : "monthly")
                                    }
                                >
                                    <div
                                        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform ${billingType === "yearly" ? "translate-x-6" : ""
                                            }`}
                                    ></div>
                                </div>

                                {/* Yearly Label */}
                                <span
                                    className={`text-sm font-medium ${billingType === "yearly" ? "text-marineblue" : "text-coolgray"
                                        }`}
                                >
                                    Yearly
                                </span>
                            </div>


                            <div className="footer absolute bottom-0 flex justify-between w-[85%] pb-5">
                                <button onClick={handleGoBack} className='text-coolgray hover:text-marineblue font-bold' type="button">Go Back</button>
                                <button
                                    disabled={!isValid}
                                    className='bg-marineblue p-2 px-4 text-white rounded-md text-xs'
                                    type="submit"
                                >
                                    Next Step
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Plan;
