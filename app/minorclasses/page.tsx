import React from 'react'
import JuniorExcellence from './minor'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Junior Classes - GyaanX",
  description: "Explore Junior Classes at GyaanX. Tailored learning programs for young minds to foster growth and academic excellence.",
  keywords: [
    "Junior Classes",
    "GyaanX Junior Programs",
    "Academic Excellence for Kids"
  ]
}

const page = () => {
  return (
    <div>
      <JuniorExcellence />
    </div>
  )
}

export default page