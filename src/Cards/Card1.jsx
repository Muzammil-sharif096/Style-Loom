import React from 'react'

export default function Card1({Data1}) {
  return (
   <>
   <div className='  space-y-11 sm:p-5 p-2  w-96'>
    <div className=' flex  justify-between items-center'>
        <div className=' flex gap-5'>
            <img src={Data1.img1} alt="" />
            <div className=' flex flex-col justify-center'>
                <h2 className=' text-xl font-normal text-white'>{Data1.para}</h2>
                <p className=' text-lg font-normal text-gray-500'>{Data1.mypara}</p>
            </div>
        </div>
        <div>
            <img src={Data1.img2} alt="" />
            
        </div>
    </div>
<div className=' flex gap-1'>
        <img src={Data1.img3} alt="" />
        <img src={Data1.img3} alt="" />
        <img src={Data1.img3} alt="" />
        <img src={Data1.img3} alt="" />
        <img src={Data1.img3} alt="" />
        </div>




        <p className=' text-lg font-normal text-gray-400'>{Data1.para1}</p>
    
   </div>
   </>
  )
}
