import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

  return (
   <div className="flex flex-col min-h-screen items-center bg-white">
  {/* main content centered */}
  <main className="flex flex-1 items-center justify-center w-full">
    <div className='border-2 rounded-xl border-emerald-600 p-6 sm:p-10 lg:p-20 flex flex-col items-center w-[90%] max-w-2xl transform transition-shadow duration-300 hover:shadow-lg'>
      <h1
        className='text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-600 mb-6 text-center
                   transform transition duration-300 ease-in-out hover:scale-105 hover:-translate-y-1
                   hover:text-emerald-700 cursor-pointer whitespace-normal md:whitespace-nowrap'
        aria-label='Project title'
      >
        Employee Management System
      </h1>

      <form 
        onSubmit={(e) => { submitHandler(e) }}
        className='flex flex-col items-center justify-center w-full'
      >
        <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
          className='outline-none bg-transparent text-gray-900 caret-emerald-600 border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 w-full'
          type="email"
          placeholder='Enter your email' 
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
          className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400 w-full'
          type="password"
          placeholder='Enter password'
        />

        <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full'>
          Log in
        </button>
      </form>
    </div>
    {/* end of card */}
  </main>

  {/* footer at bottom */}
  <footer className="w-full text-center py-4 text-sm text-gray-500">
    © {new Date().getFullYear()} Akash Sharma. All rights reserved.
  </footer>
</div>
  )
}

export default Login
