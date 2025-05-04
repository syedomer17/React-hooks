import React, { useContext } from 'react'
import UserContext from './UserContext'

const UserGreeating = () => {
    const user = useContext(UserContext);
  return (
    <div>
      <h1>Hi i am {user.name}</h1>
    </div>
  )
}

export default UserGreeating
