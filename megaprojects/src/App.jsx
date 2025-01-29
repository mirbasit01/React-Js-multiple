import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authslice'
import { Footer, Header } from './Copmonets'
import { Outlet } from 'react-router-dom'

const App = () => {

 const [Loading, setLoading] = useState(true)
 const dispatch = useDispatch()


 useEffect(() => {
     authService.getCurrentUser()
     .then((userData) => {
       if(userData){
          dispatch(login({userData}))
       } else{
          dispatch(logout())
       }
     })
     .finally(() => {
        setLoading(false)
     })
 }, [ ])
 
 return !Loading ? (
  <div style={{ minHeight: '100vh', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', backgroundColor: 'gray' }}>
    <div style={{ width: '100%', display: 'block' }}>
       <Header/>

       <main>
      {/* <Outlet/> */}
       </main>
       <Footer/>
    </div>
   </div>
 ) : null


  // return (
  //    <>

  //    </>
  // )
}

export default App