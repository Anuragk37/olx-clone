import { useState,createContext } from "react";

export const PostContext=createContext()

export function ProductPost({children}){
   const [post,setPost] = useState()
   return(
      <PostContext.Provider value={{post,setPost}} >
         {children}
      </PostContext.Provider>
   )
}

export default ProductPost