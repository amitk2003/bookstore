import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
export default function Signup() {
  const [showPassword,setShowPassword]=useState(false);
 return (
    <div  className='h-auto bg-zinc-900 px-12 py-8 flex items-center justify-center mt-20'>
      <div className='bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-1/2 lg:w-2/6'>
      <p className='text-zinc-200 text-xl'>Sign-up</p>
      <div className='mt-4'>
        <div>

        <label htmlFor=''className='text-zinc-400'>
          Username
        </label>
        <input type='text' className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' placeholder="UserName" name='username' required/>
        </div>
        <div className='mt-4'>

        <label htmlFor=''className='text-zinc-400'>
          Email
        </label>
        <input type='email' className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' placeholder="ex: yourname@gmail.com" name='Email' required/>
        </div>
        <div className="mt-4 relative"> {/* Added relative here */}
            <label htmlFor="password" className="text-zinc-400">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none pr-10" // Added padding-right
              placeholder="password"
              name="password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[70%] transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={30} />
              ) : (
                <AiOutlineEye size={30} />
              )}
            </button>
          </div>
        <div className='mt-4'>

        <label htmlFor=''className='text-zinc-400'>
          Address
        </label>
        <textarea  className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' placeholder="address" name='password' required rows="3"/>
        </div>
        <div className='mt-4'>
          <button className='w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-zinc-400'>SignUp</button>
        </div>
        <p className='flex mt-4 items-center justify-center text-zinc-200 font-semibold'>Or</p>
        <p className='flex mt-4 items-center justify-center text-zinc-500 font-semibold'>Already have an Account? &nbsp;
          <Link to='/login' className='hover:text-blue-500'><u>Login</u></Link>
        </p>
      </div>
      </div>
    
    </div>
  )
}
