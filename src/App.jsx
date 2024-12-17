import { useForm } from "react-hook-form"
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className="main p-4 flex w-[100%] gap-10">
        <Navbar />
        <div className="right relative bg-green-50 w-full h-min-[80vh] p-10 px-20">
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
                <button className='text-marineblue font-bold'>Go Back</button>
                <button className='bg-marineblue p-2 px-4 text-white rounded-md text-xs' type="submit">Next Step</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
