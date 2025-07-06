import React from 'react'

function Backgound({heroCount}) {
  const backgrounds = [
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Fashion store
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80", // Shopping mall
    "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80", // Clothing store
    "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80"  // Retail store
  ]
  
  return (
    <div className='absolute inset-0 w-full h-full overflow-hidden'>
      <img 
        src={backgrounds[heroCount]} 
        alt="Background" 
        className='w-full h-full object-cover transition-all duration-1000 ease-in-out filter brightness-75'
      />
      <div className='absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30'></div>
      <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent'></div>
    </div>
  )
}

export default Backgound