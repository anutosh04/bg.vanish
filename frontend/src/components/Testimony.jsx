import React, { useRef } from 'react'
import assets from '../assets/assets'
import { BsUpload } from "react-icons/bs";
import {useAppContext} from '../context/AppContext'
const Testimony = () => {
  const fileRef = useRef(null);
    const {authUser, setAlert} = useAppContext()
  const handleClick = () => {
    if(authUser.creditBalance>0)
        fileRef.current.click();
    
    else
    {
      setAlert('You dont have any credits left')
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 px-6 sm:px-0 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-900 to-black mt-32 text-center">
        Customer Testimonials
      </h2>

      {/* Testimonials */}
      <div className="w-full flex flex-wrap justify-center items-stretch gap-10">
        {/* Testimonial Card 1 */}
        <div className="flex flex-col bg-white rounded-2xl shadow-lg max-w-xs p-6 hover:scale-105 transition-all ease-in-out">
          <span className="text-5xl text-gray-400 mb-2">”</span>
          <p className="text-gray-600 text-base mb-4 leading-relaxed">
            I've been using bg.vanish for nearly two months, primarily for Instagram,
            and it has been incredibly user-friendly, making my work much easier.
          </p>
          <div className="flex items-center gap-3 mt-auto">
            <img src={assets.profile_img_1} alt="profile 1" className="w-10 h-10 rounded-full" />
            <div className="flex flex-col">
              <span className="font-semibold text-black">Richard Nelson</span>
              <span className="text-sm text-gray-500">Web Developer</span>
            </div>
          </div>
        </div>

        {/* Testimonial Card 2 */}
        <div className="flex flex-col bg-white rounded-2xl shadow-lg max-w-xs p-6 hover:scale-105 transition-all ease-in-out">
          <span className="text-5xl text-gray-400 mb-2">”</span>
          <p className="text-gray-600 text-base mb-4 leading-relaxed">
            I've been using bg.vanish for nearly 6 months. I had a fantastic experience.
            The quality is top-notch. I recommend others to try this app.
          </p>
          <div className="flex items-center gap-3 mt-auto">
            <img src={assets.profile_img_2} alt="profile 2" className="w-10 h-10 rounded-full" />
            <div className="flex flex-col">
              <span className="font-semibold text-black">Donald Jackman</span>
              <span className="text-sm text-gray-500">UI Designer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-900 to-black text-center">
        See the magic.
      </h2>

      <input type="file" accept="image/*" ref={fileRef} hidden />
      <button
        onClick={handleClick}
        className="rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-6 py-3 group overflow-hidden transition-all duration-300 font-bold text-white mt-4 relative hover:scale-105 ease-in-out"
      >
        <span className="text-lg font-bold transition-all opacity-100 group-hover:opacity-0">
          Upload your image
        </span>
        <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-all group-hover:opacity-100">
          <BsUpload size={24} />
        </span>
      </button>
    </div>
  );
};

export default Testimony;