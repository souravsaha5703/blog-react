import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='w-full py-5 px-10 flex items-center justify-between fixed backdrop-blur-sm z-20'>
            <h1 className='font-oswald font-semibold text-3xl'>Logo</h1>
            <div className='flex px-4 items-center justify-center gap-2'>
                <NavLink to={"/"} className={({ isActive }) => `text-xl font-noto font-medium cursor-pointer text-black hover:bg-black hover:text-white duration-100 ease-in-out rounded-full px-4 transition-colors py-2 capitalize text-center ${isActive ? "bg-black text-white" : "text-black"}`}>Home</NavLink>
                <NavLink to={"/explore"} className={({ isActive }) => `text-xl font-noto font-medium cursor-pointer text-black hover:bg-black hover:text-white duration-100 ease-in-out rounded-full px-4 transition-colors py-2 capitalize text-center ${isActive ? "bg-black text-white" : "text-black"}`}>Explore</NavLink>
                <p className='text-xl font-noto font-medium cursor-pointer text-black hover:bg-black hover:text-white duration-100 ease-in-out rounded-full px-4 transition-colors py-2 capitalize text-center'>Behind the scenes</p>
                <p className='text-xl font-noto font-medium cursor-pointer text-black hover:bg-black hover:text-white duration-100 ease-in-out rounded-full px-4 transition-colors py-2 capitalize text-center'>Talk to Us</p>
            </div>
            <div className='flex px-4 items-center justify-center gap-4'>
                <NavLink to={"/login"} className='text-xl font-noto font-medium cursor-pointer px-5 py-2 border border-black rounded-full relative overflow-hidden after:content-[""] after:absolute after:h-full after:w-full after:left-0 after:bottom-[-100%] after:bg-black after:rounded-full after:duration-150 after:ease-in-out after:hover:bottom-0 after:hover:rounded-none group'><p className='text-black z-50 relative duration-150 ease-in-out group-hover:text-white'>Login</p></NavLink>
                <NavLink to={"/register"} className='text-xl font-noto font-medium cursor-pointer px-5 py-2 border border-black rounded-full relative overflow-hidden after:content-[""] after:absolute after:h-full after:w-full after:left-0 after:bottom-[-100%] after:bg-black after:rounded-full after:duration-150 after:ease-in-out after:hover:bottom-0 after:hover:rounded-none group'><p className='text-black z-50 relative duration-150 ease-in-out group-hover:text-white'>Register</p></NavLink>
            </div>
        </div>
    )
}

export default Navbar