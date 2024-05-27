import React from 'react'

export default function Productdetail2() {
  return (
  <>
  <div className=' xl:px-28  px-4 bg-black'>
    <div className='  grid xl:grid-cols-2 grid-cols-1 gap-20' >
        <div className='  space-y-14'>
            <div>
                <h2 className=' text-3xl font-normal text-white'>Materials, Care and origin</h2>
            </div>
            <div className=' space-y-4'>
                <h2 className=' text-xl font-normal text-white'>Join Life</h2>
                <p className=' text-lg font-normal text-gray-500'>Tracing its roots back to ancient Greek draped garments,
                     has evolved through centuries, often crafted from luxurious fabrics like silks, satins, and velvets.</p>
            </div>
            <div className=' space-y-3'>
                <h2 className=' text-xl font-normal text-white'>Materials</h2>
                <p  className=' text-lg font-normal text-gray-500'>Flowing from Grecian folds to glittering silks, the evening gown has graced centuries in luxury.</p>
                <img src="../asets/img/image (9).png" alt="" />
            </div>
        </div>
        <div className='    space-y-14'>
            <div>
                <h2 className=' text-3xl font-normal text-white'>Features</h2>
                </div>
                <div className=' sm:pr-36  pr-4'>
                    <p className=' text-gray-500 text-lg font-normal'>
                    Distressed detailing for a rugged look
 Button-up front closure with engraved metal buttons
 Two chest pockets with buttoned flaps
 Two side pockets for added functionality
 Adjustable buttoned cuffs for a personalized fit
 Back waist tabs for customizable styling
                    </p>
                </div>
                <div className=' flex  lg:flex-row flex-col justify-between gap-4 lg:items-center'>
                    <div className='  space-y-8'>
                        <h2 className=' text-white text-xl font-normal'>Price</h2>
                        <p className=' text-white text-3xl font-normal'>$89.99 <span className=' text-gray-500 text-lg font-normal'>( MRP incl. of all taxes )</span></p>
                    </div>
                    <div className=' '>
                    <button className=' h-12 sm:w-36 w-full  bg-gray-900 rounded-xl text-sm font-normal text-white flex justify-center gap-2 items-center'>
                <img src="../asets/img/Icon (2).png" alt="" />

                  Add To Cart</button>
                    </div>

                </div>
                <div className=' space-y-4' >
                    <h2 className=' text-white font-normal text-xl'>Available Sizes</h2>
                    <div className=' flex gap-4'> <button className=' h-10 w-16 rounded-2xl bg-gray-900 text-white'>S</button>
                    <button className=' h-10 w-16 rounded-2xl bg-gray-900 text-white'>M</button>
                    <button className=' h-10 w-16 rounded-2xl bg-gray-900 text-white'>L</button>
                    <button className=' h-10 w-16 rounded-2xl bg-gray-900 text-white'>Xl</button>
                    </div>
                    
                </div>
                <div>
                    <p className=' text-xl font-normal text-white'>Ratings & Review</p>
                </div>
                <div>
                    <img src=" ../asets/img/Sub Container.png" alt="" />
                </div>
           
        </div>

    </div>
  </div>
  </>
  )
}
