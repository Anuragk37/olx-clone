import React from 'react'
import { useContext } from 'react'
import { PostContext } from '../context/PostContext'
import {useNavigate} from 'react-router-dom'

const Cards = ({products}) => {
   const {setPost} =useContext(PostContext)
   const navigate = useNavigate()
   const showProduct=(product)=>{
      setPost(product)
      navigate('/product-detail')
   }
  return (
   <div className='flex flex-wrap'>
      {
      products.map((product) => (
         <div key={product.id} className="w-1/4 mb-4 pr-4" onClick={()=>showProduct(product)}>
            <div className="max-w-[17rem] rounded overflow-hidden border border-gray-400 relative p-2">
               <img className="w-full object-cover h-40" src={product.imageUrl} alt="Placeholder" />
               <button className="absolute top-0 right-0 mt-2 mr-2 bg-white p-1 rounded-full">
                  <svg className="h-6 w-6 fill-current text-sm text-black" viewBox="0 0 24 24" xmlns="http://www.w3.org/1500/svg">
                     <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
               </button>
               <div className="px-5 py-3">
                  <div className="font-bold text-xl mb-1">₹ {product.price}</div>
                  <p className="text-gray-600 text-md text-base">{product.discription}</p>
               </div>
               <div className='flex justify-between'>
                  <p className='text-sm text-gray-400'>{product.location}</p>
                  <p className='text-sm text-gray-400'>{product.createdAt}</p>
               </div>
            </div>
         </div>
      ))
      }
   </div>
 
  )
}

export default Cards
