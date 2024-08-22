import React from 'react'
import { IoMdLogOut } from "react-icons/io";
import useLogout from '../hooks/useLogout';

const Logout = () => {

    const {loading, logout} = useLogout();
  return (
    <div>
        <IoMdLogOut  className='h-6 w-6  text-white cursor-pointer my-4 bg-cyan-600 rounded-xl' onClick={logout}/>
    </div>
  )
}

export default Logout