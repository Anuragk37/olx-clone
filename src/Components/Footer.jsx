import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";

const Footer = () => {
  return (
   <div>
   <div className='wrapper bg-gray-200'>
     <div className="container mx-auto px-8 py-6 flex gap-8">
       <div className="footerbox flex-1 text-[#002f34]">
         <div className='text-sm font-bold leading-5 mb-2'>POPULAR LOCATIONS</div>
         <div className='text-xs leading-5 text-gray-500'>Kolkata</div>
         <div className='text-xs leading-5 text-gray-500'>Mumbai</div>
         <div className='text-xs leading-5 text-gray-500'>Chennai</div>
         <div className='text-xs leading-5 text-gray-500'>Pune</div>
       </div>
       <div className="footerbox flex-1 text-[#002f34]">
         <div className='text-sm font-semibold leading-5 mb-2'>TRENDING LOCATIONS</div>
         <div className='text-xs leading-5 text-gray-500'>Bhubaneshwar</div>
         <div className='text-xs leading-5 text-gray-500'>Hyderabad</div>
         <div className='text-xs leading-5 text-gray-500'>Chandigarh</div>
         <div className='text-xs leading-5 text-gray-500'>Nashik</div>
       </div>
       <div className="footerbox flex-1 text-[#002f34]">
         <div className='text-sm font-semibold leading-5 mb-2'>ABOUT</div>
         <div className='text-xs leading-5 text-gray-500'>Contact Us</div>
       </div>
       <div className="footerbox flex-1 text-[#002f34]">
         <div className='text-sm font-semibold leading-5 mb-2'>OLX</div>
         <div className='text-xs leading-5 text-gray-500'>Help</div>
         <div className='text-xs leading-5 text-gray-500'>Sitemap</div>
         <div className='text-xs leading-5 text-gray-500'>Legal & Privacy information</div>
         <div className='text-xs leading-5 text-gray-500'>Vulnerability Disclosure Program</div>
       </div>
       <div className="footerbox flex-1">
         <div className='text-sm font-semibold leading-5 mb-2'>FOLLOW US</div>
         <div className="social flex items-center mb-4">
           <FaFacebookF opacity={0.6} className='text-[#002f34]' size={20} />
           <FaInstagram opacity={0.6} className='ml-2 text-[#002f34]' size={20} />
           <FaTwitter opacity={0.6} className='ml-2 text-[#002f34]' size={20} />
           <IoPlayCircleOutline opacity={0.6} className='ml-2 text-[#002f34]' size={20} />
         </div>
         <div className='flex'>
           <img className='h-6 mr-3' src="./appstore_2x.webp" alt="" />
           <img className='h-6' src="./playstore_2x.webp" alt="" />
         </div>
       </div>
     </div>
   </div>
   <div className="bg-[#002f34]">
     <div className='container mx-auto h-16 flex justify-between items-center text-white text-xs px-8'>
       <h1>All rights reserved © 2006-2024 OLX</h1>
     </div>
   </div>
 </div>
 
  )
}

export default Footer
