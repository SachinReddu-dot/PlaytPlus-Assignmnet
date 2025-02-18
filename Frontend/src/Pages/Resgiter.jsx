import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Resgiter = () => {

  const [data, setData] = useState({username: '', email: '', password: ''})
  const navigate = useNavigate()
  const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn)
  
  if(isLoggedIn){
    navigate('/')
  }

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setData({...data, [name]: value})
  }

  const handelRegister = async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/api/user/register', data)

      setData({username: '', email: '', password: ''})
      navigate('/login')
      console.log(response)
    } catch (err) {
      alert(err.response.data.message)
    }
  }

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold mb-3'>Register</h1>
        <form onSubmit={handelRegister} className='w-1/3 font-medium rounded-xl py-16 bg-zinc-900 gap-3 px-10 flex flex-col items-center justify-center'>
            <h1>Already have an Account ? <a href='/login' className='text-blue-600'>Login</a></h1>
            <input onChange={handleChange} value={data.username} name='username' className='bg-zinc-700 w-full rounded-lg p-3 outline-none' placeholder='Full-Name' type="text" required/>            
            <input onChange={handleChange} value={data.email} name='email' className='bg-zinc-700 w-full rounded-lg p-3 outline-none' placeholder='Email' type="email" required/>
            <input onChange={handleChange} value={data.password} name='password' className='bg-zinc-700 w-full rounded-lg p-3 outline-none' placeholder='Password' type="password" required/>
            <button className='bg-blue-700 w-1/2 mt-3 rounded-lg p-2 text-lg'>Register</button>
        </form>
    </div>
  )
}

export default Resgiter