import React from 'react'

function Card({img, name, dest, city}) {
  return (
    <div className='flex gap-10 items-center text-left bg-gray-200 p-5 rounded-4xl shadow-xl'>
        <img src={img} alt="" width={"300px"} className='rounded-md shadow-sm'/>
        <div className='grid gap-1'>
            <h2 className='text-2xl font-semibold'>{name}</h2>
            <h3>{dest}</h3>
            <h3>{city}</h3>
        </div>
    </div>
  )
}

export default Card