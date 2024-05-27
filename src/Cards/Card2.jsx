import React from 'react'

export default function Card2({Datacard}) {
  return (
   <>
   <div className=' w-96 bg-black p-4'>
    <div className='  flex items-center gap-6'>
        <div className=' '>
        <div className=' bg-gray-900 h-14 w-14 rounded-full flex justify-center  items-center'>
                                <img src={Datacard.img5} alt="" />

                            </div>
        </div>
        <div className=' space-y-3'>
            <h2 className=' text-2xl font-normal text-white'>{Datacard.head11}</h2>
            <p className=' text-lg font-normal text-gray-500'>{Datacard.para11}</p>
        </div>
    </div>
   </div>
   </>
  )
}
