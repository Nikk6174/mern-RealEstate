import React from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react'

function Profile() {

  const fileRef = useRef(null)
  const {currentUser} = useSelector(state => state.user)

  return (
    <div className='max-w-lg mx-auto p-3'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>

      <form action="" className='flex flex-col gap-4'>
        <input type="file" ref={fileRef} hidden accept='image/*'/>

        <img onClick={()=>fileRef.current.click()} src={currentUser.avatar} alt="profile" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'/>

        <input  id='username' type="text" placeholder='username' className='border p-3 rounded-lg'/>

        <input  id='email' type="text" placeholder='email' className='border p-3 rounded-lg'/>

        <input  id='password' type="text" placeholder='password' className='border p-3 rounded-lg'/>

        <button className='bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80'>Update</button>
      </form>

      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>
          delete account
        </span>

        <span className='text-red-700 cursor-pointer'>
          sign out
        </span>
      </div>

    </div>
  )
}

export default Profile