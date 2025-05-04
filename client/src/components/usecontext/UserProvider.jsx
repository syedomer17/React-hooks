import React from 'react'
import UserContext from './UserContext'

const UserProvider = ({children}) => {
    const user = {
        name : "Omer Ali",
        role : "Admin"
    }
  return (
    <div>
      <UserContext.Provider value={user} >
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default UserProvider
