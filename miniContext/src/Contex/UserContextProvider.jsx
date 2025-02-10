import React, { useState } from 'react'
import UserContex from './UserContex'

const UserContextProvider = ({children}) => {

    const [User, setUser] = useState(null)



  return (
    <UserContex.Provider 
    value={{
        User,
        setUser
    }}
    >
    {children}
    </UserContex.Provider>
  )



}

export default UserContextProvider