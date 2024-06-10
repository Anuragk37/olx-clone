import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import olxLogo from '../assets/plx-logo.png'
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth'
import { auth,db } from '../utils/firebase'
import { collection, addDoc } from "firebase/firestore"; 
import { userValidator } from '../utils/validators'


const SignUp = () => {
   const [name,setName]=useState("")
   const [phone,setPhoneNo]=useState("")
   const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   const [errorMessage,setErrorMessage] = useState("")
   const navigate=useNavigate()

   const handleSignUp = async (e) => {
      e.preventDefault();
      if (name && phone && email && password ){
         const message = userValidator(email,phone)
         setErrorMessage(message)
         if(message) return ;

         try {
         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
         const user = userCredential.user;
         await updateProfile(user, {
            displayName: name,
         });
         await addDoc(collection(db, "users"), {
            id: user.uid,
            name: name,
            phone: phone
         });
         navigate("/")
         } catch (error) { 
            setErrorMessage(error.message)
         }
      }else{
         setErrorMessage("every field is required")
      }
    };
    
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <div className="max-w-[25rem] w-full bg-white p-8 shadow-md rounded-md">
            {/* Logo */}
            <div className="mb-8">
               <img src={olxLogo} alt="Logo" className="mx-auto w-24" />
            </div>

            {/* Form */}
            <form onSubmit={handleSignUp}>
               <div className='mb-5'>
                  <p className='text-red-900 text-center'>{errorMessage}</p>
               </div>
               <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                  <input type="text" onChange={(e)=>setName(e.target.value)}  className="w-full border border-cyan-900 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
               </div>
               <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Phone No</label>
                  <input type="text" onChange={(e)=>setPhoneNo(e.target.value)} className="w-full border border-cyan-900 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
               </div>
               <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input type="text" onChange={(e)=>setEmail(e.target.value)}  className="w-full border border-cyan-900 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
               </div>
               <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                  <input type="password" onChange={(e)=>setPassword(e.target.value)} className="w-full border border-cyan-900 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
               </div>
               
               <button type="submit" className="w-full bg-cyan-900 text-white font-bold py-2 px-4 rounded-md focus:outline-none hover:bg-blue-600">SignUp</button>
               <div className="flex justify-center my-5">
                  <div className='mx-auto text-md underline'><Link to={'/signin'}>Already have account? Sign In</Link></div>
               </div>
            </form>
         </div>
      </div>
    </div>
  )
}

export default SignUp
