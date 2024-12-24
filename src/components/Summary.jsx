import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

function Summary() {
  const navigate = useNavigate();
  const [selectedAddOns, setSelectedAddOns] = useState({
    onlineService: true, // Default values for demonstration
    largerStorage: true,
    customizableProfile: false,
  });

  const planDetails = {
    name: "Arcade",
    billing: "Monthly",
    price: 9,
  };

  const addOnsList = [
    { key: "onlineService", name: "Online service", price: 1 },
    { key: "largerStorage", name: "Larger storage", price: 2 },
    { key: "customizableProfile", name: "Customizable profile", price: 2 },
  ];

  const totalPrice =
    planDetails.price +
    addOnsList.reduce((total, addOn) => {
      return selectedAddOns[addOn.key] ? total + addOn.price : total;
    }, 0);

  const onSubmit = () => {
    navigate("/Thankyou"); // Navigate to the next page after confirmation
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <>
      <div className="main p-4 flex w-full gap-10 flex-col sm:flex-row">
        <div className="lg:w-[26%] w-full">
          <Navbar />
        </div>
        <div className="right flex-1 p-6 lg:p-10">
          <div className="p-info">
            <h1 className="text-4xl sm:text-5xl font-bold">Finishing up</h1>
            <p className="text-coolgray mt-4 mb-9 text-sm sm:text-base">
              Double-check everything looks OK before confirming.
            </p>

            {/* Plan Summary */}
            <div className="bg-magnolia p-5 rounded-lg sm:w-[70%]">
              <div className="flex justify-between items-center mb-4">
                <div className="flex flex-col">
                  <p className="text-marineblue font-bold text-base sm:text-lg">
                    {planDetails.name} ({planDetails.billing})
                  </p>
                  <p
                    className="text-coolgray underline cursor-pointer text-sm sm:text-base"
                    onClick={() => navigate("/Plan")}
                  >
                    Change
                  </p>
                </div>
                <p className="text-marineblue font-bold text-base sm:text-lg">
                  ${planDetails.price}/{planDetails.billing === "Monthly" ? "mo" : "yr"}
                </p>
              </div>

              <div className="line w-[95%] h-0.5 bg-lightgray mx-auto my-5"></div>

              {/* Add-Ons */}
              <div className="flex flex-col gap-4">
                {addOnsList.map(
                  (addOn) =>
                    selectedAddOns[addOn.key] && (
                      <div
                        key={addOn.key}
                        className="flex justify-between items-center"
                      >
                        <p className="text-coolgray text-sm sm:text-base">{addOn.name}</p>
                        <p className="text-marineblue text-sm sm:text-base">
                          +${addOn.price}/{planDetails.billing === "Monthly" ? "mo" : "yr"}
                        </p>
                      </div>
                    )
                )}
              </div>
            </div>

            {/* Total Price */}
            <div className="p-5 flex justify-between items-center w-full sm:w-[70%]">
              <p className="text-coolgray text-sm sm:text-base">Total (per {planDetails.billing})</p>
              <p className="text-purplishblue text-lg sm:text-xl font-bold">
                +${totalPrice}/{planDetails.billing === "Monthly" ? "mo" : "yr"}
              </p>
            </div>

            {/* Form Footer */}
            <div className="footer absolute sm:bottom-0 flex flex-col sm:flex-row justify-between w-[85%] sm:w-[45%] sm:pb-20 pb-5 mx-auto sm:mx-0 mt-8 sm:mt-0">
              <button onClick={handleGoBack} className='text-coolgray hover:text-marineblue font-bold' type="button">Go Back</button>
              <button
                onClick={onSubmit}
                className='bg-marineblue p-2 px-4 text-white rounded-md text-xs mt-4 sm:mt-0'
                type="submit"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Summary;
