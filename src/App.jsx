import { useEffect, useState } from 'react'

import './App.css'
import Products from './components/Products'
import axios from 'axios'
import Header from './components/Header'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Cart from './components/Cart'

import ProductOverView from './components/ProductOverView'

function App() {
  const [product, setProduct] = useState()
  console.log(product);

  useEffect(()=>{
    let product=axios.get(`https://dummyjson.com/products`).then(response=>setProduct(response.data))
  },[])
 
  const router=createBrowserRouter([
    {
      path:'/',
    element:<> <Header/>
       <div class="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4 ">
{
   
  product &&  product.products.map((item)=>{
      return (
        <Products key={item.id} id={item.id} name={item.title} description={item.description} price={item.price} img={item.thumbnail} category={item.category} brand={item.brand}  classui="mt-10"/>
      )
    })
    
    }
    </div>
    
    </>
    },
  
    {
      path:'cart',
      element:<> <Header/><Cart/></>
    },
    {
      path:'/product/:id',
      element:<> <Header/><ProductOverView product={product &&product.products}/></>
    }
  ])

  return (
    <>
   
    <RouterProvider router={router}/>
    
     
    </>
  )
}

export default App
