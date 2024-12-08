import React, { useState } from 'react'
import { account } from '../appwrite/appwriteConfig'
import { useNavigate, Link } from 'react-router-dom'
import { ID } from 'appwrite'
import registerPic from '../assets/register page pic.jpg'
import Input from '../components/InputFields/Input'

function Signup() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    })

    const signupUser = async (e) => {
        e.preventDefault();
        if (!user.password === user.cpassword) {
            alert("Password Must be same");
        } else {
            const promise = account.create(ID.unique(),user.email,user.password,user.name);

            promise.then(
                function (response) {
                    console.log(response);
                    navigate("/blogs")//success
                },
                function (error) {
                    console.log(error);//failed
                }
            )
        }
    }
    return (
        <div className='w-full flex items-center justify-between slate-200'>
            <div className='w-3/5 flex flex-col items-center justify-center p-5'>
                <h1 className='text-4xl font-oswald font-bold text-center text-slate-950 mt-5'>Get Started</h1>
                <p className='mt-4 text-xl capitalize font-playfair font-semibold text-center'>Join us with our beautiful journey</p>
                <div className='w-3/4 h-full p-5 bg-white mt-10 rounded-lg flex items-center justify-center drop-shadow-xl shadow-2xl'>
                    <form action="#" method='POST' className='w-4/5 p-2 flex flex-col items-center justify-center gap-2'>
                        <h1 className='text-3xl font-oswald font-bold text-center text-slate-950 mt-5'>Create Account</h1>
                        <Input
                            label="Your Name"
                            type="text"
                            placeholder="Enter Your Name"
                            value={user.name}
                            onChange={(e) => setUser({
                                ...user,
                                name: e.target.value
                            })}
                            name="name"
                        />
                        <Input
                            label="Your Email Address"
                            type="email"
                            placeholder="Enter Your Email"
                            value={user.email}
                            onChange={(e) => setUser({
                                ...user,
                                email: e.target.value
                            })}
                            name="email"
                        />
                        <Input
                            label="Create Password"
                            type="password"
                            placeholder="create your password"
                            value={user.password}
                            onChange={(e) => setUser({
                                ...user,
                                password: e.target.value
                            })}
                            name="password"
                        />
                        <Input
                            label="Re-enter Password"
                            type="password"
                            placeholder="re enter your password"
                            value={user.cpassword}
                            onChange={(e) => setUser({
                                ...user,
                                cpassword: e.target.value
                            })}
                            name="cpassword"
                        />
                        <button className='px-10 py-2 border-2 border-slate-950 text-2xl font-noto mt-5 text-center rounded-md font-medium text-slate-950 duration-150 ease-in-out hover:text-white hover:bg-slate-950' type='submit' onClick={signupUser}>Register</button>
                        <p className='font-noto font-medium text-base text-center text-black'>Already have an account ?<Link to="/login" className='ml-2 font-poppins text-lg underline'>Login</Link></p>
                    </form>
                </div>
            </div>
            <div className='w-1/2 h-screen flex items-center justify-center'>
                <img src={registerPic} alt="" className='w-3/4 object-cover object-center' />
            </div>
        </div>
    )
}

export default Signup