import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

function Header() {

    const {currentUser} = useSelector(state => state.user)

  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className='text-slate-500'>Nikhil</span>
                    <span className='text-blue-900' >Estate</span>
                </h1>
            </Link>

            <form action="" className='bg-slate-100 flex items-center p-3 rounded-lg'>
                <input 
                    type="text" 
                    placeholder='search..' className='focus:outline-none bg-transparent w-24 sm:w-64'/>
                <FaSearch className='text-slate-500'/>
            </form>

            <ul className='flex gap-4'>
                <Link to='/'>
                <li  className='hidden sm:inline text-slate-700 hover:underline '>home</li>
                </Link>
                <Link to='/about'>
                <li className='hidden sm:inline text-slate-700 hover:underline '>about</li>
                </Link>

                <Link to='/profile'>

                {currentUser ? (
                    <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt="profile" />
                ): <li className='sm:inline text-slate-700 hover:underline '>sign in</li>
                }
                
                </Link>
            </ul>
        </div>
    </header>
  )
}

export default Header