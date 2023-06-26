import React from 'react'

export default function SideBar() {
  return (
    <div className='h-screen w-[18%] background'>
        <div>

            <h4 className='font-bold  bg-grey-light w-fit pl-4 pr-14 py-1 rounded-xl ml-3 mt-4 mb-3 text-orange-dark text-lg'>Categories</h4>
        <ul className='text-white  pl-14'>
        <li  className='mb-2 cursor-pointer'>Laptop</li>
            <li className='mb-2 cursor-pointer'>Phone</li>
            <li className='mb-2 cursor-pointer'>Camera</li>
            <li className='mb-2 cursor-pointer'>T Shirt</li>
            <li className='mb-2 cursor-pointer'>Cycle</li>
            <li className='mb-2 cursor-pointer'>Headphone</li>
            <li className='mb-2 cursor-pointer'>Game</li>
            <li className='mb-2 cursor-pointer'>Watch</li>
            <li className='mb-2 cursor-pointer'>Books</li>
            <li className='mb-2 cursor-pointer'>Toys</li>
            <li className='mb-2 cursor-pointer'>Comics</li>
            <li className='mb-2 cursor-pointer'>Movies</li>
            <li className='mb-2 cursor-pointer'>Music</li>
        </ul>
        </div>
    </div>
  )
}
