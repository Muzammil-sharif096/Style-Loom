import React from 'react'

export default function Productdetail5() {
  return (
  <>
  <div className=' xl:p-28 p-4  bg-black'>
    <div>
        <div className=' p-16 rounded-2xl  bg-yellow-800 flex xl:flex-row flex-col gap-6 justify-between items-center'> 
        <div className=' space-y-4'>
            <h2 className=' sm:text-6xl text-3xl font-normal text-black'>ELEVATE YOUR WARDROBE</h2>
            <p className=' text-lg font-normal text-black'>Don't miss out – experience the epitome of fashion by clicking 'Buy Now' 
                and embrace a world of chic elegance delivered to your doorstep. Your style journey begins here.</p>
        </div>
        <div>
            <button className=' h-14 w-36 bg-gray-800 text-white flex items-center justify-center gap-2 rounded-xl'>Shop Now <img src="../asets/img/Icon (5).png" alt="" /> </button>
        </div>
        </div>
    </div>
  </div>
  </>
  )
}
