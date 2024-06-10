import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import olxLogo from '../assets/plx-logo.png'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';


const SignIn = () => {
   const [email,setEmail]=useState("")
   const [password,setPassword] =useState("")
   const navigate = useNavigate()
   const handleSignIn = (e)=>{
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate("/")
            // ...
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message)
         });
   }
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <div className="max-w-[25rem] w-full bg-white p-8 shadow-md rounded-md">
            {/* Logo */}
            <div className="mb-8">
               <img src={olxLogo} alt="Logo" className="mx-auto w-24" />
            </div>

            {/* Form */}
            <form onSubmit={handleSignIn}>
               <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
               </div>
               <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                  <input onChange={(e)=>setPassword(e.target.value)} type="password" id="password" name="password" className="w-full border border-cyan-900 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
               </div>
               <button type="submit" className="w-full bg-cyan-900 text-white font-bold py-2 px-4 rounded-md focus:outline-none hover:bg-blue-600">Login</button>
               <div className="flex justify-center my-5">
                  <div className='mx-auto text-md underline'><Link to={'/signup'}>New user? Sign Up</Link></div>
               </div>
            </form>
         </div>
      </div>
    </div>
  )
}

export default SignIn
