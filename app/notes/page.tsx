import React from 'react'
import NotesAndPDFs from './notepage'
import               { Metadata } from 'next'

export const metadata: Metadata = {
   title: "Notes & PDFs - GyaanX",
   description: "Access a wide range of educational notes and PDFs at GyaanX. Enhance your learning with our comprehensive resources.",
   keywords: [
     "GyaanX Notes",
       "Educational PDFs",
       "Learning Resources",
         "Student Notes"
   ]
}
const page = () => {
  return (
    <div>
      <NotesAndPDFs />
    </div>
  )
}

export default page