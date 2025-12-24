import React from 'react'
import { Metadata } from 'next'

  import Dashboard from './aitutorspage'
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
      <Dashboard/>
    </div>
  )
}

export default page