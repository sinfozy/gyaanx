import React from 'react'
import AboutPage from './about'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'About Us - GyaanX',
  description: 'Learn more about GyaanX, our mission to democratize elite education using AI, and how we are transforming learning for students across India.',
  keywords: ['GyaanX', 'About GyaanX', 'AI Education', 'EdTech India', 'Online Learning', 'JEE Preparation', 'NEET Preparation', 'AI Tutors', 'Personalized Learning', 'Education Technology', 'Student Success', 'Learning Platform', 'AI-Powered Learning', 'GyaanX Mission', 'GyaanX Vision'],
} 
 

const page = () => {
  return (
    <div>
      <AboutPage />
    </div>
  )
}

export default page