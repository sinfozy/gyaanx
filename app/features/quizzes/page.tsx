import React from 'react'
import DailyQuizzes from './quizzes'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Daily Quizzes - GyaanX',
  description: 'Test your knowledge and improve your skills with GyaanX Daily Quizzes. Designed for students from Class 6th to 12th and SSC aspirants, our quizzes offer personalized learning experiences powered by AI.',
  keywords: ['GyaanX Daily Quizzes', 'AI-Powered Quizzes', 'Personalized Learning', 'Class 6 Quizzes',
    'Class 7 Quizzes', 'Class 8 Quizzes', 'Class 9 Quizzes',
    'Class 10 Quizzes', 'Class 11 Quizzes', 'Class 12 Quizzes', 'SSC Quizzes'],
}
const page = () => {
  return (
    <div>
      <DailyQuizzes/>
    </div>
  )
}

export default page