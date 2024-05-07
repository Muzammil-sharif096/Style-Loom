import React from 'react'

const HomeHeader = () => {
    return (
        <div className='xl:px-28 p-4 py-8 bg-[#262626]'>
            <div className='border-[#81807E] border-2 border-dashed rounded-md'>
                <img className='w-full rounded-md' src="./img/Image (1).png" alt="" />
                <div className='2xl:flex hidden justify-center -mt-6'>
                    <button className=' rounded-lg w-40 h-12 border-[#81807E] border-2 border-dashed text-white text-base tracking-widest bg-[#1A1A1A]'>Shop Now</button>
                </div>
                <div className='flex flex-col xl:flex-row items-center justify-between'>
                    <div className='xl:p-14 p-4 w-full space-y-2' >
                        <ul className='flex gap-4 text-white cursor-pointer tracking-wider text-center items-center'>
                            <li className='w-24  sm:p-2 p-1.5 sm:text-base text-sm border-[#81807E] border-2 border-dashed hover:bg-[#81807E]  rounded-md '>All</li>
                            <li className='w-24  sm:p-2 p-1.5 sm:text-base text-sm border-[#81807E] border-2 border-dashed hover:bg-[#81807E]  rounded-md '>Mens</li>
                            <li className='w-24  sm:p-2 p-1.5 sm:text-base text-sm border-[#81807E] border-2 border-dashed hover:bg-[#81807E]  rounded-md '>Womens</li>
                            <li className='w-24  sm:p-2 p-1.5 sm:text-base text-sm border-[#81807E] border-2 border-dashed hover:bg-[#81807E]  rounded-md '>Kids</li>
                        </ul>
                        <h2 className='xl:text-5xl sm:text-lg text-base tracking-wider pt-4 text-white'>ELEVATE YOUR STYLE WITH <br /> STYLELOOM</h2>
                        <p className='xl:text-lg text-sm text-[#81807E]'>Explore a world of fashion at StyleLoom, where trends meet affordability. Immerse yourself in the latest styles and seize exclusive  promotions.</p>
                    </div>
                    <div className='grid grid-cols-2 border-[#81807E] xl:border-l-2 xl:border-dashed border-none w-full 2xl:p-14 lg:p-4 '>
                        <div className='space-y-4 border-[#81807E] border-2 border-dashed xl:p-8 p-4'>
                            <h2 className='xl:text-5xl sm:text-2xl text-lg text-white'>1,500 +</h2>
                            <p className='xl:text-lg text-sm text-[#81807E] tracking-wider '>Fashion Products</p>
                        </div>
                        <div className='space-y-4 border-[#81807E] border-2 border-dashed xl:p-8 p-4'>
                            <h2 className='xl:text-5xl sm:text-2xl text-lg text-white'>50 +</h2>
                            <p className='xl:text-lg text-sm text-[#81807E] tracking-wider '>New arrivals every month.</p>
                        </div>
                        <div className='space-y-4 border-[#81807E] border-2 border-dashed xl:p-8 p-4'>
                            <h2 className='xl:text-5xl sm:text-2xl text-lg text-white'>30%</h2>
                            <p className='xl:text-lg text-sm text-[#81807E] tracking-wider '>OFF on select items.</p>
                        </div>
                        <div className='space-y-4 border-[#81807E] border-2 border-dashed xl:p-8 p-4'>
                            <h2 className='xl:text-5xl sm:text-2xl text-lg text-white'>95%</h2>
                            <p className='xl:text-lg text-sm text-[#81807E] tracking-wider '>Customer Satisfaction Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader
