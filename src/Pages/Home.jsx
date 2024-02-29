import React from 'react'
import fitnessPic from '../assets/fitness.jpg'
import foodPic from '../assets/food.jpg'
import travelPic from '../assets/travel.jpg'
import technologyPic from '../assets/technology.jpg'


function Home() {
  return (
    <div className='w-full flex items-center justify-center flex-col'>
      <div className='w-full h-screen flex items-center justify-center flex-col relative bg-indigo-400/25 backdrop-blur-sm overflow-hidden rounded-b-xl'>
        <h1 className='text-black font-black font-merriwhether text-[4.8vw] text-center drop-shadow-lg leading-10 z-30 mt-14'><span className='text-indigo-500'>Empowering</span> Minds, <span className='text-indigo-500'>Igniting</span> Passion</h1>
        <h1 className='text-black font-black font-merriwhether text-[4.8vw] text-center drop-shadow-lg z-30'>Your Journey Starts Here.</h1>
        <img src={fitnessPic} alt="fitness pic" className='w-40 h-60 object-center object-cover rounded-sm absolute top-[15%] left-[3%] rotate-12' />
        <img src={travelPic} alt="travel pic" className='w-44 h-60 object-center object-cover rounded-sm absolute top-[16%] right-[2.5%] rotate-[-15deg]' />
        <img src={technologyPic} alt="technology pic" className='w-44 h-60 object-center object-cover rounded-sm absolute bottom-[6%] right-[3%] rotate-12' />
        <img src={foodPic} alt="food pic" className='w-44 h-60 object-center object-cover rounded-sm absolute bottom-[6%] left-[3%] rotate-[-15deg]' />
      </div>
    </div>
  )
}

export default Home