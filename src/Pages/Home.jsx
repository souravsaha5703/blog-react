import React from 'react'
import fitnessPic from '../assets/fitness.jpg'
import foodPic from '../assets/food.jpg'
import travelPic from '../assets/travel.jpg'
import technologyPic from '../assets/technology.jpg'
import BlogPosts from '../Components/Posts/BlogPosts'


function Home() {
  return (
    <div className='w-full flex items-center justify-center flex-col'>
      <div className='w-full h-screen flex items-center justify-center flex-col relative bg-gray-400/15 backdrop-blur-sm overflow-hidden rounded-b-2xl'>
        <h1 className='text-black font-black font-merriwhether text-[5vw] text-center drop-shadow-lg leading-10 z-30 mt-14'><span className='text-black'>Inspiration at</span> Every Click</h1>
        <h1 className='text-black font-black font-merriwhether text-[5vw] text-center drop-shadow-lg z-30 mt-6'>Explore, Learn, Grow.</h1>
        <img src={fitnessPic} alt="fitness pic" className='w-40 h-60 object-center object-cover rounded-sm absolute top-[15%] left-[3%] rotate-12' />
        <img src={travelPic} alt="travel pic" className='w-44 h-60 object-center object-cover rounded-sm absolute top-[16%] right-[2.5%] rotate-[-15deg]' />
        <img src={technologyPic} alt="technology pic" className='w-44 h-60 object-center object-cover rounded-sm absolute bottom-[6%] right-[3%] rotate-12' />
        <img src={foodPic} alt="food pic" className='w-44 h-60 object-center object-cover rounded-sm absolute bottom-[6%] left-[3%] rotate-[-15deg]' />
      </div>
      <div className='w-full p-5 flex flex-col items-center justify-center'>
        <h1 className='text-center text-black font-playfair font-bold text-4xl mt-5 underline italic'>All Blog Posts</h1>
        <div className='w-full py-5 flex flex-col'>
          <h1 className='text-left mt-5 ml-5 text-3xl font-noto font-bold text-slate-700'>Travel Blogs -</h1>
          <div className='w-full py-4 flex gap-10 mt-5 px-5'>
            <BlogPosts/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home