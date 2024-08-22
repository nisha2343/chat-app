import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import useConversation from '../zustand/useConversation';
import { extractTime } from '../../../backend/utils/extractTime';

const Message = ({ message }) => {

    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._id;
    
    const formattedTime = extractTime(message.createdAt)
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;


    return (
        <div className='flex items-end justify-around w-full'>
            <div className="avatar online mb-5">
                <div className='w-12 rounded-full'>
                    <img src="https://avatar.iran.liara.run/public" alt='user avatar' />
                </div>
            </div>
            <div className={`chat mb-3 ${chatClassName} bg-inherit`}>
                <div className={`chat-bubble ${fromMe ? "bg-sky-500" : ""}`}>
                    {message.message}
                </div>
            </div>
            <div className="chat-footer">
          
                <time className="text-xs opacity-50">{formattedTime}</time>
            </div>

        </div>
    )
}

export default Message