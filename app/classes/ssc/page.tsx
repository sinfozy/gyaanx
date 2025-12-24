import React from 'react'
import { Metadata } from 'next'
import SSCMasterpage from './ssc'
export const metadata: Metadata = {
    title: 'SSC Classes - GyaanX',
    description: 'Join GyaanX SSC Classes for comprehensive preparation for SSC CGL, CHSL, and other SSC exams. Experience AI-powered learning with personalized study plans, 24/7 mentorship, and adaptive syllabi.',
    keywords: ['GyaanX SSC Classes', 'SSC CGL Preparation', 'SSC CHSL Preparation', 'AI-Powered Learning', 'Personalized Study Plans', '24/7 Mentorship', 'Adaptive Syllabi', 'Online Learning India', 'Government Job Preparation', 'SSC Exam Coaching', 'AI Tutors for SSC', 'SSC Practice Tests', 'SSC Study Material', 'SSC Exam Strategies'],
}
const page = () => {
  return (
    <SSCMasterpage />
  )
}

export default page