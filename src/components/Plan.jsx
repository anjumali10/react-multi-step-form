// src/components/Plan.jsx

import { useDispatch, useSelector } from "react-redux";
import { setBillingType, setBillingPlan } from "../redux/slice"; // Import the actions
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import iconArcade from "../assets/icon-arcade.svg";
import iconAdvance from "../assets/icon-advanced.svg";
import iconPro from "../assets/icon-pro.svg";
import Navbar from "./Navbar";

const Plan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { billingType, billingPlan } = useSelector((state) => state.form); // Get state from Redux

  const { register, handleSubmit } = useForm();

  const handleBillingTypeChange = () => {
    const newBillingType = billingType === "monthly" ? "yearly" : "monthly";
    dispatch(setBillingType(newBillingType));
  };

  const handlePlanChange = (plan) => {
    dispatch(setBillingPlan(plan)); // Dispatch the selected plan to Redux
  };

  const onSubmit = (data) => {
    console.log(data);
    navigate("/Addson");
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="main p-4 flex w-full gap-10 flex-col sm:flex-row">
      <div className="lg:w-[26%] w-full">
        <Navbar />
      </div>
      <div className="right flex-1 p-6 lg:p-10">
        <div className="plan">
          <h1 className="text-4xl font-bold">Select your plan</h1>
          <p className="text-coolgray mt-4">You have the option of monthly or yearly billing.</p>
          <form className="mt-10 flex flex-col sm:flex-row gap-5 sm:gap-10" onSubmit={handleSubmit(onSubmit)}>
            {/* Arcade Plan */}
            <label
              onClick={() => handlePlanChange("arcade")}
              className={`border-2 p-3 pl-3 rounded-md cursor-pointer w-full sm:w-[120px] flex flex-col items-start gap-7 ${
                billingPlan === "arcade" ? "border-purplishblue bg-magnolia" : ""
              }`}
              htmlFor="arcade"
            >
              <img className="w-8" src={iconArcade} alt="iconArcade" />
              <div>
                <p className="text-marineblue font-bold">Arcade</p>
                <p className="text-coolgray text-sm">{billingType === "monthly" ? "$9/mo" : "$90/yr"}</p>
                {billingType === "yearly" && <span className="text-sm text-marineblue">2 months free</span>}
              </div>
              <input {...register("plan")} type="radio" value="arcade" id="arcade" className="hidden" />
            </label>

            {/* Advance Plan */}
            <label
              onClick={() => handlePlanChange("advance")}
              className={`border-2 p-3 pl-3 rounded-md cursor-pointer w-full sm:w-[120px] flex flex-col items-start gap-7 ${
                billingPlan === "advance" ? "border-purplishblue bg-magnolia" : ""
              }`}
              htmlFor="advance"
            >
              <img className="w-8" src={iconAdvance} alt="iconAdvance" />
              <div>
                <p className="text-marineblue font-bold">Advance</p>
                <p className="text-coolgray text-sm">{billingType === "monthly" ? "$12/mo" : "$120/yr"}</p>
                {billingType === "yearly" && <span className="text-sm text-marineblue">2 months free</span>}
              </div>
              <input {...register("plan")} type="radio" value="advance" id="advance" className="hidden" />
            </label>

            {/* Pro Plan */}
            <label
              onClick={() => handlePlanChange("pro")}
              className={`border-2 p-3 pl-3 rounded-md cursor-pointer w-full sm:w-[120px] flex flex-col items-start gap-7 ${
                billingPlan === "pro" ? "border-purplishblue bg-magnolia" : ""
              }`}
              htmlFor="pro"
            >
              <img className="w-8" src={iconPro} alt="iconPro" />
              <div>
                <p className="text-marineblue font-bold">Pro</p>
                <p className="text-coolgray text-sm">{billingType === "monthly" ? "$15/mo" : "$150/yr"}</p>
                {billingType === "yearly" && <span className="text-sm text-marineblue">2 months free</span>}
              </div>
              <input {...register("plan")} type="radio" value="pro" id="pro" className="hidden" />
            </label>

            {/* Billing Type Toggle */}
            <div
              className="flex self-auto sm:absolute sm:bottom-[200px] justify-center items-center gap-4 bg-magnolia p-3 rounded-lg w-[80%] sm:w-[33%] mx-auto sm:mt-0"
              onClick={handleBillingTypeChange}
            >
              <span className={`text-sm font-bold ${billingType === "monthly" ? "text-marineblue" : "text-coolgray"}`}>
                Monthly
              </span>

              <div className="relative w-12 h-6 bg-marineblue rounded-full cursor-pointer">
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform ${
                    billingType === "yearly" ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>

              <span className={`text-sm font-bold ${billingType === "yearly" ? "text-marineblue" : "text-coolgray"}`}>
                Yearly
              </span>
            </div>

            {/* Form Footer */}
            <div className="footer relative bottom-5 sm:absolute sm:bottom-0 flex flex-col sm:flex-row justify-between w-[85%] sm:w-[45%] sm:pb-20 pb-5 mx-auto sm:mx-0 mt-8 sm:mt-0">
              <button onClick={handleGoBack} className="text-coolgray hover:text-marineblue font-bold" type="button">
                Go Back
              </button>
              <button className="bg-marineblue p-2 px-4 text-white rounded-md text-xs mt-4 sm:mt-0" type="submit">
                Next Step
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Plan;
