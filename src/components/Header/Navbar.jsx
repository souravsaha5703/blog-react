import React, { useState } from 'react';
import { BsFilterRight } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom'
import { ModeToggle } from '../mode-toggle';

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleToggle = () => {
        setToggleMenu(!toggleMenu);
    }
    return (
        <div className={` ${toggleMenu ? 'w-full py-5 px-10 flex flex-col items-center justify-between fixed backdrop-blur-sm z-20 border-b border-slate-300 dark:border-slate-800' : 'w-full py-5 px-10 flex items-center justify-between fixed backdrop-blur-sm z-20 border-b border-slate-300 dark:border-slate-900 max-[426px]:py-3'}`}>
            <h1 className='font-oswald font-semibold text-2xl text-slate-950 dark:text-slate-100'>Logo</h1>
            <button className={`px-1 py-1 rounded-md border-2 border-gray-300 cursor-pointer ${toggleMenu ? 'hidden' : 'hidden max-[900px]:block'}`} onClick={handleToggle}><BsFilterRight className='text-2xl' /></button>
            <div className={`flex px-4 items-center justify-center gap-2 ${toggleMenu ? 'flex-col mt-5' : 'max-[900px]:hidden'}`}>
                <NavLink to={"/"} className={({ isActive }) => `text-lg font-noto font-normal cursor-pointer hover:bg-slate-950 hover:text-slate-100 dark:text-slate-100 hover:dark:bg-slate-100 hover:dark:text-slate-950 duration-100 ease-in-out rounded-xl px-4 transition-colors py-2 capitalize text-center ${isActive ? "bg-slate-950 text-slate-100 dark:bg-slate-100 dark:text-slate-950" : "text-slate-950"}`}>Home</NavLink>
                <NavLink to={"/explore"} className={({ isActive }) => `text-lg font-noto font-normal cursor-pointer hover:bg-slate-950 hover:text-slate-100 dark:text-slate-100 hover:dark:bg-slate-100 hover:dark:text-slate-950 duration-100 ease-in-out rounded-xl px-4 transition-colors py-2 capitalize text-center ${isActive ? "bg-slate-950 text-slate-100 dark:bg-slate-100 dark:text-slate-950" : "text-slate-950"}`}>Behind the scenes</NavLink>
            </div>
            <div className={`flex px-4 items-center justify-center gap-2 ${toggleMenu ? 'flex-col mt-5' : 'max-[900px]:hidden'}`}>
                <NavLink to={"/login"} className='text-xl font-noto font-normal cursor-pointer px-5 py-2 border-2 border-black dark:border-slate-50 rounded-full relative overflow-hidden after:content-[""] after:absolute after:h-full after:w-full after:left-0 after:bottom-[-100%] after:bg-black after:dark:bg-slate-100 after:rounded-full after:duration-150 after:ease-in-out after:hover:bottom-0 after:hover:rounded-none group'><p className='text-black dark:text-slate-100 z-50 relative duration-150 ease-in-out group-hover:text-white group-hover:dark:text-slate-950'>Sign In</p></NavLink>
                <ModeToggle />
            </div>
            <button className={`px-1 py-1 rounded-md border-2 border-gray-300 cursor-pointer mt-5 ${toggleMenu ? 'hidden max-[900px]:block' : 'hidden'}`} onClick={handleToggle}><RxCross2 className='text-4xl' /></button>
        </div>
    )
}

export default Navbar