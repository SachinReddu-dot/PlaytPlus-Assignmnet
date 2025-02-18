import React from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import Home from './Pages/Home'
import AllTask from './Pages/AllTask'
import Completed from './Pages/Completed'
import Important from './Pages/Important'
import Login from './Pages/Login'
import Resgiter from './Pages/Resgiter'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { authAction } from './Store/auth'

const App = () => {

  const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn)
  const dispatch = useDispatch()
  const navigate =useNavigate()

  useEffect(()=>{
    
    if(localStorage.getItem('id')){
      dispatch(authAction.login())
      
    } else if(!isLoggedIn){
      navigate('/register')
      // navigate('login')
    }
  }, [])
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route element={<AllTask />} />
          <Route path='/completed' element={<Completed />}/>
          <Route path='/important' element={<Important />}/>
        </Route>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Resgiter/>} />
      </Routes>
    </>
  )
}

export default App