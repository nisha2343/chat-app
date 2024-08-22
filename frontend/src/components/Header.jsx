import React from 'react'
import Messages from './Messages'

const Header = ({username}) => {
    return (
        
        <div className='w-[19rem] p-1 bg-blue-900 rounded-md'>
        <div className='flex gap-2 items-center rounded p-2 py-1 cursor-pointer'>
                <div className=" avatar online">
                    <div className='w-12 rounded-full'>
                        <img src="https://avatar.iran.liara.run/public" alt='user avatar' />
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'> {username} </p>
                        <span className='text-xl'> </span>
                    </div>
                </div>


            </div>
            
        </div>
    )
}

export default Header