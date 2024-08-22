import React from 'react'
import Sidebar from '../../components/Sidebar'
import Conversations from '../../components/Conversations'
import Messages from '../../components/Messages'
import Logout from '../../components/Logout'
import NoConversation from '../../components/NoConversation'

import useConversation from '../../zustand/useConversation'
const Home = () => {

  const {selectedConversation} = useConversation();
  
  
  // const messages =useGetMessages();

  return (
    <>
      
      <div className=" flex p-6 w-[80vh] bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 my-20 h-f">
        <div className='flex'>
        <Sidebar />
        {selectedConversation? <Messages username={selectedConversation.username} /> : <NoConversation /> }
       
        
        </div>
        
      </div>
      
    </>
  )
}

export default Home