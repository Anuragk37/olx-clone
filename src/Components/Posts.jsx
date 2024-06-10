import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../utils/firebase';

const Posts = () => {
   const [products,setProducts]=useState([])

   useEffect(() => {
      const getData = async () => {
        try {
         const querySnapshot = await getDocs(collection(db, "products"));
         const products=querySnapshot.docs.map((doc) => {
            return{
               ...doc.data(),
               id:doc.id
            }
          });
          setProducts(products)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      getData(); 
    }, []);
  return (
    <div className='px-44 pt-8'>
      <div className=''>
         <h1 className='mb-3 text-3xl font-semibold'>Fresh recommendations</h1>
         <Cards products={products}/>
      </div>
    </div>
  )
}

export default Posts
