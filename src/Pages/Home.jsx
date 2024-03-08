import React from 'react'
import fitnessPic from '../assets/fitness.jpg'
import foodPic from '../assets/food.jpg'
import travelPic from '../assets/travel.jpg'
import technologyPic from '../assets/technology.jpg'
import hapinessPic from '../assets/hapiness pic.jpg'
import publishPic from '../assets/publish pic.jpg'
import engagingPic from '../assets/engaging pic.jpg'
import sharePic from '../assets/share pic.jpg'
import ideaPic from '../assets/idea pic.jpg'
import { Link } from 'react-router-dom'



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
      <div className='w-full p-5 flex flex-col items-center justify-center bg-slate-400/25 backdrop-blur-sm'>
        <div className='w-full p-2 h-screen flex items-center justify-center gap-20'>
          <h1 className='font-bold font-merriwhether text-[3.5vw] text-center max-w-3xl text-slate-950 leading-tight'>Craft your digital identity - Build your blogger profile today</h1>
          <div className='size-80 rounded-full overflow-hidden'>
            <img src={hapinessPic} alt="hapiness pic" className='w-full h-full object-top object-cover' />
          </div>
        </div>
      </div>
      <div className='w-full p-5 flex flex-col items-center justify-center bg-cyan-400/25 backdrop-blur-sm'>
        <div className='w-full p-2 h-screen flex items-center justify-center gap-20 flex-row-reverse'>
          <h1 className='font-bold font-merriwhether text-[3.5vw] text-center max-w-3xl text-slate-950 leading-tight'>Write, design, publish - Bring your blog to life effortlessly!</h1>
          <div className='size-80 rounded-full overflow-hidden'>
            <img src={publishPic} alt="hapiness pic" className='w-full h-full object-top object-cover' />
          </div>
        </div>
      </div>
      <div className='w-full p-5 flex flex-col items-center justify-center bg-lime-400/25 backdrop-blur-sm'>
        <div className='w-full p-2 h-screen flex items-center justify-center gap-20'>
          <h1 className='font-bold font-merriwhether text-[3.5vw] text-center max-w-3xl text-slate-950 leading-tight'>Craft your digital identity - Build your blogger profile today</h1>
          <div className='size-80 rounded-full overflow-hidden'>
            <img src={engagingPic} alt="hapiness pic" className='w-full h-full object-center object-cover' />
          </div>
        </div>
      </div>
      <div className='w-full p-5 flex flex-col items-center justify-center bg-amber-400/25 backdrop-blur-sm'>
        <div className='w-full p-2 h-screen flex items-center justify-center gap-20 flex-row-reverse'>
          <h1 className='font-bold font-merriwhether text-[3.5vw] text-center max-w-3xl text-slate-950 leading-tight'>Spread the love - Like and share your favorite blog posts with the world!</h1>
          <div className='size-80 rounded-full overflow-hidden'>
            <img src={sharePic} alt="hapiness pic" className='w-full h-full object-top object-cover' />
          </div>
        </div>
      </div>
      <div className='w-full p-5 flex flex-col items-center justify-center bg-emerald-400/25 backdrop-blur-sm'>
        <div className='w-full p-2 h-screen flex items-center justify-center gap-20'>
          <h1 className='font-bold font-merriwhether text-[3.5vw] text-center max-w-3xl text-slate-950 leading-tight'>Organize your thoughts - Tag and categorize your posts for easy discovery!</h1>
          <div className='size-80 rounded-full overflow-hidden'>
            <img src={ideaPic} alt="hapiness pic" className='w-full h-full object-left object-cover' />
          </div>
        </div>
      </div>
      <div className='w-full p-5 flex items-center justify-center flex-col'>
        <h3 className='text-5xl font-playfair font-bold text-center mt-10 text-slate-950 capitalize'>So what are you waiting for</h3>
        <h3 className='text-5xl font-playfair font-bold text-center mt-4 text-slate-950 capitalize'>Join now to explore </h3>
        <h3 className='text-5xl font-playfair font-bold text-center mt-4 text-slate-950 capitalize'>the world with different perspective</h3>
        <Link to={"/login"} className='text-xl font-noto font-medium cursor-pointer px-10 py-5 border border-black rounded-full relative overflow-hidden after:content-[""] after:absolute after:h-full after:w-full after:left-[-100%] after:bottom-0 after:bg-black after:rounded-full after:duration-150 after:ease-in-out after:hover:left-0 after:hover:rounded-none group mt-10'><p className='text-black z-50 relative duration-150 ease-in-out group-hover:text-white'>Get Started</p></Link>
      </div>
      <footer class="bg-slate-950 w-full h-24">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center font-noto">© 2023 <a href="https://flowbite.com/" class="hover:underline">Blog™</a>. All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-lg font-medium text-gray-500 sm:mt-0 font-noto capitalize">
            <li>
              <Link class="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
              <Link class="hover:underline me-4 md:me-6">Contact us</Link>
            </li>
            <li>
              <Link class="hover:underline me-4 md:me-6">Privacy policy</Link>
            </li>
            <li>
              <Link class="hover:underline me-4 md:me-6">Licensing</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Home