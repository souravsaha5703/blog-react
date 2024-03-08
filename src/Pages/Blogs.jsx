import React from 'react'
import BlogPosts from '../Components/Posts/BlogPosts'

function Blogs() {
    return (
        <div className='w-full p-5 flex flex-col items-center justify-center'>
            <h1 className='text-center text-black font-playfair font-bold text-4xl mt-5 underline italic'>All Blog Posts</h1>
            <div className='w-full py-5 flex flex-col'>
                <h1 className='text-left mt-5 ml-5 text-3xl font-noto font-bold text-slate-700'>Travel Blogs -</h1>
                <div className='w-full py-4 flex gap-10 mt-5 px-5'>
                    <BlogPosts />
                </div>
            </div>
        </div>
    )
}

export default Blogs