import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className=" p-6 w-full bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-45 ">
        <h1 className='text-3xl font-semibold text-center text-gray-100'>Login
          <span className='text-blue-800'> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text font- text-white'>Username</span>
            </label>
            <input type="text" placeholder="Username" className="input input-bordered input-primary bg-gray-600 text-white w-full max-w-xs"
              onChange={(e) => { setUsername(e.target.value) }} />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text font- text-white'>Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="input input-bordered input-primary bg-gray-600 text-white w-full max-w-xs"
              onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <div className='w-full'>
            <button className="btn bg-blue-700 text-blue-50 btn-primary w-full max-w-xs btn-sm mt-3 font-bold "
              disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Login"}</button>
            <Link to={'/signup'} className='text-sm hover:underline hover:text-blue-600 mt-2'>{"Don't have an account"}</Link>
          </div>
        </form>


      </div>
    </div>
  )
}

export default Login