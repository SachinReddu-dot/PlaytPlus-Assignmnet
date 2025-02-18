import React from 'react'
import Sidebar from '../Components/Sidebar'
import AllTask from './AllTask'
import TaskForm from '../Components/TaskForm'

const Home = () => {
  return (
    <>
        <div className='h-screen w-full p-5 flex items-center gap-3'>
            <Sidebar />
            <div className='w-4/5 h-full bg-[#070C27] rounded-2xl px-5'>
              <AllTask />
            </div>
        </div>
    </>
  )
}

export default Home