import React, { useEffect,useState } from 'react'
import { useContext } from 'react'
import { PostContext } from '../context/PostContext'
import { doc, getDocs ,where,query,collection} from "firebase/firestore";
import { db } from '../utils/firebase';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const ProductDetails = () => {
   const [userDetails,setUserDetails] = useState({})
   const {post}=useContext(PostContext)

   useEffect(()=>{
      const getUserData=async()=>{
         const docRef = query(collection(db, "users"), where("id", "==", post.userId))
         const querySnapshot = await getDocs(docRef);

         querySnapshot.forEach((doc) => {
            setUserDetails(doc.data())
          })
      }
      getUserData()
      console.log("------------------------------",userDetails)
   },[])

  return (
   <div className='bg-gray-100'>
      <Header />
      <div className='px-44'>
      <div className="flex viewParentDiv">
         <div className="imageShowDiv p-4 w-8/12">
         <div className="h-[550px]">
            <img
               src={post.imageUrl}
               alt=""
               className="object-cover w-full h-full"
            />
         </div>
         </div>
         <div className="rightSection p-4 mt-12 w-4/12">
            <div className="productDetails bg-white border border-gray-400 rounded p-4">
            <p className="font-bold text-3xl"> ₹ {post.price} </p>
            <span className=" text-2xl ml-4">{post.productName}</span>
            <p className='text-cyan-800 ml-4 mb-4'>{post.discription}</p>
            <span className='ml-4'>posted on : {post.createdAt}</span>
            </div>
            <div className="contactDetails bg-white border border-gray-400 rounded p-6 mt-4">
            <p className="font-semibold text-3xl">Seller details</p>
            <p className="text-lg mt-4">Name : {userDetails.name}</p>
            <p className="text-lg">Phone : {userDetails.phone}</p>
            </div>
            <div className="contactDetails bg-white border border-gray-400 rounded p-2 mt-4">
            <p className="font-bold text-xl">Posted In</p>
            <p className="text-md mt-3">{post.location}</p>
            </div>
         </div>
      </div>
      </div>
      <Footer />
 </div>
 
  )
}

export default ProductDetails
