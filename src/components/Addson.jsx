// src/components/Addson.jsx

import { useDispatch, useSelector } from "react-redux";
import { setSelectedAddOns } from "../redux/slice"; // Import the action
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Add_ons_card from "./add_ons_card";

function Addson() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get selected add-ons from Redux store
  const selectedAddOns = useSelector((state) => state.form.selectedAddOns);

  const addOns = [
    {
      id: "onlineService",
      title: "Online Service",
      description: "Access to multiplayer games",
      price: 1,
    },
    {
      id: "largerStorage",
      title: "Larger Storage",
      description: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      id: "customizableProfile",
      title: "Customizable Profile",
      description: "Custom theme on your profile",
      price: 2,
    },
  ];

  const toggleAddOn = (addOn) => {
    // Update the selected add-ons in the Redux store
    dispatch(
      setSelectedAddOns({
        ...selectedAddOns,
        [addOn]: !selectedAddOns[addOn],
      })
    );
  };

  const onSubmit = (data) => {
    console.log("Selected Add-ons: ", selectedAddOns);
    navigate("/Summary"); // Navigate to the next page after form submission
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="main flex flex-col lg:flex-row gap-10 p-4 w-full">
      {/* Navbar */}
      <div className="lg:w-[26%] w-full">
        <Navbar />
      </div>

      {/* Right Section */}
      <div className="right flex-1 p-6 lg:p-10">
        <div className="p-info">
          <h1 className="text-2xl lg:text-4xl font-bold">Pick add-ons</h1>
          <p className="text-coolgray mt-4 mb-9">
            Add-ons help enhance your gaming experience.
          </p>

          {/* Add-ons Cards */}
          <div className="cardContainer flex flex-col gap-4">
            {addOns.map((addOn) => (
              <Add_ons_card
                key={addOn.id}
                title={addOn.title}
                description={addOn.description}
                price={addOn.price}
                isChecked={selectedAddOns[addOn.id]}
                onChange={() => toggleAddOn(addOn.id)}
              />
            ))}
          </div>

          {/* Form Footer */}
          <div className="footer absolute sm:bottom-0 flex flex-col sm:flex-row justify-between w-[85%] sm:w-[45%] sm:pb-20 pb-5 mx-auto sm:mx-0 mt-8 sm:mt-0">
            <button onClick={handleGoBack} className="text-coolgray hover:text-marineblue font-bold" type="button">
              Go Back
            </button>
            <button
              onClick={onSubmit}
              className="bg-marineblue p-2 px-4 text-white rounded-md text-xs mt-4 sm:mt-0"
              type="submit"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addson;
