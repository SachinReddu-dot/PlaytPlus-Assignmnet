import React, { useEffect } from 'react'
import Cards from '../Components/Cards'
import TaskForm from '../Components/TaskForm'
import 'remixicon/fonts/remixicon.css'
import axios from 'axios'
import { useState } from 'react'

const AllTask = () => {

  const [data, setData] = useState()
  const headers = {
    id: localStorage.getItem('id'),
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }

  useEffect(()=>{
    let addbtn = document.getElementById('addbtn')
    let taskform = document.getElementById('taskform')
    let crossbtn = document.getElementById('crossbtn')

    addbtn.addEventListener('click', function(){
      taskform.style.display = 'block'
    })

    crossbtn.addEventListener('click', function(){
      taskform.style.display = ''
    })
  },[])

  useEffect(()=>{
    const fetchTask = async()=>{
      const response = await axios.get('http://localhost:3000/api/task/get-tasks', {headers})
      setData(response)
    }
    fetchTask()
  }, [])
  console.log(data)

  return (
    <>
        <div className='w-full h-full relative'>
            <div className='py-3'>
              <button id='addbtn' className='bg-blue-700 rounded-lg font-medium text-xl px-5 py-2'>Add Task</button>
            </div>
            {/* {data ? <Cards data={data} /> : "No tasks"} */}
            <Cards data={data} />
            <div id="taskform" className='hidden'>
              <button id="crossbtn" className=' fixed right-[30%] top-16 z-10'><i class="text-2xl ri-close-line"></i></button>
              <TaskForm  />
            </div>
        </div>
    </>
  )
}

export default AllTask