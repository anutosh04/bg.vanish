import React from 'react'
import assets from '../assets/assets'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom'
import {useClerk, useUser} from '@clerk/clerk-react'
import UserBtn from './UserBtn';

const Header = () => {

  const {openSignIn} = useClerk()
  const {user} = useUser()
  
  return (
    <div className='flex px-[15%] py-[2%] items-centre justify-between'>
      <Link to='/'>
        <div className='flex items-center justify-center gap-2'>
          <img src={assets.logo} alt="" className='' />
          <p className='text-2xl font-extrabold'>bg.vanish</p>
        </div>
      </Link>
      {
        user? <UserBtn/>:<button onClick={()=>openSignIn({})}
       className=' group overflow-hidden transition-all duration-300 flex items-center justify-center gap-2 py-2 px-4 bg-black rounded-lg w-auto'>
        <span className='transition-all duration-300 text-xl font-semibold text-white'>Get started</span>
        <span className='opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white'><FaArrowRight /></span>

      </button>
      }
    </div>
  )
}

export default Header