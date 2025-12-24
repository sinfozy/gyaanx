import React from 'react'
import { Metadata } from 'next'
import AuthPage from './loginpage'
export const metadata: Metadata = {
  title: "Login - GyaanX",
  description: "Log in to your GyaanX account to access personalized learning resources and track your progress.",
  keywords: [
    "GyaanX Login",
    "Student Login",
    "Learning Platform Login"
  ]
}
const page = () => {
  return (
    <div>
      <AuthPage/>
    </div>
  )
}

export default page