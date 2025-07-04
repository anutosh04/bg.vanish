import React from 'react'
import assets from '../assets/assets'
const Footer = () => {
  return (
    <div className='flex items-center px-[10%] py-4 mt-24 gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <img src={assets.logo} alt="" className='max-w-6 max-h-6' />
        <p className='text-xl font-extrabold'>bg.vanish</p>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <span className='text-gray-500 text-2xl '>|</span>
      <span className='text-gray-500 text-lg'>Copyright @anutosh.dev | All right reserved.</span>
      
      </div>    
    </div>
  )
}

export default Footer