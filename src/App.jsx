import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission
    navigate('/Plan'); // Navigate to the next page after form submission
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
            <h1 className='text-4xl font-bold'>Personal info</h1>
            <p className='text-coolgray mt-4'>Please provide your name, email address, and phone number</p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 pt-5">
              {/* register your input into the hook by invoking the "register" function */}
              <div className="name flex flex-col gap-1">
                <label htmlFor="name" className="text-sm">Name</label>
                <input className="p-2 focus:outline-none border border-1 border-coolgray rounded-md" type = 'text' placeholder="e.g. Johnson" {...register("name", {required: true})} />
              </div>

              {/* include validation with required or other standard HTML validation rules */}
              <div className="email flex flex-col gap-1">
                <label htmlFor="email" className="text-sm">Email Address</label>
                <input className="p-2 focus:outline-none border border-1 border-coolgray rounded-md" placeholder="e.g. johnson@gmail.com" type="email" {...register("email", { required: true })} />
              </div>

              <div className="ph flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm">Phone Number</label>
                <input className="p-2 focus:outline-none border border-1 border-coolgray rounded-md" type="phone" placeholder="e.g. +92 312 5522745" {...register("phone", { required: true })} />
              </div>
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}

              <div className="footer absolute bottom-0 flex justify-between w-[85%] pb-5">
                <button onClick={handleGoBack} className='text-marineblue font-bold' type="button">Go Back</button>
                <button onClick={onSubmit} disabled = {!isValid} className='bg-marineblue p-2 px-4 text-white rounded-md text-xs'>Next Step</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
