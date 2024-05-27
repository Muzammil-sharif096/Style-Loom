import React from 'react'
const Footer = () => {
    return (
        <footer className='xl:px-28 p-4 py-8 bg-[#262626]'>
            <div className='flex flex-wrap space-y-7 items-center justify-between'>
                <img src="./img/Logo (91).png" alt="" />
                <img className='xl:w-72 sm:w-48 w-32' src="./img/Buttons Container.png" alt="" />
            </div>
            <hr className='border-[#81807E] border-2 w-full mt-12 border-dashed' />
            <div className='flex flex-col 2xl:flex-row 2xl:space-y-0 space-y-6 items-center gap-2 pt-20  justify-between'>
                <div className='space-y-3 w-full'>
                    <h1 className='text-2xl text-white'>Home</h1>
                    <ul className='flex gap-6 sm:text-lg text-sm text-[#81807E]'>
                        <li>Why Us</li>
                        <li> About Us</li>
                        <li>Testimonials</li>
                        <li>FAQ’s</li>
                    </ul>
                </div>
                <div className='space-y-3 w-full'>
                    <h1 className='text-2xl text-white'>Products</h1>
                    <ul className='flex gap-6 sm:text-lg text-sm text-[#81807E]'>
                        <li>Menswear</li>
                        <li>Womenswear</li>
                        <li>Kidswear</li>
                    </ul>
                </div>
                <div className='space-y-3 w-full'>
                    <h1 className='text-2xl text-white'>Subscribe to Newsletter</h1>
                    <input className='w-full bg-[#1A1A1A] p-2.5  rounded-lg' type="text" name="" id="" placeholder='Enter Your E-mail' />
                </div>
            </div>
            <hr className='border-[#81807E] border-2 w-full mt-12 border-dashed' />
            <div className='flex flex-col sm:flex-row justify-between pt-6'>
                <h1 className='text-[#81807E]'>© 2024 StyleLoom. All rights reserved.</h1>
                <ul className='flex gap-6 text-[#81807E] w-fit'>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
