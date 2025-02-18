import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { authAction } from '../Store/auth'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {

  const [data, setData] = useState({email: '', password: ''})
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn)
  
  if(isLoggedIn){
    navigate('/')
  }

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setData({...data, [name]: value})
  }

  const handelLogin = async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/api/user/login', data)

      setData({email: '', password: ''})
      navigate('/')
      console.log(response)
      localStorage.setItem('id', response.data.user._id)
      localStorage.setItem('token', response.data.token)

      dispatch(authAction.login())
    } catch (err) {
      alert(err.response.data.message)
    }
  }

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold mb-3'>Login</h1>
        <form onSubmit={handelLogin} className='w-1/3 font-medium rounded-xl py-16 bg-zinc-900 gap-3 px-10 flex flex-col items-center justify-center'>
          <h1>Don't have an Account ? <a href='/register' className='text-blue-600'>Register</a></h1>
            <input onChange={handleChange} name='email' value={data.email} className='bg-zinc-700 w-full rounded-lg p-3 outline-none' placeholder='Email' type="email" required/>
            <input onChange={handleChange} name='password' value={data.password} className='bg-zinc-700 w-full rounded-lg p-3 outline-none' placeholder='Password' type="password" required/>
            <button className='bg-blue-700 w-1/2 mt-3 rounded-lg p-2 text-lg'>Login</button>
        </form>
    </div>
  )
}

export default Login