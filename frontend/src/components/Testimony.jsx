import React, { useRef } from 'react'
import assets from '../assets/assets'
import { BsUpload } from "react-icons/bs";


const Testimony = () => {

    const fileRef = useRef(null)

    const handleClick = () => {
        fileRef.current.click();
    }
    return (
        <div className='flex flex-col items-centre justify-center gap-10 mx-auto'>
            <p className='bg-gray-dark text-transparent bg-clip-text mt-32 text-4xl h-auto p-6 font-bold text-centre w-full flex items-center justify-center'>Customer Testimonials</p>
            <div className='w-full flex items-center justify-center gap-10'>
                <div className='flex flex-col bg-white rounded-lg max-w-[28%] p-4 hover:scale-110 transition-all  ease-in-out'>
                    <span className='text-5xl text-gray-500'>”</span>
                    <span className='text-gray-500 text-lg mb-4'>I've been using bg.vanish for nearly two months, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</span>
                    <div className='flex items-center gap-3'>
                        <img src={assets.profile_img_1} alt="" className='max-w-10 max-h-10 rounded-full ' />
                        <div className='flex flex-col gap-1  '>
                            <span className='font-bold text-black text-lg'>Richard Nelson</span>
                            <span className='text-gray-500 text-sm '>Web Developer</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col bg-white rounded-lg max-w-[28%] p-4 hover:scale-110 transition-all  ease-in-out'>
                    <span className='text-5xl text-gray-500'>”</span>
                    <span className='text-gray-500 text-lg mb-4'>I've been using bg.vanish for nearly 6 months, I had a fantastic experience. The quality is top-notch. I recommend others to try this app.</span>
                    <div className='flex items-center gap-3'>
                        <img src={assets.profile_img_2} alt="" className='max-w-10 max-h-10 rounded-full ' />
                        <div className='flex flex-col gap-1  '>
                            <span className='font-bold text-black text-lg'>Donald Jackman</span>
                            <span className='text-gray-500 text-sm '>UI Deginer</span>
                        </div>
                    </div>
                </div>
            </div>
            <span className='bg-gray-dark text-transparent bg-clip-text mt-8 text-4xl h-auto p-6 font-bold text-centre w-full flex items-center justify-center' >See the magic.</span>
            <input type="file" accept='image/*' ref={fileRef} hidden />
            <button onClick={handleClick} className='rounded-xl bg-gradient-to-r
                     from-purple-500 via-pink-500 to-red-500 px-3 py-2 group overflow-hidden transition-all duration-300
                      font-bold text-white -translate-y-6 max-w-sm mx-auto h-12 relative hover:scale-105 transform  ease-in-out'>
                <span className='text-lg font-bold transition-all -translate-y-1 opacity-100 group-hover:opacity-0 text-centre w-auto'>Upload your image</span>
                <span className='opacity-0  transition-all -translate-y-6 group-hover:opacity-100 flex items-center justify-center text-2xl text-center w-auto'><BsUpload /></span>
            </button>
        </div>
    )
}

export default Testimony