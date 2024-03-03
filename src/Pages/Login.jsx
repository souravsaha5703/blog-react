import React from 'react'
import { account } from '../appwrite/appwriteConfig'
import { useNavigate, Link } from 'react-router-dom'
import Input from '../Components/InputFields/Input'
import loginPic from '../assets/login page pic.jpg'

function Login() {
  return (
    <div className='w-full flex items-center justify-between slate-200'>
            <div className='w-3/5 flex flex-col items-center justify-center p-5'>
                <h1 className='text-4xl font-oswald font-bold text-center text-slate-950 mt-5'>Welcome Back !</h1>
                <div className='w-3/4 h-full p-5 bg-white mt-10 rounded-lg flex items-center justify-center drop-shadow-xl shadow-2xl'>
                    <form action="#" method='POST' className='w-4/5 p-2 flex flex-col items-center justify-center gap-2'>
                        <h1 className='text-3xl font-oswald font-bold text-center text-slate-950 mt-5'>Login</h1>
                        <Input
                            label="Enter Email Address"
                            type="email"
                            placeholder="Enter Your Email"
                            name="email"
                        />
                        <Input
                            label="Enter Password"
                            type="password"
                            placeholder="enter your password"
                            name="password"
                        />
                        <button className='px-10 py-2 border-2 border-slate-950 text-2xl font-noto mt-5 text-center rounded-md font-medium text-slate-950 duration-150 ease-in-out hover:text-white hover:bg-slate-950'>Sign In</button>
                        <p className='font-noto font-medium text-base text-center text-black'>Don't have an account ?<Link to="/register" className='ml-2 font-poppins text-lg underline'>Register</Link></p>
                    </form>
                </div>
            </div>
            <div className='w-1/2 h-screen flex items-center justify-center'>
                <img src={loginPic} alt="" className='w-3/4 object-cover object-center' />
            </div>
        </div>
  )
}

export default Login