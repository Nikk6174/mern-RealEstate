import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRef } from 'react'
import { updateUserFailure, updateUserStart, updateUserSuccess, deleteUserFailure, deleteUserStart, deleteUserSuccess, signOutUserFailure, signOutUserStart, signOutUserSuccess } from '../redux/user/userSlice'

function Profile() {

  const dispatch = useDispatch()
  const [formData, setFormData] = useState({})

  const fileRef = useRef(null)
  const {currentUser, loading, error} = useSelector(state => state.user)

  const handleChange=(e)=>{
    setFormData({...formData, [e.target.id] : e.target.value})
  }

  const handleSubmit= async (e)=>{
    e.preventDefault()

    try {
      dispatch(updateUserStart)
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if(data.success == false){
   
              dispatch(updateUserFailure(data.message))
      
              return
        }
      
      dispatch(updateUserSuccess(data))
      
    } catch (error) {
      dispatch(updateUserFailure(error.message))
    }
  }


  const handleDeleteUser= async ()=>{
    try {
      dispatch(deleteUserStart())

      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE'
      })
      const data = await res.json()
      if(data.success == false){  
        dispatch(deleteUserFailure(data.message))
        return
      }

      dispatch(deleteUserSuccess(data))

    } catch (error) {
      dispatch(deleteUserFailure(error.message))
    }
  }

  const handleSignOut = async () =>{
    try {
      dispatch(signOutUserStart())
      const res = await fetch('/api/auth/signout')
      const data = res.json()

      if (data.success == false){
        dispatch(signOutUserFailure(data.message))
        return
      }
      dispatch(signOutUserSuccess(data))
    } catch (error) {
      dispatch(signOutUserFailure(error))
    }
  }

  return (
    <div className='max-w-lg mx-auto p-3'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>

      <form onSubmit={handleSubmit} action="" className='flex flex-col gap-4'>
        <input type="file" ref={fileRef} hidden accept='image/*'/>

        <img onClick={()=>fileRef.current.click()} src={currentUser.avatar} alt="profile" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'/>

        <input
          id='username' 
          type="text" 
          defaultValue={currentUser.username}
          placeholder='username' 
          className='border p-3 rounded-lg'
          onChange={handleChange}/>

        <input  
          id='email' 
          type="text" 
          defaultValue={currentUser.email}
          placeholder='email' 
          className='border p-3 rounded-lg'
          onChange={handleChange}/>

        <input  
          id='password' 
          type="password" 
          placeholder='password' 
          className='border p-3 rounded-lg'
          onChange={handleChange}/>

        <button className='bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80'>
          {loading? "loading...": "update"}
        </button>
      </form>

      <div onClick={handleDeleteUser} className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>
          delete account
        </span>

        <span onClick={handleSignOut} className='text-red-700 cursor-pointer'>
          sign out
        </span>
      </div>

      <p className='text-red-700 mt-4'>{error? error: ''}</p>

    </div>
  )
}

export default Profile