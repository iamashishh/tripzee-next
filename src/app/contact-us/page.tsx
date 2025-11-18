import React from 'react'
import Hero from '../components/global/Hero'
import FaqSection from '../components/FaqSection'
import EnquiryForm from '../components/EnquiryForm'

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
      <EnquiryForm/>
      <FaqSection
        title="Trip-Zee FAQ'S"
      />
    </main>
  )
}
