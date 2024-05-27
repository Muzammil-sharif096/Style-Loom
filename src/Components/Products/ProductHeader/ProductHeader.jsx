import React from 'react'
import { elevate } from '../../../Data'
import { Link } from 'react-router-dom'
const ProductHeader = () => {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <div className='xl:px-28 p-4 py-8 bg-[#262626]'>
            <div className='border-[#81807E] border-2 py-4 border-dashed relative overflow-hidden rounded-md'>
                <div className='flex'>
                    <div className='p-4 xl:p-14 space-y-4'>
                        <h1 className='xl:text-5xl sm:text-lg text-base tracking-wider text-white'>EXPLORE THE LATEST TRENDS AND TIMELESS CLASSICS</h1>
                        <p className='xl:text-lg text-sm text-[#81807E]'>Dive into the world of fashion excellence at StyleLoom. Our curated selection brings together the latest trends and timeless classics</p>
                        <ul className='flex sm:gap-4 gap-1 cursor-pointer text-white tracking-wider text-center items-center'>
                            <li className='sm:w-24 px-3  p-1 sm:text-base text-sm hover:bg-[#81807E] border-[#81807E] border-2 border-dashed  rounded-md '>All</li>
                            <li className='sm:w-24 px-3  p-1 sm:text-base text-sm hover:bg-[#81807E] border-[#81807E] border-2 border-dashed  rounded-md '>Mens</li>
                            <li className='sm:w-24 px-3  p-1 sm:text-base text-sm hover:bg-[#81807E] border-[#81807E] border-2 border-dashed  rounded-md '>Womens</li>
                            <li className='sm:w-24 px-3  p-1 sm:text-base text-sm hover:bg-[#81807E] border-[#81807E] border-2 border-dashed  rounded-md '>Kids</li>
                        </ul>
                    </div>
                    <div className='absolute 2xl:block hidden -right-24 -top-[14%]'>
                        <img className='w-72' src="./img/Vector.png" alt="" />
                    </div>
                </div>
                <div className='p-4 xl:p-14 border-[#81807E] border-2 tracking-wide border-dashed'>
                    <div className='flex  justify-between items-center'>
                        <h1 className='xl:text-4xl sm:text-base text-sm tracking-wide text-white'>DRESS COLLECTION</h1>
                        <button className='hover:bg-[#81807E] rounded-lg xl:w-40 w-24 xl:h-12 h-8 border-[#81807E] border-2 border-dashed text-white text-base tracking-widest bg-[#1A1A1A]'>View All</button>
                    </div>
                </div>
                <div className='grid 2xl:grid-cols-3 lg:grid-cols-1 sm:grid-cols-1 grid-cols-1 w-full'>
                    {
                        elevate.slice(0, 3).map((ele) => {
                            return (
                                <div className='border-[#81807E] border-2 tracking-wide border-dashed p-4 xl:p-14 space-y-6' >
                                    <Link onClick={scrollTop} to='/productdetail'>
                                        <img className='w-full' src={ele.img} alt="" />
                                    </Link>
                                    <div className='flex  items-center justify-between'>
                                        <h2 className='text-white w-32 p-2 text-center rounded-full bg-[#1A1A1A] text-sm tracking-wider'>{ele.h2}</h2>
                                        <button className='hover:bg-[#81807E] rounded-lg xl:w-40 w-28  xl:h-12 h-8 border-[#81807E] border-2 border-dashed text-white text-base tracking-widest bg-[#1A1A1A]'>Shop Now</button>
                                    </div>
                                    <p className=' xl:text-2xl sm:text-lg text-sm text-white'>{ele.p}</p>
                                    <div className='flex  items-center sm:gap-12 gap-2'>
                                        <h2 className='text-white xl:text-base text-sm tracking-wider'><span className='text-[#81807E] text-base'>Fit : </span>{ele.fit}</h2>
                                        <p className='text-white xl:text-base text-sm tracking-wider'><span className='text-[#81807E] text-base'>Price : </span>{ele.price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='p-4 xl:p-14 border-[#81807E] border-2 tracking-wide border-dashed'>
                    <div className='flex  justify-between items-center'>
                        <h1 className='xl:text-4xl sm:text-base text-sm tracking-wide text-white'>ACCESSORIES</h1>
                        <button className='hover:bg-[#81807E] rounded-lg xl:w-40 w-24 xl:h-12 h-8 border-[#81807E] border-2 border-dashed text-white text-base tracking-widest bg-[#1A1A1A]'>View All</button>
                    </div>
                </div>
                <div className='grid 2xl:grid-cols-3 lg:grid-cols-1 sm:grid-cols-1 grid-cols-1 w-full'>
                    {
                        elevate.slice(3, 6).map((ele) => {
                            return (
                                <div className='border-[#81807E] border-2 tracking-wide border-dashed p-4 xl:p-14 space-y-6' >
                                    <Link onClick={scrollTop} to='/productdetail'>
                                        <img className='w-full' src={ele.img} alt="" />
                                    </Link>
                                    <div className='flex  items-center justify-between'>
                                        <h2 className='text-white w-32 p-2 text-center rounded-full bg-[#1A1A1A] text-sm tracking-wider'>{ele.h2}</h2>
                                        <button className='hover:bg-[#81807E] rounded-lg xl:w-40 w-28  xl:h-12 h-8 border-[#81807E] border-2 border-dashed text-white text-base tracking-widest bg-[#1A1A1A]'>Shop Now</button>
                                    </div>
                                    <p className=' xl:text-2xl sm:text-lg text-sm text-white'>{ele.p}</p>
                                    <div className='flex  items-center sm:gap-12 gap-2'>
                                        <h2 className='text-white xl:text-base text-sm tracking-wider'><span className='text-[#81807E] text-base'>Fit : </span>{ele.fit}</h2>
                                        <p className='text-white xl:text-base text-sm tracking-wider'><span className='text-[#81807E] text-base'>Price : </span>{ele.price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='p-4 xl:p-14 border-[#81807E] border-2 tracking-wide border-dashed'>
                    <div className='flex  justify-between items-center'>
                        <h1 className='xl:text-4xl sm:text-base text-sm tracking-wide text-white'>BAGS AND HANDBAGS</h1>
                        <button className='hover:bg-[#81807E] rounded-lg xl:w-40 w-24 xl:h-12 h-8 border-[#81807E] border-2 border-dashed text-white text-base tracking-widest bg-[#1A1A1A]'>View All</button>
                    </div>
                </div>
                <div className='grid 2xl:grid-cols-3 lg:grid-cols-1 sm:grid-cols-1 grid-cols-1 w-full'>
                    {
                        elevate.slice(6, 9).map((ele) => {
                            return (
                                <div className='border-[#81807E] border-2 tracking-wide border-dashed p-4 xl:p-14 space-y-6' >
                                    <Link onClick={scrollTop} to='/productdetail'>
                                        <img className='w-full' src={ele.img} alt="" />
                                    </Link>
                                    <div className='flex  items-center justify-between'>
                                        <h2 className='text-white w-32 p-2 text-center rounded-full bg-[#1A1A1A] text-sm tracking-wider'>{ele.h2}</h2>
                                        <button className='hover:bg-[#81807E] rounded-lg xl:w-40 w-28  xl:h-12 h-8 border-[#81807E] border-2 border-dashed text-white text-base tracking-widest bg-[#1A1A1A]'>Shop Now</button>
                                    </div>
                                    <p className=' xl:text-2xl sm:text-lg text-sm text-white'>{ele.p}</p>
                                    <div className='flex  items-center sm:gap-12 gap-2'>
                                        <h2 className='text-white xl:text-base text-sm tracking-wider'><span className='text-[#81807E] text-base'>Fit : </span>{ele.fit}</h2>
                                        <p className='text-white xl:text-base text-sm tracking-wider'><span className='text-[#81807E] text-base'>Price : </span>{ele.price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductHeader
