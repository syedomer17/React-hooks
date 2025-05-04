import React, { useContext } from 'react'
import UserContext from './UserContext'

const UserRole = () => {
    const user = useContext(UserContext) 
  return (
    <div>
      <p>my role : {user.role}</p>
    </div>
  )
}

export default UserRole
