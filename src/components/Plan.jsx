import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import iconArcade from '../assets/icon-arcade.svg';
import iconAdvance from '../assets/icon-advanced.svg';
import iconPro from '../assets/icon-pro.svg';

const Plan = () => {
    const navigate = useNavigate();
    const [Plan, setPlan] = useState('arcade');

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
                        <p className='text-coolgray mt-4'>You have the option of monthly or yearly billing</p>
                        <form className='mt-10 flex gap-5' onSubmit={handleSubmit(onSubmit)}>
                            <label
                                onClick={() => handleChange('arcade')}
                                className={`border-2 p-3 pl-3 rounded-md cursor-pointer w-[120px] flex flex-col gap-7 ${Plan === 'arcade' ? 'border-purplishblue shadow-lg bg-magnolia' : 'border-gray-300'}`}
                                htmlFor="arcade"
                            >
                                <img className='w-8' src={iconArcade} alt="iconArcade" />
                                <div>
                                <p>Arcade</p>
                                <p className='text-coolgray'>$9/mo</p>
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
                                <p>Advance</p>
                                <p className='text-coolgray'>$9/mo</p>
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
                                <p>Pro</p>
                                <p className='text-coolgray'>$9/mo</p>
                                </div>
                                <input
                                    {...register('plan')}
                                    type="radio"
                                    value="pro"
                                    id="pro"
                                    className="hidden"
                                />
                            </label>

                            <div className="footer absolute bottom-0 flex justify-between w-[85%] pb-5">
                                <button onClick={handleGoBack} className='text-marineblue font-bold' type="button">Go Back</button>
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
