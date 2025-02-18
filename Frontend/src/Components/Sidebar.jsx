import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import { authAction } from '../Store/auth'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Sidebar = () => {

  const [data, setData] = useState()
  const dispatch = useDispatch()

  const handleLogout = ()=>{
    dispatch(authAction.logout())
    localStorage.clear('id')
    window.location.reload()
  }

  const headers = {
    id: localStorage.getItem('id'),
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }

  useEffect(()=>{
    const fetchTask = async()=>{
      const response = await axios.get('http://localhost:3000/api/task/get-tasks', {headers})
      setData(response.data.data)
      
    }
    
    fetchTask()
  }, [])

  return (
    <>
      <div className='bg-[#070C27] backdrop-blur-2xl rounded-2xl w-1/5 h-full flex flex-col items-center py-5 px-2'>
       {/* {data ? <h1 className='text-3xl font-semibold'>{data.username}</h1> : 'Loading.....'}
       {data ? <p className='text-sm text-gray-500'>{data.email}</p> : 'Loading.....'}        */}
       <h1 className='text-3xl font-semibold'>Username</h1>
       <p className='text-sm text-gray-500'>user@email.com</p> 
        <div className='w-full h-[1px] bg-white my-3 rounded-full'></div>
        <div className='px-2 w-full mt-5 font-medium'>
          <div className='bg-[#1A1F37] w-full rounded-2xl flex items-center gap-3 p-3 mb-5'>
            <div className='bg-[#582CFF] rounded-full px-2 py-1'><i class="ri-home-2-fill"></i></div>
            <h1>Dashboard</h1>
          </div>
          <Link to='/'>
            <div className='hover:bg-[#1A1F37] w-full rounded-2xl flex items-center gap-3 p-3 mb-3'>
              <div className='hover:bg-[#582CFF] bg-[#1A1F37] rounded-full px-2 py-1 text-[#582CFF]'><i class="ri-ticket-fill"></i></div>
              <h1>All Tasks</h1>
            </div>
          </Link>
          <Link to='/completed'>
            <div className='hover:bg-[#1A1F37] w-full rounded-2xl flex items-center gap-3 p-3 mb-3'>
              <div className='hover:bg-[#582CFF] bg-[#1A1F37] rounded-full px-2 py-1 text-[#582CFF]'><i class="ri-check-double-line"></i></div>
              <h1>Completed Tasks</h1>
            </div>
          </Link>
          
          <Link to='/important'>
            <div className='hover:bg-[#1A1F37] w-full rounded-2xl flex items-center gap-3 p-3 mb-3'>
              <div className='hover:bg-[#582CFF] bg-[#1A1F37] rounded-full px-2 py-1 text-[#582CFF]'><i class="ri-star-line"></i></div>
              <h1>Important Tasks</h1>
            </div>
          </Link>


          <button onClick={handleLogout} className='w-2/4 p-3 text-center bg-red-700 rounded-xl'>Logout</button>
        </div>
      </div>
    </>
  )
}

export default Sidebar