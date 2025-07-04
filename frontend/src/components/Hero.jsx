
import React, { useRef } from 'react';
import { BsUpload } from "react-icons/bs";
import assets from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import Alert from './Alert';

const Hero = () => {
  const fileRef = useRef(null);
  const { setImage, removeBg, authUser, alert, setAlert } = useAppContext();

  const handleClick = () => {
    if(authUser.creditBalance>0)
      fileRef.current.click();
    else
    {
      setAlert('You dont have any credits left')
    }
  }

  
  return (
    <div className='mt-[5%] mx-auto flex gap-4 items-center justify-center'>
      {
        alert&&<Alert/>
      }
      <div className='w-[40%] mx-auto flex flex-col h-auto gap-5'>
        <span className='text-8xl font-extrabold'>
          Snap. <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500'>Upload.</span> Gone.
        </span>
        <span className='text-2xl font-bold text-gray-600'>Say Bye to Unwanted Backgrounds.</span>
        <input type="file" accept='image/*' ref={fileRef} 
        onChange={(e)=>{
          setImage(e.target.files[0])
          removeBg(e.target.files[0])
          
          
        }} hidden />
        <button onClick={handleClick} className='rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-3 py-2 group overflow-hidden transition-all duration-300 font-bold text-white max-w-sm h-12 relative hover:scale-105'>
          <span className='text-lg font-bold transition-all -translate-y-1 opacity-100 group-hover:opacity-0'>Upload your image</span>
          <span className='opacity-0 transition-all -translate-y-6 group-hover:opacity-100 flex items-center justify-center text-2xl'><BsUpload /></span>
        </button>
      </div>
      <div className='mx-auto'>
        <img src={assets.hero} alt="Hero" className='max-w-lg' />
      </div>
    </div>
  );
};

export default Hero;