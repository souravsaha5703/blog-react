import React, { useEffect, useState } from 'react'
import { account } from '../appwrite/appwriteConfig'
import { useNavigate, Link } from 'react-router-dom'
import BlogPosts from '../components/Posts/BlogPosts'
import errorPic from '../assets/error image.png'

function Blogs() {
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState()

    useEffect(() => {
        const getData = account.get();
        getData.then(
            function (response) {
                setUserDetails(response)
            },
            function (error) {
                console.log(error);
            }
        )
    }, [])

    const handleLogout = async () => {
        try {
            await account.deleteSession("current")
            navigate("/login")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {userDetails ? (
                <>
                    <button className='absolute top-5 right-10 px-4 py-2 rounded-md border-2 border-slate-950 text-2xl text-black font-noto font-normal duration-200 ease-in hover:bg-slate-950 hover:text-white' onClick={handleLogout}>Logout</button>
                    <div className='w-full p-5 flex flex-col items-center justify-center'>
                        <h1 className='text-center text-black font-playfair font-bold text-4xl mt-5 underline italic'>All Blog Posts</h1>
                        <div className='w-full py-5 flex flex-col'>
                            <h1 className='text-left mt-5 ml-5 text-3xl font-noto font-bold text-slate-700'>Travel Blogs -</h1>
                            <div className='w-full py-4 flex gap-10 mt-5 px-5'>
                                <BlogPosts />
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className='w-full h-screen bg-slate-400/15 flex flex-col items-center justify-center'>
                    <img src={errorPic} alt="error image" className='size-80 object-center object-cover' />
                    <p className='font-noto text-2xl capitalize font-normal text-slate-950'>Please Login to access this page <Link to="/login" className='bg-slate-950 text-white px-3 cursor-pointer py-2 rounded-md'>Login</Link></p>
                </div>
            )}

        </>
    )
}

export default Blogs