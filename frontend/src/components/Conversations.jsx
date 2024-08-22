import React, { useEffect } from 'react'
import Conversation from './Conversation'
import useGetConversations from '../hooks/useGetConversations'
import useConversation from '../zustand/useConversation'


const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() =>{
return () => {
    setSelectedConversation(null);
  }
  },[])
  return (
    <>
      <div className='py-2 flex flex-col overflow-auto h-[28rem] scroll'>
        {conversations.map((conversation, idx) =>
          <Conversation key={conversation._id}
            username={conversation.fullName}
            profilePic={conversation.profilePic}
            lastindex={idx === conversation.length - 1}
            id={conversation._id}
          />
        )}


      </div>
    </>

  )
}

export default Conversations