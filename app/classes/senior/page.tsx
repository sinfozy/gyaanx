import React from 'react'
import SeniorBoards from './senior'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Senior Classes - GyaanX',
    description: 'Join GyaanX Senior Classes for Class 11th & 12th students. Experience AI-powered learning with personalized study plans, 24/7 mentorship, and adaptive syllabi for CBSE, ICSE, and State Boards.',
    keywords: ['GyaanX Senior Classes', 'Class 11 AI Learning', 'Class 12 AI Learning', 'CBSE AI Tutors', 'ICSE AI Tutors', 'State Board AI Learning', 'AI-Powered Education', 'Personalized Study Plans', '24/7 Mentorship', 'Adaptive Syllabi', 'Online Learning India', 'JEE Preparation', 'NEET Preparation', 'Senior School AI Courses'],
}
const page = () => {
  return (
    <SeniorBoards />
  )
}

export default page