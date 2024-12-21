import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar";
import Add_ons_card from "./add_ons_card";
import { useState } from "react";

function Addson() {
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
    navigate('/Summary'); // Navigate to the next page after form submission
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
            <h1 className='text-4xl font-bold'>Pick add-ons</h1>
            <p className='text-coolgray mt-4 mb-9'>Add-ons help enhance your gaming experience.</p>
            <div className="cardContainer flex flex-col gap-4">
              <Add_ons_card
                title='Online Service'
                description='Access to multiplayer games'
                price= {10}
                isChecked={selectedAddOns.onlineService}
                onChange={() => toggleAddOn('onlineService')}
              />
              <Add_ons_card
                title='Larger Storage'
                description='Extra 1TB of cloud save'
                price= {10}
                isChecked={selectedAddOns.largerStorage}
                onChange={() => toggleAddOn('largerStorage')}
              />
              <Add_ons_card
                title='Customizable profile'
                description='Custom theme on your profile'
                price= {10}
                isChecked={selectedAddOns.customizableProfile}
                onChange={() => toggleAddOn('customizableProfile')}
              />
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

export default Addson
