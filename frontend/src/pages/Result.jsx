import React from 'react'

const Result = () => {
  return (
    <div className='w-full flex justify-center mt-20  mb-[26%] '>
      <div className='bg-white p-5 rounded-lg w-[70%] flex justify-between '>
        <div className='flex flex-col gap-5 w-[45%] '>
          <span className='text-lg text-gray-500 border-b-2 py-3 border-black'>Original</span>
          <img src="" alt="" />
        </div>
        <div className='flex flex-col gap-5 w-[45%]'>
          <span className='text-lg text-gray-500 border-b-2 py-3 border-black '>Background Removed</span>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Result