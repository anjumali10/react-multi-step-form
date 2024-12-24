import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission
    navigate("/Plan"); // Navigate to the next page after form submission
  };

  const handleGoBack = () => {
    navigate(-1); // This takes the user to the previous page in the history
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm();

  return (
    <>
      <div className="main flex flex-col lg:flex-row gap-10 p-4 w-full">
        {/* Navbar */}
        <div className="lg:w-[26%] w-full">
          <Navbar />
        </div>

        {/* Right Section */}
        <div className="right flex-1 p-10">
          <div className="p-info">
            <h1 className="text-2xl lg:text-4xl font-bold">Personal info</h1>
            <p className="text-coolgray mt-4">
              Please provide your name, email address, and phone number.
            </p>

            {/* Form Section */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5 pt-5"
            >
              {/* Name Input */}
              <div className="name flex flex-col gap-1">
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
                <input
                  className="p-2 focus:outline-none border border-1 border-coolgray rounded-md sm:w-[70%]"
                  type="text"
                  placeholder="e.g. Johnson"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    Name is required
                  </span>
                )}
              </div>

              {/* Email Input */}
              <div className="email flex flex-col gap-1">
                <label htmlFor="email" className="text-sm">
                  Email Address
                </label>
                <input
                  className="p-2 focus:outline-none border border-1 border-coolgray rounded-md sm:w-[70%]"
                  type="email"
                  placeholder="e.g. johnson@gmail.com"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    Email is required
                  </span>
                )}
              </div>

              {/* Phone Number Input */}
              <div className="ph flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm">
                  Phone Number
                </label>
                <input
                  className="p-2 focus:outline-none border border-1 border-coolgray rounded-md sm:w-[70%]"
                  type="phone"
                  placeholder="e.g. +92 312 5522745"
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">
                    Phone number is required
                  </span>
                )}
              </div>

              {/* Form Footer */}
              <div className="footer relative bottom-5 sm:absolute sm:bottom-0 flex flex-col sm:flex-row justify-between w-[85%] sm:w-[45%] sm:pb-20 pb-5 mx-auto sm:mx-0 mt-8 sm:mt-0">
                <button onClick={handleGoBack} className='text-coolgray hover:text-marineblue font-bold' type="button">Go Back</button>
                <button
                  onClick={onSubmit}
                  className='bg-marineblue p-2 px-4 text-white rounded-md text-xs mt-4 sm:mt-0'
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
}

export default App;
