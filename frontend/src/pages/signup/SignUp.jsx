import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from '../login/Login'
import useSignup from '../../hooks/useSignup'



const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:'male'
  })


  const {loading, signup} = useSignup()

  const handleSubmit= async (e)=>{
    e.preventDefault();
    await signup(inputs);
  }
 

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className=" p-6 w-full bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-45 ">
        <h1 className='text-3xl font-semibold text-center text-gray-100'>SignUp
          <span className='text-blue-800'> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-200'>Full Name</span>
            </label>
            <input type="text" placeholder="Enter Full Name" className="input input-bordered input-primary bg-gray-600 text-white w-full max-w-xs"
           onChange={(e)=>setInputs({...inputs, fullName: e.target.value})}/>
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-200'>Username</span>
            </label>
            <input type="text" placeholder="Enter Username" className="input input-bordered input-primary bg-gray-600 text-white w-full max-w-xs"
            onChange={(e)=>setInputs({...inputs, username: e.target.value})} />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-200'>Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="input input-bordered input-primary bg-gray-600 text-white w-full max-w-xs"
            onChange={(e)=>setInputs({...inputs, password: e.target.value})} />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-200'>Confirm Password</span>
            </label>
            <input type="password" placeholder="Re-enter Password" className="input input-bordered input-primary bg-gray-600 text-white w-full max-w-xs" 
            onChange={(e)=>setInputs({...inputs, confirmPassword: e.target.value})}/>
          </div>
          
          {/* Gender Texybox*/}
          <div className='flex p-4'>
          <input type="radio" name="radio-1" className="radio radio-sm checked:bg-gray-600" defaultChecked onChange={(e)=>setInputs({...inputs, gender: e.target.value})} value={inputs.gender} /><span className='text-md ml-2 mr-2'>Male</span>
          <input type="radio" name="radio-1" className="radio radio-sm checked:bg-gray-600" onChange={(e)=>setInputs({...inputs, gender: e.target.value}) } value='female'/><span className='text-md ml-2 mr-2'> Female</span>
          <input type="radio" name="radio-1" className="radio radio-sm checked:bg-gray-600" onChange={(e)=>setInputs({...inputs, gender: e.target.value})} value='others'/> <span className='text-md ml-2 mr-2'>Others</span>
          </div>
          <Link to={'/login'} className='label-text hover:underline'>Already have an account?</Link>
          <div className='w-full h'>
            <button className="btn bg-blue-700 text-blue-50 btn-primary w-full max-w-xs btn-sm mt-3 font-bold ">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp