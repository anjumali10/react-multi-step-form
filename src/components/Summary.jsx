import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar";
import { useState } from "react";

function Summary() {
  const navigate = useNavigate();
  const [selectedAddOns, setSelectedAddOns] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const toggleAddOn = (addOn) => {
    setSelectedAddOns((prevState) => ({
      ...prevState,
      [addOn]: !prevState[addOn],
    }));
  };

  const onSubmit = (data) => {
    console.log(data); // Handle form submission
    navigate('/Thankyou'); // Navigate to the next page after form submission
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
          <div className="p-info">
            <h1 className='text-4xl font-bold'>Finishing up</h1>
            <p className='text-coolgray mt-4 mb-9'>Double-check everything looks OK before confirming.</p>
            <div className="bg-magnolia w-[75%] p-5">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-marineblue font-bold">Arcade (Monthly)</p>
                  <p className="text-coolgray underline">change</p>
                </div>
                <p className="text-marineblue font-bold">$9/mo</p>
              </div>
              <div className="line w-[95%] h-0.5 bg-lightgray mx-auto my-5"></div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <p className="text-coolgray">Online service</p>
                  <p className="text-marineblue">+$1/mo</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-coolgray">Larger storage</p>
                  <p className="text-marineblue">+$2/mo</p>
                </div>
              </div>
            </div>
            <div className="p-5 flex justify-between items-center w-[75%]">
              <p className="text-coolgray">Total (per month)</p>
              <p className="text-purplishblue text-lg font-bold">+$12/mo</p>
            </div>
            <div className="footer absolute bottom-0 flex justify-between w-[85%] pb-5">
              <button onClick={handleGoBack} className='text-coolgray hover:text-marineblue font-bold' type="button">Go Back</button>
              <button
                disabled={!isValid}
                className='bg-marineblue p-2 px-4 text-white rounded-md text-xs'
                type="submit"
                onClick={onSubmit}
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Summary
