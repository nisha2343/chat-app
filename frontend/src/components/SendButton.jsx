import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../hooks/useSendMessage';

const SendButton = () => {

  const [message, setMessage] =  useState("");
  const {loading, sendMessage} = useSendMessage();
const handleSubmit = async(e)=>{
  const input = document.getElementById("message")
  setMessage(input.value);
  input.value =""
  if (!message) return;
  await sendMessage(message);
  setMessage("")
  e.target.value="";
}

  return (
    <div className='rounded-lg h-10 w-[19rem] flex items-around'>
      <div className='w-4/5'>
        <input type="text" placeholder="Type here" className="input w-[19rem] h-10" id="message" />
      </div>
      <div className='w-1/5 pl-6 pt-2'>
        <button onClick={handleSubmit}><IoSend className='h-7 w-7'></IoSend></button>
      </div>

    </div>
  )
}

export default SendButton