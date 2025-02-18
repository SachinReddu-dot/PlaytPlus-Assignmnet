import React from 'react'
import { useState } from 'react';

const TaskForm = () => {

    const [data, setData] = useState({
        title: '',
        priority: '',
        duedate: '',
        status: '',
        desc: '',
    })

    const headers = {
        id: localStorage.getItem('id'),
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setData({...data, [name]: value})
      }

      const handelTask = async(e)=>{
        e.preventDefault()
        try {
          const response = await axios.post('http://localhost:3000/api/task/create-task', {headers})

        setData({
            title: '',
            priority: '',
            duedate: '',
            status: '',
            desc: '',
        })
          console.log(response)
        } catch (err) {
          alert(err.response.data.message)
        }
      }

  return (
    <>
        <div className='w-full h-screen fixed backdrop-blur-xl top-0 left-0 flex items-center justify-center'>
            <form onSubmit={handelTask} className='w-2/5 h-2/3 rounded-xl bg-black p-5 font-medium gap-3 flex flex-col items-center'>
                <h1 className='text-4xl font-semibold mb-4'>Enter Task Details</h1>
                <div className='flex w-full gap-3 h-fit '>
                    <input name='title' value={data.title} onChange={handleChange} placeholder='Title' className='bg-zinc-800 rounded-lg w-1/2 p-4 outline-none' type="text" />
                    <input name='priority' value={data.priority} onChange={handleChange} placeholder='Priority' className='bg-zinc-800 rounded-lg w-1/2 p-4 outline-none' type="text" />
                </div>
                <div className='flex w-full gap-3 h-fit'>
                    <input name='duedate' value={data.duedate} onChange={handleChange} placeholder='Due Date' className='bg-zinc-800 rounded-lg w-1/2 p-4 outline-none' type="text" />
                    <input name='status' value={data.status} onChange={handleChange} placeholder='Status' className='bg-zinc-800 rounded-lg w-1/2 p-4 outline-none' type="text" />
                </div>
                <textarea name='desc' value={data.desc} onChange={handleChange} placeholder='Description' className='bg-zinc-800 rounded-lg w-full p-4 outline-none' type="text" />
                <button className='bg-blue-700 rounded-lg w-1/2 py-3 text-lg font-medium'>Create Task</button>
            </form>
        </div>
    </>
  )
}

export default TaskForm