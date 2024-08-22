import React from 'react'
import Searchbox from './Searchbox'
import Conversations from './Conversations'
import Logout from './Logout'
const Sidebar = () => {
  return (
    <div>
        <Searchbox />
        <div className="divider px-3">
         
        </div>
        <Conversations/>
        <Logout />
    </div>
  )
}

export default Sidebar