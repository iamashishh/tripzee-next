import React from 'react'
import HeroSection from '../components/global/HeroSection'
const terms = [
    {
        title: "1. Introduction",
        content: "Welcome to Tripzee Holidays. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner."
    },
    {
        title: "2. Information We Collect",
        content: "We may collect personal information such as your name, email address, phone number, and payment details when you make a booking or interact with our services."
    },
    {
        title: "3. How We Use Your Information",
        content: "We use your personal information to process bookings, provide customer support, send promotional materials, and improve our services."
    },
    {
        title: "4. Data Security",
        content: "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction."
    },
    {
        title: "5. Your Rights",
        content: "You have the right to access, correct, or delete your personal information. You can also opt-out of receiving marketing communications from us."
    },
    {
        title: "6. Changes to This Policy",
        content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date."
    },
    {
        title: "7. Contact Us",
        content: "If you have any questions or concerns about our Privacy Policy, please contact us at privacy@tripzee.com."}
]
export default function page() {
  return (
    <main>
      <HeroSection
        backgroundImage="/assets/bg.jpg"
        title={
          <>
            Privacy Policy 
          </>
        }
        subtitle="Boost team bonding, reward top performers, and explore world-class destinations — all planned seamlessly by MICA."
        buttonText="Enquire Now"
        buttonLink="/enquiry-form"
      />
<div className='bg-white max-container py-10'>
  {terms.map((term, index) => (
    <section key={index} className="mb-6">
      <h2 className="text-heading mb-2">{term.title}</h2>
      <p className="text-lg text-gray-700">{term.content}</p>
    </section>
  ))}
</div>
    </main>
  )
}
