'use client'

import {FcGoogle} from 'react-icons/fc'

import { signIn,useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
export default function Home() {

  const {data:session}=useSession()
  const router=useRouter()

  if(session){
    router.replace('/homePage')
    return null
  }

  return (
      <>
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-8">
              <h1 className="text-4xl font-bold text-blue-600 mb-6">Login</h1>
              <h2 className="text-xl text-gray-700 mb-4">Login with Google</h2>
              <button
                  onClick={() => signIn("google")}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold border border-gray-300 rounded-md shadow-md hover:bg-gray-100"
              >
                  <FcGoogle className="text-2xl" /> Login
              </button>
          </div>
      </>
  )
}
