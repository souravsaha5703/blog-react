import React, { useState } from 'react';
import { BsFilterRight } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom'

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleToggle = () => {
        setToggleMenu(!toggleMenu);
    }
    return (
        <div className={` ${toggleMenu ? 'w-full py-5 px-10 flex flex-col items-center justify-between fixed bg-slate-200 z-20' : 'w-full py-5 px-10 flex items-center justify-between fixed backdrop-blur-sm z-20 shadow-md'}`}>
            <h1 className='font-oswald font-semibold text-3xl'>Logo</h1>
            <button className={`px-1 py-1 rounded-md border-2 border-gray-300 cursor-pointer ${toggleMenu ? 'hidden' : 'hidden max-[900px]:block'}`} onClick={handleToggle}><BsFilterRight className='text-4xl' /></button>
            <div className={`flex px-4 items-center justify-center gap-2 ${toggleMenu ? 'flex-col mt-5' : 'max-[900px]:hidden'}`}>
                <NavLink to={"/"} className={({ isActive }) => `text-xl font-noto font-medium cursor-pointer text-black hover:bg-black hover:text-white duration-100 ease-in-out rounded-full px-4 transition-colors py-2 capitalize text-center ${isActive ? "bg-black text-white" : "text-black"}`}>Home</NavLink>
                <NavLink to={"/explore"} className={({ isActive }) => `text-xl font-noto font-medium cursor-pointer text-black hover:bg-black hover:text-white duration-100 ease-in-out rounded-full px-4 transition-colors py-2 capitalize text-center ${isActive ? "bg-black text-white" : "text-black"}`}>Behind the scenes</NavLink>
                <NavLink className='text-xl font-noto font-medium cursor-pointer text-black hover:bg-black hover:text-white duration-100 ease-in-out rounded-full px-4 transition-colors py-2 capitalize text-center'>Talk to Us</NavLink>
            </div>
            <div className={`flex px-4 items-center justify-center gap-2 ${toggleMenu ? 'flex-col mt-5' : 'max-[900px]:hidden'}`}>
                <NavLink to={"/login"} className='text-xl font-noto font-medium cursor-pointer px-5 py-2 border border-black rounded-full relative overflow-hidden after:content-[""] after:absolute after:h-full after:w-full after:left-0 after:bottom-[-100%] after:bg-black after:rounded-full after:duration-150 after:ease-in-out after:hover:bottom-0 after:hover:rounded-none group'><p className='text-black z-50 relative duration-150 ease-in-out group-hover:text-white'>Login</p></NavLink>
                <NavLink to={"/register"} className='text-xl font-noto font-medium cursor-pointer px-5 py-2 border border-black rounded-full relative overflow-hidden after:content-[""] after:absolute after:h-full after:w-full after:left-0 after:bottom-[-100%] after:bg-black after:rounded-full after:duration-150 after:ease-in-out after:hover:bottom-0 after:hover:rounded-none group'><p className='text-black z-50 relative duration-150 ease-in-out group-hover:text-white'>Register</p></NavLink>
            </div>
            <button className={`px-1 py-1 rounded-md border-2 border-gray-300 cursor-pointer mt-5 ${toggleMenu ? 'hidden max-[900px]:block' : 'hidden'}`} onClick={handleToggle}><RxCross2 className='text-4xl' /></button>
        </div>
    )
}

export default Navbar