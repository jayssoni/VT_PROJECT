import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'
import Card from './Card'

function BestSeller() {
  const { products } = useContext(shopDataContext)
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
    const filterProduct = products.filter((item) => item.bestseller)
    setBestSeller(filterProduct.slice(0, 4))
  }, [products])

  return (
    <div className='w-full max-w-7xl mx-auto'>
      <div className='h-[8%] w-full text-center mt-12'>
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className='w-full mx-auto text-sm md:text-lg px-4 text-white/80'>
          Tried, Tested, Loved – Discover Our All-Time Best Sellers.
        </p>
      </div>
      <div className='w-full mt-8 flex items-center justify-center flex-wrap gap-8'>
        {bestSeller.map((item, index) => (
          <Card key={index} name={item.name} id={item._id} price={item.price} image={item.image1} />
        ))}
      </div>
    </div>
  )
}

export default BestSeller