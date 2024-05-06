import React from 'react'
import { navigating } from '../../../Data'

const Navigating = () => {
    return (
        <div className='xl:px-28 p-4 py-8 bg-[#262626]'>
            <div className='border-[#81807E] border-2 py-4 border-dashed relative overflow-hidden rounded-md'>
                <div className='flex'>
                    <div className='p-4 xl:p-14 space-y-4'>
                        <h1 className='xl:text-5xl sm:text-lg text-base tracking-wider text-white'>NAVIGATING THE STYLELOOM FASHION JOURNEY.</h1>
                        <p className='xl:text-lg text-sm text-[#81807E]'>At StyleLoom, we've designed a straightforward shopping experience to make fashion accessible.</p>
                    </div>
                    <div className='absolute 2xl:block hidden -right-24 -top-[14%]'>
                        <img className='w-72' src="./img/Vector.png" alt="" />
                    </div>
                </div>
                <div className='grid 2xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 w-full p-1'>
                    {
                        navigating.map((ele) => {
                            return (
                                <div className='border-[#81807E] border-2 border-dashed  p-4 xl:p-14 space-y-3' >
                                    <h4 className='text-white xl:text-2xl sm:text-lg text-sm tracking-wider'>{ele.h4}</h4>
                                    <h2 className='text-white xl:text-2xl sm:text-lg text-sm tracking-wider'>{ele.h2}</h2>
                                    <p className='text-[#81807E] xl:text-base text-sm'>{ele.p}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Navigating
