import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useAuthContext } from '../context/AuthContext'

const Header = () => {
   const user = useAuthContext()
   const handleSignOut =()=>{
      console.log("clicked")
      signOut(auth).then(() => {

       }).catch((error) => {
         console.log(error)
       });
   }
  return (
   <div>
      <div className='w-screen h-17 bg-gray-200 flex items-center justify-between px-8 py-3'>
      <a href="">
         <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd">
            <path class="rui-w4DG7" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
         </svg>
      </a>
      <div className="w-56">
         <select name="cars" id="cars" className="w-full h-12 py-2 text-lg border-2 border-cyan-950 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
         </select>
      </div>
      <div className="flex items-center">
         <input type="text" className='w-[700px] px-6 h-12 border-2 border-cyan-950 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-l-lg' placeholder='Find cars, mobile phones, and more' />
         <button className='bg-cyan-950 p-3 rounded-r-lg text-white w-12'>O</button>
      </div>
      <div className="">
         <select name="cars" id="cars" className="h-12 py-2 text-lg bg-gray-200 font-bold rounded">
            <option value="volvo">English</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
         </select>
      </div>
      {user&& <p>Hi {user.displayName}</p>}
      {user ? (
         <button onClick={handleSignOut} className="text-cyan-950 font-bold text-lg underline">Logout</button>
      ) : (
         <button className='text-cyan-950 font-bold text-lg underline'>
            <Link to={'/signin'}>Login</Link>
         </button>
      )}
      <div className='border-2 border-yellow-600 rounded-full'>
         <button className="bg-white text-cyan-950 font-bold px-4 rounded-full border-4 border-yellow-600">
            <Link to={'/sell'}>Sell</Link>
         </button>
      </div>
      </div>
      <div className='h-8 bg-slate-100 flex items-center pl-32 shadow-sm'>
         <div className="w-56">
            <select name="cars" id="cars" className="text-center text-md bg-slate-100 font-semibold rounded">
               <option value="volvo">ALL CATEGORIES </option>
               <option value="saab">Saab</option>
               <option value="mercedes">Mercedes</option>
               <option value="audi">Audi</option>
            </select>
         </div>
         <a className='text-cyan-800 mr-8 font-semibold' href="">Cars</a>
         <a className='text-cyan-800 mr-8 font-semibold' href="">Mobile Phone</a>
         <a className='text-cyan-800 mr-8 font-semibold' href="">Watchs</a>
         <a className='text-cyan-800 mr-8 font-semibold' href="">Motor Cycle</a>
         <a className='text-cyan-800 mr-8 font-semibold' href="">For Sale: Houses & Apartments</a>
         <a className='text-cyan-800 mr-8 font-semibold' href="">Scooters</a>
         <a className='text-cyan-800 mr-8 font-semibold' href="">Commercial & Other Vehicles</a>
         
      </div>
   </div>
 
  )
}

export default Header
