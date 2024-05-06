import React from 'react'
import { crafting } from '../../../Data'

const Crafting = () => {
    return (
        <div className='xl:px-28 p-4 py-8 bg-[#262626]'>
            <div className='border-[#81807E] border-2 py-4 border-dashed rounded-md'>
                <div className='p-4 xl:p-14 space-y-4'>
                    <h1 className='xl:text-5xl sm:text-lg text-base tracking-wider text-white'>CRAFTING TRENDS, INSPIRING CONFIDENCE</h1>
                    <p className='xl:text-lg text-sm text-[#81807E]'>Explore a world of fashion at StyleLoom, where trends meet affordability.</p>
                </div>
                <div className='grid 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 w-full p-1'>
                    {
                        crafting.map((ele) => {
                            return (
                                <div className='border-[#81807E] border-2 border-dashed p-4 xl:p-14 space-y-3' >
                                    <img className='border-[#81807E] border-2 border-dashed rounded-full p-2' src={ele.img} alt="" />
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

export default Crafting
