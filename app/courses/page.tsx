import React from 'react'
import CoursesPage from './cources'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Courses - GyaanX',
  description: 'Explore the diverse range of AI-powered courses offered by GyaanX for students from Class 6th to 12th and SSC aspirants. Experience personalized learning, 24/7 mentorship, and adaptive syllabi designed to help you excel in your academic journey.',
  keywords: ['GyaanX Courses', 'AI-Powered Learning', 'Personalized Study Plans', '24/7 Mentorship', 'Adaptive Syllabi', 'Class 6 AI Courses', 'Class 7 AI Courses', 'Class 8 AI Courses', 'Class 9 AI Courses', 'Class 10 AI Courses', 'Class 11 AI Courses', 'Class 12 AI Courses', 'SSC AI Courses', 'Online Learning India', 'JEE Preparation', 'NEET Preparation'],
}
const page = () => {
  return (
    <div>
      <CoursesPage/>
    </div>
  )
}

export default page