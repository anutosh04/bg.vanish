import React from 'react'
import { UserButton } from '@clerk/clerk-react'
import { useAppContext } from '../context/AppContext'
const UserBtn = () => {
  const { authUser } = useAppContext()
  return (
    <div className='flex gap-7 items-centre justify-center'>
      <span className="group transition-all duration-200 ease-in-out bg-slate-300 flex items-center justify-center gap-2 px-3    rounded-lg overflow-hidden">
        <span className="text-sm font-semibold max-w-0 group-hover:max-w-[4rem] overflow-hidden transition-all duration-300 whitespace-nowrap">
          Credits:
        </span>
        <span className="text-sm font-semibold">{authUser?.creditBalance}🪙</span>
      </span>
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-xl font-bold'>
        Hi, {
          authUser?.fullName
        }
      </span>
      <UserButton />
    </div>
  )
}

export default UserBtn