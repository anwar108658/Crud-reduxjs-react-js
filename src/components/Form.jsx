import {  useState } from "react"
import {addData} from "../store/slices/UserSlice"
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
const initialValue = {
    name:"",
    email:"",
    age:"",
    gender:"Select Gender",
}

const Form = () => {
    const navigate = useNavigate()
    const [val,setVal] = useState(initialValue);
    const dispatch = useDispatch()
    
    const changeHandler = (e) =>{
        setVal((prev) => ({...prev,[e.target.name]:e.target.value}))
      }
      const submitHandler = (e) => {
      e.preventDefault();
        const { name, email, age, gender } = val;

    if (!name || !email || !age || gender === "Select Gender") {
        alert("All fields are required!");
        return;
    }
        dispatch(addData(val));
        navigate("/read")
        setVal(initialValue)
    }
  return (
    <form className="w-full max-w-lg mx-auto p-2" onSubmit={submitHandler}>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" value={val.name} name="name" onChange={(e) => changeHandler(e)} placeholder="Name" />
    </div>
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-email">
        Email
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-email" type="email" placeholder="name@gmail.com" value={val.email} name="email" onChange={(e) => changeHandler(e)}  />
    </div>
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-age">
        Age
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-age" type="number" value={val.age} name="age" onChange={(e) => changeHandler(e)} placeholder="Age" />
    </div>
    <div className="relative w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        gender
      </label>
        <select value={val.gender} required name="gender" onChange={(e) => changeHandler(e)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option value="" selected>Selected-Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="other">Other</option>
        </select>
        <div className="pointer-events-none absolute top-3 inset-y-0 right-0 flex items-center px-6 py-6 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
    </div>
    <div>
        <button type="submit" className="py-2 px-4 bg-blue-700 text-white rounded-lg hover:bg-blue-900  transition-all hover:cursor-pointer">Submit</button>
    </div>
  </div>
</form>
  )
}

export default Form
