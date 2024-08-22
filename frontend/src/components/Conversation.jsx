import React from 'react'
import useConversation from '../zustand/useConversation'


const Conversation = ({username, profilePic, lastindex,id}) => {
    const {selectedConversation, setSelectedConversation} = useConversation();

    const userAndID ={username:username,id:id};
    const isSelected = selectedConversation?.id === id
    
    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected? "bg-sky-500":""}`}
                onClick={()=>setSelectedConversation(userAndID)}>
                    
                <div className=" avatar online">
                    <div className='w-12 rounded-full'>
                        <img src={profilePic} alt='user avatar' />
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'> {username} </p>
                        <span className='text-xl'> </span>
                    </div>
                </div>

            </div>
            {!lastindex? <div className='divider my-0 py-0 h-1' />:``}
            
           
        </>
    )
}

export default Conversation