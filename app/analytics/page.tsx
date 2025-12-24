import React from 'react'
import { Metadata } from 'next'
import ProgressTracking from './analytics'
export const metadata: Metadata = {
  title: "Analytics - GyaanX Performance Dashboard",
  description: "Track your learning progress with GyaanX Analytics. Get insights on accuracy, solve time, and personalized AI feedback to boost your performance.", 
  keywords: [
    "GyaanX Analytics",
    "Learning Progress",
    "Performance Dashboard",
    "AI Feedback",
    "Student Performance"
  ]
}
const page = () => {
  return (
    <div>
      <ProgressTracking />
    </div>
  )
}

export default page