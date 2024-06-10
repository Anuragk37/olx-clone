import './App.css'
import Home from './Pages/Home'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import { AuthProvider } from './context/AuthContext'
import SellProduct from './Pages/SellProduct'
import ProductDetails from './Pages/ProductDetails'
import ProductPost from './context/PostContext'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home />
    },
    {
      path:'/signin',
      element:<SignIn />
    },
    {
      path:'/signup',
      element:<SignUp />
    },
    {
      path:'/sell',
      element:<SellProduct />
    },{
      path:'/product-detail',
      element:<ProductDetails />
    }
  ])

  return (
    <>
    <AuthProvider>
      <ProductPost>
        <RouterProvider router={router} />
      </ProductPost>  
    </AuthProvider>
      
    </>
  )
}

export default App
