import React from 'react'
import { testimonial } from '../../../Data'
const Testimonial = () => {
    return (
        <div className='xl:px-28 p-4 py-8 bg-[#262626]'>
            <div className='border-[#81807E] border-2 py-4 border-dashed relative overflow-hidden rounded-md'>
                <div className='flex'>
                    <div className='p-4 xl:p-14 space-y-4'>
                        <h1 className='xl:text-5xl sm:text-lg text-base tracking-wider text-white'>THE STYLELOOM TESTIMONIAL COLLECTION.</h1>
                        <p className='xl:text-lg text-sm text-[#81807E]'>At StyleLoom, our customers are the heartbeat of our brand.</p>
                    </div>
                    <div className='absolute 2xl:block hidden -right-24 -top-[14%]'>
                        <img className='w-72' src="./img/Vector.png" alt="" />
                    </div>
                </div>
                <div className='grid 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 w-full p-1'>
                    {
                        testimonial.map((ele) => {
                            return (
                                <div className='border-[#81807E] border-2 border-dashed  p-4 xl:p-14 space-y-3' >
                                    <div className='flex  justify-between items-center'>
                                        <div className='flex sm:gap-4 gap-x-1.5 items-center'>
                                            <img src={ele.img} alt="" />
                                            <div className=''>
                                                <h1 className='text-white  text-sm tracking-wider'>{ele.h1}</h1>
                                                <h3 className=' text-[#81807E] text-sm tracking-wider'>{ele.h3}</h3>
                                            </div>

                                        </div>
                                        <img className='w-fit' src="./img/Icon (1).png" alt="" />
                                    </div>
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

export default Testimonial
