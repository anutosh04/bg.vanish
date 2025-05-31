import React, { useState } from 'react'
import assets from '../assets/assets'

const BodySlider = () => {
    const [slider, setSlider] =useState(50)
    const handleChange = (e) =>{
        setSlider(e.target.value)
    }
  return (
    <>
    <p className='bg-gray-dark text-transparent bg-clip-text mt-32 text-6xl h-auto p-6 font-extrabold text-centre w-full flex items-center justify-center'>High Quality & Accuracy!</p>
    <div className='relative overflow-hidden w-full max-w-3xl m-auto rounded-xl mt-20 '>
        <img src={assets.image_w_bg} alt="" className='w-full h-full' style={{clipPath: `inset(0 ${100.2 - slider}% 0 0)`}}/>
        <img src={assets.image_wo_bg} className='absolute h-full w-full top-0 left-0' style={{clipPath: `inset(0  0 0 ${slider}%)`}} alt="" />
        <input type="range" min={0} max={100} value={slider} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10  w-full slider' onChange={handleChange} />
    </div></>
  )
}

export default BodySlider