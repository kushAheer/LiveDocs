import { SignIn } from '@clerk/nextjs'
import React from 'react'

function SignUpPage() {
  return (
        <main className='auth-page'>
            <SignIn />
        </main>
  )
}

export default SignUpPage