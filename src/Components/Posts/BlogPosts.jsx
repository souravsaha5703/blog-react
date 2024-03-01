import React from 'react'
import sample from '../../assets/sample travel image.jpg'
import sampleProfile from '../../assets/sample profile img.jpg'
import { RiHeartFill } from 'react-icons/ri'

function BlogPosts() {
    return (
        <>
            <div className='h-96 w-1/3 relative rounded-xl overflow-hidden cursor-pointer shadow-xl shadow-slate-400 duration-200 ease-linear'>
                <img src={sample} className='w-full h-2/3 object-cover object-center' />
                <h3 className='px-3 pt-4 pb-2 rounded-md text-left font-poppins font-normal text-xl text-slate-950'>Wanderlust Chronicles: Tales from the Road</h3>
                <div className='flex w-full'>
                    <RiHeartFill className='text-red-600 text-3xl ml-3' />
                    <p className='ml-2 font-noto font-normal text-xl'>1000</p>
                </div>
                <img src={sampleProfile} alt="" className='size-10 rounded-full absolute right-5 bottom-9 object-center' />
                <h4 className='text-base absolute right-4 bottom-2 font-noto font-normal'>travel.isa</h4>
            </div>
            <div className='h-96 w-1/3 relative rounded-xl overflow-hidden cursor-pointer shadow-xl shadow-slate-400 duration-200 ease-linear'>
                <img src={sample} className='w-full h-2/3 object-cover object-center' />
                <h3 className='px-3 pt-4 pb-2 rounded-md text-left font-poppins font-normal text-xl text-slate-950'>Wanderlust Chronicles: Tales from the Road</h3>
                <div className='flex w-full'>
                    <RiHeartFill className='text-red-600 text-3xl ml-3' />
                    <p className='ml-2 font-noto font-normal text-xl'>1000</p>
                </div>
                <img src={sampleProfile} alt="" className='size-10 rounded-full absolute right-5 bottom-9 object-center' />
                <h4 className='text-base absolute right-4 bottom-2 font-noto font-normal'>travel.isa</h4>
            </div>
        </>

    )
}

export default BlogPosts