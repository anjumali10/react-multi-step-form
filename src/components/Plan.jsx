import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Plan = () => {
    const navigate = useNavigate();

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
        watch,
        formState: { errors, isValid },
      } = useForm()
    return (
        <>
            <div className="main p-4 flex w-[100%] gap-10">
                <Navbar />
                <div className="right relative w-full h-min-[80vh] p-10 px-20">
                    <div className="plan">
                        <h1 className='text-4xl font-bold'>Select your plan</h1>
                        <p className='text-coolgray mt-4'>You have the option of monthly or yearly billing</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" />
                        </form>
                        <div className="footer absolute bottom-0 flex justify-between w-[85%] pb-5">
                            <button onClick={handleGoBack} className='text-marineblue font-bold' type="button">Go Back</button>
                            <button onClick={onSubmit} className='bg-marineblue p-2 px-4 text-white rounded-md text-xs' type="submit">Next Step</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Plan