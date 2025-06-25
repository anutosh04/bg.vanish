import React, { useRef } from 'react'
import { BsUpload } from "react-icons/bs";
import assets from '../assets/assets';
import {useAppContext} from '../context/AppContext'
import uploadImage from '../hooks/uploadImage.js'
const Hero = () => {

  const fileRef = useRef(null)
  const {setImage,image, setResultURL} = useAppContext();

  const handleClick = ()=>{
    fileRef.current.click();
  }

  const handleSubmit = async (e) => {
  const file = e.target.files[0];
  setImage(file);

  const result = await uploadImage(file);
  if (result) setResultURL(result);
};
  return (
    <div className='mt-[5%] mx-auto flex gap-4 items-center justify-center'>
        <div className='0 w-[40%] mx-auto flex flex-col h-auto gap-5'>
            <span className='text-8xl font-extrabold'>Snap. <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500'>Upload.</span> Gone.</span>
            <span className='text-2xl font-bold text-gray-600'>Say Bye to Unwanted Backgrounds.</span>
            <input type="file" accept='image/*' ref={fileRef} onChange={handleSubmit} hidden/>
            <button onClick={handleClick} className=' items-center justify-centre rounded-xl bg-gradient-to-r
             from-purple-500 via-pink-500 to-red-500 px-3 py-2 group overflow-hidden transition-all duration-300
              font-bold text-white max-w-sm h-12 relative hover:scale-105 transform  ease-in-out'>
              <span className='text-lg font-bold transition-all -translate-y-1 opacity-100 group-hover:opacity-0 text-centre w-auto'>Upload your image</span>
              <span className='opacity-0  transition-all -translate-y-6 group-hover:opacity-100 flex items-center justify-center text-2xl text-center w-auto'><BsUpload/></span>
            </button>
        </div>
        <div className='  mx-auto'>
          <img src={assets.hero} alt="" className='max-w-lg'/>
        </div>
    </div>
  )
}

export default Hero