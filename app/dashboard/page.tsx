import React from 'react'
import { Metadata } from 'next'
import StudentDashboard from './dashyboard'

export const metadata: Metadata = {
  title: "AI Tutors - Personalized Learning with GyaanX", 
  description: "Experience personalized learning with AI-powered tutors at GyaanX. Get expert guidance tailored to your needs.",
  keywords: [
    "AI Tutors",
    "Personalized Learning",
    "GyaanX"
  ]
}
const page = () => {
  return (
    <div>
      <StudentDashboard/>
    </div>
  )
}

export default page