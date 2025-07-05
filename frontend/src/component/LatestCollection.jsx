import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'
import Card from './Card'

function LatestCollection() {
    let {products} = useContext(shopDataContext)
    let [latestProducts, setLatestProducts] = useState([])

    useEffect(() => {
        setLatestProducts(products.slice(0, 8));
    }, [products])

    return (
        <div className='w-full'>
            <div className='h-[8%] w-[100%] text-center md:mt-[20px] mb-8'>
                <div className='bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-3xl p-6 shadow-lg border border-gray-200/50 backdrop-blur-sm'>
                    <Title text1={"LATEST"} text2={"COLLECTIONS"}/>
                    <p className='w-[100%] m-auto text-[13px] md:text-[18px] px-[10px] text-gray-700 mt-3 font-medium'>
                        Step Into Style – New Collection Dropping This Season!
                    </p>
                </div>
            </div>
            
            <div className='w-[100%] mt-[30px] flex items-center justify-center flex-wrap gap-[30px] px-4'>
                {latestProducts.map((item, index) => (
                    <div key={index} className='transform hover:scale-105 transition-all duration-300'>
                        <Card 
                            name={item.name} 
                            image={item.image1} 
                            id={item._id} 
                            price={item.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LatestCollection