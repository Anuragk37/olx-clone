import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { collection, addDoc } from "firebase/firestore"; 
import { storage,db } from '../utils/firebase';
import { ref ,uploadBytes,getDownloadURL} from "firebase/storage";
import { useAuthContext } from '../context/AuthContext';


const SellProduct = () => {
   const [productName,setProductName] = useState("")
   const [category,setCategory] = useState("")
   const [price,setPrice] = useState("")
   const [discription,setDiscription] = useState("")
   const [location,setLocation] = useState("")
   const [image,setImage]=useState([])
   const [errorMessage,setErrorMessage] = useState("")

   const navigate =useNavigate()

   const user=useAuthContext()
   const date= new Date()

   useEffect(()=>{
      if(!user){
         navigate('/signin')
      }
   },[])
  
   const handleSubmission = async (e) =>{
      e.preventDefault()
      if(productName && category && price && discription && location && image ){
         try{
            const storageRef = ref(storage, `images/${image.name}`);
   
            await uploadBytes(storageRef,image)
            const imageUrl =await getDownloadURL(storageRef)
   
            await addDoc(collection(db, "products"), {
               productName,
               category,
               price,
               discription,
               location,
               imageUrl,
               userId:user.uid,
               createdAt:date.toDateString()
   
             });
             navigate('/')
         }catch (error){
            setErrorMessage(error.message)
         }
      }else{
         setErrorMessage("every field is required ")
      }
   } 



  return (
    <div>
      <h1 className='text-center pt-10 text-2xl font-semibold'>Post Your Add</h1>

      
      <div className="flex justify-center items-center min-h-screen">
         <form className="bg-white rounded border border-cyan-950 px-8 pr-52 pt-6 pb-8 mb-4 w-2/4">
         <p className='text-red-900 text-center font-semibold text-lg'>*{errorMessage}</p>
         <div className="mb-4 mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
               Product Name
            </label>
            <input
               className=" appearance-none border rounded w-full py-2 px-3 h-14 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-cyan-950"
               id="productName" type="text" placeholder="Enter product name" onChange={(e)=>setProductName(e.target.value)}
            />
         </div>
         <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
               Category
            </label>
            <input
               className=" appearance-none border h-14 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-cyan-950"
               id="category" type="text" placeholder="Enter category" onChange={(e)=>setCategory(e.target.value)}
            />
         </div>
         <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
               Price
            </label>
            <input
               className=" appearance-none border h-14 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-cyan-950"
               id="price" type="number" placeholder="Enter price" onChange={(e)=>setPrice(e.target.value)}
            />
         </div>
         <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
               Description
            </label>
            <textarea
               className=" appearance-none border h-20 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-cyan-950"
               id="description" placeholder="Enter description" onChange={(e)=>setDiscription(e.target.value)}
            />
         </div>
         <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
               Location
            </label>
            <input
               className=" appearance-none border rounded h-14 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-cyan-950"
               id="location" type="text" placeholder="Enter location" onChange={(e)=>setLocation(e.target.value)}
            />
         </div>
         <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
               Upload Image
            </label>
            <input
               className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-cyan-950"
               id="image" type="file" accept="image/*" onChange={(e)=>setImage(e.target.files[0])}
            />
         </div>
         <hr />
         <div className="flex items-center justify-between">
            <button
               className="bg-cyan-950 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
               type="button" onClick={handleSubmission}>
               Submit
            </button>
         </div>
         </form>
      </div>
    </div>
  )
}

export default SellProduct
