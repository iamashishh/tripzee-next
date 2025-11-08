import React from 'react'
import Hero from '../components/global/Hero'
import BlogStories from '../components/blogs'

export default function page() {
  return (
   <main className="min-h-screen  bg-white flex flex-col">
     <div className="max-container ">
        <Hero
          title="Contact Us"
          subtitle="Create Unforgettable Memories in the Heart of the Himalayas."
          backgroundImage="/assets/honeymoon.png"
          showButton={false}
        />
      </div>
<BlogStories/>
<div className=''>
    <h2 className='text-[20px] max-container text-black  '>
        Explore All Blogs
    </h2>
    < BlogStories/>
</div>
    </main>
  )
}
