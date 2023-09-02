import React from 'react'
import { useState,useEffect,useCallback } from 'react'
import { useParams } from 'react-router'

export default function ProductPage() {
    const {productId} = useParams()

    const [products, setproducts] = useState([])

const fetchdata = useCallback(
 async () => {
   

        const response = await fetch(`http://localhost:6001/home/${productId}`)
  
        const data = await response.json()
        setproducts(data)


  },
  [productId],
)


   

    useEffect(() => {
     fetchdata()  
    },[fetchdata])
    
  return (
<>
<div className="cont  bg-white">
{products.length > 0 ? (
    <div>
    <div className="main flex mt-16">
      <div className="img ">
        <img className='w-72 ml-8 mr-16' src={`http://localhost:6001/${products[0].img}`} alt="" />
      </div>
      <main className='w-[60%]'>
      <h1 className='font-extrabold text-2xl'>{products[0].name}</h1>
      <p className='font-bold text-base mt-2'>Category:<span className='text-orange-dark'> {products[0].catagory}</span></p>
      <p className='mt-4'>Description: {products[0].description.slice(0,200)}</p>
    
      <p className='mt-6'><span className='font-extrabold text-4xl text-custom'>${products[0].price}</span></p>

      <button className='mt-2 orange pl-6 pr-6 pt-3 pb-3 text-base text-white'><a href="">Add to card</a></button>
      <p>ID: {products[0]._id}</p>
      
      </main>
      </div>
      <div className="gg">
        <h2 className='font-extrabold text-2xl mt-4 ml-12 mb-4'>Description:-</h2>
      <p className='ml-12 mr-40'>{products[0].description}</p>

      </div>
    </div>
  ) : (
  <div className='flex justify-center'>
      <p>Loading...</p>
      </div>
      )}
      </div>
</>
  )
}
