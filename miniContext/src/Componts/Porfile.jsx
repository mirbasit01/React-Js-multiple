import React, { useContext } from 'react'
import UserContex from '../Contex/UserContex'

const Porfile = () => {

    const {User} = useContext(UserContex)




  if(!User) return <div> Plese Login</div>
  return  <div>WellCome {User.username} </div>
}

export default Porfile