import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Contex/UserContextProvider'
import Login from './Componts/Login'
import Porfile from './Componts/Porfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     
     <Login/>
     <Porfile/>
    </UserContextProvider>
  )
}

export default App
