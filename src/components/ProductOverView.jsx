import React from 'react'
import { useParams } from 'react-router-dom'

const ProductOverView = ({product}) => {
  const {id}=useParams();
  const Oneproduct=product.find(products=>products.id===Number(id));
  return (
    <>
    <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16 " >
  <div className="pt-8">
    <div className="flex items-center mt-10">
      <ol className="flex w-full items-center overflow-hidden">
        
        <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
          <a className="capitalize" href="#">
            products
          </a>
        </li>
        <li className="text-body mt-0.5 text-base">/</li>
        <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
          <a className="capitalize" href="#">
           {Oneproduct.title}
          </a>
        </li>
      </ol>
    </div>
  </div>
  <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
    <div className="col-span-5 grid grid-cols-2 gap-2.5">
      <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
        <img
          src={Oneproduct.thumbnail}
          alt="Nike Air Max 95 By You--0"
          className="w-full object-cover"
        />
      </div>
      <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
        <img
          src={Oneproduct.images[3]?Oneproduct.images[3]:Oneproduct.thumbnail}
          alt="Nike Air Max 95 By You--0"
          className="w-full object-cover"
        />
      </div>
      <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
        <img
          src={Oneproduct.images[2]?Oneproduct.images[2]:Oneproduct.thumbnail}
          className="w-full object-cover"
        />
      </div>
      <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
        <img
          src={Oneproduct.images[2]?Oneproduct.images[2]:Oneproduct.thumbnail}
          className="w-full object-cover"
        />
      </div>
    </div>
    <div className="col-span-4 pt-8 lg:pt-0">
      <div className="mb-7 border-b border-gray-300 pb-7">
        <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
         {Oneproduct.title}
        </h2>
        <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
          {Oneproduct.description}
        </p>
        <div className="mt-5 flex items-center ">
          <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
          ${Oneproduct.price}
          </div>
       
        </div>
      </div>
      <div className="border-b border-gray-300 pb-3  ">
      
        <div className="mb-4 flex flex-wrap gap-x-3 ">
          <h1 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
            rating:
          </h1>
          <div  className="mt-0.5">
            {Oneproduct.rating}
          </div>
        </div>
      </div>
   
      <div className="py-6 ">
        <ul className="space-y-5 pb-1 text-sm">
         
          <li>
            <span className="text-heading inline-block pr-2 font-semibold">
              Category:
            </span>
            <a className="hover:text-heading transition hover:underline" href="#">
              {Oneproduct.category}
            </a>
          </li>
          <li className="productTags">
            <span className="text-heading inline-block pr-2 font-semibold">
              Tags:
            </span>
            <a
              className="hover:text-heading inline-block pr-1.5 transition last:pr-0 hover:underline"
              href="#"
            >
              Sneakers
            </a>
          </li>
        </ul>
      </div>
      <div className="shadow-sm ">
        <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
          <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
            Product Details
          </h2>
          <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center">
            <div className="bg-heading h-0.5 w-full rounded-sm"></div>
            <div className="bg-heading absolute bottom-0 h-full w-0.5 origin-bottom scale-0 transform rounded-sm transition-transform duration-500 ease-in-out"></div>
          </div>
        </header>
        <div>
          <div className="pb-6 text-sm leading-7 text-gray-600 md:pb-7">
            {Oneproduct.description}
          </div>
        </div>
      </div>
    
     
    </div>
  </div>
</div>

    </>
  )
}

export default ProductOverView