import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './Copmonets/Post'

function App() {

  console.log(import.meta.env.VITE_APPWRITE_URL)
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Post/>
    </>
  )
}

export default App
