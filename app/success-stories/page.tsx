import React from 'react'
import Success from './stories'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Success Stories - GyaanX",
  description: "Discover inspiring success stories from GyaanX learners. See how our platform has transformed lives through personalized education.",
  keywords: [
    "GyaanX Success Stories",
    "Student Achievements",
    "Personalized Learning",
    "Education Transformation"
  ]
}

const page = () => {
  return (
    <div>
      <Success/>
    </div>
  )
}

export default page