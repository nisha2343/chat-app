import React, {useEffect, useRef} from 'react'
import Message from './Message'
import Header from './Header'
import SendButton from './SendButton'
import useGetMessages from '../hooks/useGetMessages'
import MessageSkeleton from './MessageSkeleton'
const Messages = ({username}) => {

  
const {messages, loading} = useGetMessages();
const lastMessageRef = useRef();

useEffect(()=>{
  setTimeout(()=>{
    
    lastMessageRef.current.scrollTop = lastMessageRef.current.scrollHeight;
  
  },
    
    
200)
  
},[messages])
  return (
    <div className='mx-3 my-3 w-[20rem] flex flex-col justify-between'>
      <div className='w-full absolute z-[12]'>
      <Header username={username} />
      </div>

      <div className='w-[97%] relative top-16 h-[26rem] overflow-auto ' ref={lastMessageRef}>
      {!loading? messages.map((message, idx)=><Message message ={message} key={idx}/>) : [...Array(5).map(()=><MessageSkeleton />)]  }
      
      </div>
      <div className='w-[20rem] absolute bottom-1 z-[12]'>
      <SendButton />
      
      </div>
      
       

    </div>
  )
}

export default Messages