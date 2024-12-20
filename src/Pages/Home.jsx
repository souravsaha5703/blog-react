import React from 'react';
import Meteors from "@/components/ui/meteors";
import { Link } from 'react-router-dom';
import Navbar from '@/components/Header/Navbar';
import FeatureCards from '@/components/FeatureCards/FeatureCards';
import { Bot, Edit, Share } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";

function Home() {
  return (
    <>
      <Navbar />
      <div className='w-full flex items-center justify-center flex-col bg-background'>
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <Meteors number={30} />
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-[90px] font-semibold leading-tight text-transparent dark:from-white dark:to-slate-900/10 max-[997px]:text-[64px] max-[645px]:w-[425px] max-[425px]:text-[45px] max-[425px]:w-[325px]">
            Every Page, a New Story
          </span>
          <span className='text-center text-2xl font-normal mt-5 text-slate-950 dark:text-slate-100 w-[500px] max-[645px]:text-lg max-[645px]:w-[425px] max-[425px]:w-[325px]'>A platform to share your stories, thoughts, and journeys, one page at a time.</span>
          <RainbowButton className="mt-6 bg-slate-950 dark:bg-slate-100 text-white dark:text-slate-950 font-noto font-medium text-xl w-60 h-14 max-[576px]:w-48 max-[576px]:text-base max-[576px]:h-12">Explore Stories</RainbowButton>
        </div>
        <section className="container mx-auto px-4 py-16 h-screen flex flex-col items-center justify-center">
          <h3 className="text-6xl font-semibold text-center mb-12 font-noto text-slate-950 dark:text-slate-100 max-[600px]:text-4xl max-[425px]:text-3xl">What You Can Do with Blog</h3>
          <div className="w-full flex flex-wrap gap-8 items-center justify-center overflow-hidden">
            <FeatureCards
              icon={<Edit className="h-8 w-8" />}
              title="Create Engaging Content"
              description="Use our intuitive editor to craft beautiful stories with ease."
            />
            <FeatureCards
              icon={<Share className="h-8 w-8" />}
              title="Share Your Stories"
              description="Publish and share your content across various social platforms."
            />
            <FeatureCards
              icon={<Bot className="h-8 w-8" />}
              title="AI Buddy With You"
              description="Create and summarize your stories with the help of AI."
            />
          </div>
        </section>
        <div className='w-full p-5 flex items-center justify-center flex-col'>
          <h3 className='text-5xl font-playfair font-bold text-center mt-10 text-slate-950 dark:text-slate-100 capitalize max-[768px]:text-xl max-[768px]:mt-2'>So what are you waiting for</h3>
          <h3 className='text-5xl font-playfair font-bold text-center mt-4 text-slate-950 dark:text-slate-100 capitalize max-[768px]:text-xl max-[768px]:mt-2'>Join now to explore </h3>
          <h3 className='text-5xl font-playfair font-bold text-center mt-4 text-slate-950 dark:text-slate-100 capitalize max-[768px]:text-xl max-[768px]:mt-2'>the world with different perspective</h3>
          <Link to={"/login"} className='text-xl font-noto font-medium cursor-pointer px-10 py-5 border-2 border-black dark:border-slate-50 rounded-full relative overflow-hidden after:content-[""] after:absolute after:h-full after:w-full after:left-[-100%] after:bottom-0 after:bg-black after:dark:bg-slate-100 after:rounded-full after:duration-150 after:ease-in-out after:hover:left-0 after:hover:rounded-none group mt-10 max-[768px]:px-6 max-[768px]:py-3'><p className='text-black dark:text-slate-100 z-50 relative duration-150 ease-in-out group-hover:text-white group-hover:dark:text-slate-950'>Get Started</p></Link>
        </div>
      </div>
    </>
  )
}

export default Home