import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';


const Products = ({name,description,price,img,category,id}) => {
    const dispatch=useDispatch();

    const handleClick=()=>{
          
    }
    return (
        <>
            
            <div class="rounded-md border " style={{marginTop:'50px'}}>
            <Link to={`/product/${id}`} > 
                    <img
                        src={img}
                        alt="Laptop"
                        class="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
                    />
                     </Link>
                    <div class="p-4">
                        <h1 class="inline-flex items-center text-lg font-semibold">
                            {name}
                        </h1>
                        <p class="mt-3 text-sm text-gray-600">
                            {description}
                        </p>
                        <div class="mt-4">
                            <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                #{category}
                            </span>
                           
                        </div>
                        <div class="mt-3 flex items-center space-x-2">
                            <span class="block text-sm font-semibold">Colors : </span>
                            <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
                            <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
                            <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
                        </div>
                        <div class="mt-5 flex items-center space-x-2">
                            <span class="block text-sm font-semibold">Price : </span>
                            <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                                ${price}
                            </span>
                           
                        </div>
                       
                        <button
                            type="button"
                            class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            onClick={()=>dispatch(addItem({id:id,name:name,description:description,price:price,img:img,category:category,quantity:1})) }
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
               
            

        </>
    )
}

export default Products