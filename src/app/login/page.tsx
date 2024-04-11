"use client"
import React from 'react'
import { signIn } from 'next-auth/react'

function page() {
  return (
    <div  className='flex justify-center items-center h-screen'>
        <div>
        <h1>Login with github</h1>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' 
        onClick={async()=>{
           const result = await signIn("github",{
            callbackUrl: "/dashboard",
            redirect:false,
        });
        }}>
            Accede a tu cuenta
        </button>
        </div>
    </div>
  )
}

export default page