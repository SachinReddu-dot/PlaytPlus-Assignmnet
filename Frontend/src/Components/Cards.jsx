import React from 'react'

const Cards = ({data}) => {


    const data2 = [
        {
            title: "Hello World",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, est?',
            priority: "High",
            date: '12/03/2025',
            status: 'Incomplete',
        },
        {
            title: "Hello World",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, est?',
            priority: "High",
            date: '12/03/2025',
            status: 'Completed',
        },
        {
            title: "Hello World",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, est?',
            priority: "High",
            date: '12/03/2025',
            status: 'Incomplete',
        },
        {
            title: "Hello World",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, est?',
            priority: "High",
            date: '12/03/2025',
            status: 'Incomplete',
        },
    ]

  return (
    <>
        <div className='w-full relative grid grid-cols-3 gap-5'>
            {data2.map((detail, idx)=>(
                <div key={idx} className='w-full bg-zinc-800 px-5 py-3 rounded-xl'>
                <div className='flex items-center justify-between mb-3 text-md font-medium'>
                    <h1 className='bg-red-700 rounded-md px-2 py-1'>{detail.priority}</h1>
                    <h4>{detail.date}</h4>
                </div>
                <div lca>
                    <h1 className='text-center text-2xl font-semibold'>{detail.title}</h1>
                    <p className='mt-3'>{detail.desc}</p>
                </div>
                <div className='flex items-center justify-between mt-7 p-3'>
                        <button className={`${detail.status === 'Incomplete' ? 'bg-red-800' : 'bg-green-700'} rounded-lg py-2 px-4 font-medium`}>{detail.status}</button>
                        <div className='flex items-center gap-2 text-2xl'>
                            <i class="ri-star-line"></i>
                            <i class="ri-edit-fill"></i>
                            <i class="ri-delete-bin-7-fill"></i>
                        </div>
                    </div>
                </div>
            ))} 
            
        </div>
    </>
  )
}

export default Cards