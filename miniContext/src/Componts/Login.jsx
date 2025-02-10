import React, { useContext, useState } from 'react'
import UserContex from '../Contex/UserContex'


const Login = () => {

    const [username, setusername] = useState('')
    const [password, setuPassword] = useState('')
    const {setUser,} =  useContext(UserContex)

 
    const handleSubmit = (e) => {
     e.preventDefault()
     setUser({username, password})
    }

   return (
    <div>

         <h2>Login</h2>
         <input type='text' placeholder='username'
         value={username}
         onChange={(e) => setusername(e.target.value)}/>
         <input type='text' placeholder='password'
         value={password}
         onChange={(e) => setuPassword(e.target.value)}/>
            <button onClick={handleSubmit}>
              Submit
            </button>

        </div>
  )
}

export default Login