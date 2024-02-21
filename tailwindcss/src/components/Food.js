import React, { useState } from 'react'
import { data } from '../data/data'
function Food() {
   const [foods,setFoods]=useState(data)

   const filterCategory=(category)=>{
setFoods(
  data.filter((item)=>{
    return item.category===category
  })
)

   }
   const filterPrice=(price)=>{
    setFoods(
      data.filter((item)=>{
        return item.price===price
      })
    )
  }
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
    <h1 className=' text-orange-600 text-center font-bold text-4xl'>Top Reted menu Items</h1>
    <div className='flex flex-col lg:flex-row justify-between'>
    <div>
    <p className=' font-bold text-gray-800'>Filter Type</p>
    <div className='flex justify-between flex-wrap'>
    <button onClick={()=>setFoods(data)} className=' m-1 border border-orange-600 bg-orange-700  hover:bg-orange-400 text-white'>All</button>
    <button onClick={()=>filterCategory('burger')} className=' m-1 border border-orange-600 bg-orange-700  hover:bg-orange-400 text-white'>Burger</button>
    <button onClick={()=>filterCategory('pizza')}   className=' m-1 border border-orange-600 bg-orange-700  hover:bg-orange-400 text-white'>Pizza</button>
    <button onClick={()=>filterCategory('salad')}  className=' m-1 border border-orange-600 bg-orange-700  hover:bg-orange-400 text-white'>Salade</button>
    <button onClick={()=>filterCategory('chicken')}  className=' m-1 border border-orange-600 bg-orange-700  hover:bg-orange-400 text-white'>Chciken</button>
 
    </div>
    </div>
    <div>
    <p className=' font-bold text-gray-800'>Filter Price</p>
    
    <div className='flex justify-between w-full max-w-[390px]'>
    <button  onClick={()=>filterPrice('$')} className='m-1  border border-orange-600 bg-orange-700 hover:bg-orange-400 text-white'>$</button>
    <button onClick={()=>filterPrice('$$')} className=' m-1 border border-orange-600 bg-orange-700  hover:bg-orange-400 text-white'>$$</button>
    <button onClick={()=>filterPrice('$$$')} className=' m-1 border border-orange-600 bg-orange-700  hover:bg-orange-400 text-white'>$$$</button>
    <button onClick={()=>filterPrice('$$$$')} className=' m-1 border border-orange-600 bg-orange-700  hover:bg-orange-400 text-white'>$$$$</button>
    </div>
    </div>
    </div>
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
    {
        foods.map((item,index)=>(
            <div key={index} className=' border shadow-lg hover:scale-105 duration-300 cursor-pointer rounded-lg'>
            <img src= {item.image} alt= {item.name} 
            className='w-full h-[200px] rounded-t-lg object-cover'/>
            <div className=' flex justify-between px-2 py-5'>
            <p className=' text-1xl font-bold'> {item.name} </p>
            <p>
            <span className=' bg-orange-500 text-white rounded-full p-1'> {item.price} </span>
            </p>
            </div>
            </div>
        ))
    }
    </div>
    </div>
  )
}

export default Food