"use client"
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

function BackButton() {
    const router = useRouter()
  return (
   
         <button 
           onClick={() => router.push('/')} 
           className="lg:absolute text-gray-700 top-8 left-12  px-6 py-3 mb-4  bg-white rounded-2xl  lg:mb-0 flex items-center gap-2  hover:text-green-400 transition-all"
         >
           <FiArrowLeft className="text-2xl" />
           <span className="text-sm font-medium">Back to Home</span>
         </button>
   
  )
}

export default BackButton