import React from 'react'

function HeadeLineCards() {
  return (
    <div className='max-w-[1640px] m-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
    <div className=' relative rounded-xl'>
    <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
    <p className='px-2'>Through 8/26</p>
    <button className=' border border-black px-5 rounded-xl  bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
  </div>
  <img className=' rounded-xl w-full object-cover md:max-h-[200px] max-h-[160px] '
   src='https://images.pexels.com/photos/5639483/pexels-photo-5639483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  alt='/'/>
    </div>
    <div className=' relative rounded-xl'>
    <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
    <p className='px-2'>Through 8/26</p>
    <button className=' border border-black px-5 rounded-xl  bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
  </div>
  <img className=' rounded-xl w-full object-cover md:max-h-[200px] max-h-[160px]'
   src='https://images.pexels.com/photos/19247580/pexels-photo-19247580/free-photo-of-legumes-boire-repas-verre.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  alt='/'/>
    </div>
    <div className=' relative rounded-xl ' >
    <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
    <p className='px-2'>Through 8/26</p>
    <button className=' border border-black px-5 rounded-xl  bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
  </div>
  <img className=' rounded-xl w-full object-cover md:max-h-[200px] max-h-[160px]'
   src='https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  alt='/'/>
    </div>
    </div>
  )
}

export default HeadeLineCards