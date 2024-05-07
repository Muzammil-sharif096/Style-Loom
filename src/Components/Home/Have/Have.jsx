import React from 'react'

const Have = () => {
    return (
        <div className='xl:px-28 p-4 py-8 bg-[#262626]'>
            <div className='border-[#81807E] border-2 py-4 border-dashed relative overflow-hidden rounded-md'>
                <div className='flex'>
                    <div className='p-4 xl:p-14 space-y-4'>
                        <h1 className='xl:text-5xl sm:text-lg text-base tracking-wider text-white'>NAVIGATING HAVE THE STYLELOOM FASHION JOURNEY.</h1>
                        <p className='xl:text-lg text-sm text-[#81807E]'>At StyleLoom, we've designed a straightforward shopping experience to make fashion accessible.</p>
                        <div className='overflow-x-auto'>
                            <ul className='flex sm:gap-4 gap-3 cursor-pointer  text-white tracking-wider text-center items-center'>
                                <li className='sm:w-24 px-3  p-1 sm:text-base hover:bg-[#81807E] text-sm border-[#81807E] border-2 border-dashed  rounded-md '>All</li>
                                <li className='sm:w-24 px-3  p-1 sm:text-base hover:bg-[#81807E] text-sm border-[#81807E] border-2 border-dashed  rounded-md '>Odering</li>
                                <li className='sm:w-24 px-3  p-1 sm:text-base hover:bg-[#81807E] text-sm border-[#81807E] border-2 border-dashed  rounded-md '>Shipping</li>
                                <li className='sm:w-24 px-3 sm:flex hidden hover:bg-[#81807E]   p-1 sm:text-base text-sm border-[#81807E] border-2 border-dashed  rounded-md '>Returns</li>
                                <li className='sm:w-24 px-3 sm:flex hidden hover:bg-[#81807E]   p-1 sm:text-base text-sm border-[#81807E] border-2 border-dashed  rounded-md '>Support</li>
                            </ul>
                        </div>
                    </div>
                    <div className='absolute 2xl:block hidden -right-24 -top-[14%]'>
                        <img className='w-72' src="./img/Vector.png" alt="" />
                    </div>
                </div>

                <div className='grid 2xl:grid-cols-2 grid-cols-1'>
                    <div className=''>
                        <div className='p-4  border-[#81807E] border-2 py-4 border-dashed xl:p-14'>
                            <h1 className='text-white xl:text-2xl sm:text-lg text-sm tracking-wider'>How can I place an order on StyleLoom?</h1>
                            <p className='text-[#81807E] xl:text-base text-sm'>Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.</p>
                        </div>
                        <div className='p-4  border-[#81807E] border-2 py-4 border-dashed xl:p-14'>
                            <h1 className='text-white xl:text-2xl sm:text-lg text-sm tracking-wider'>What payment methods do you accept?</h1>
                            <p className='text-[#81807E] xl:text-base text-sm'>We accept a variety of payment methods, including credit/debit cards, net banking, and select digital wallets. Choose the option that suits you best during checkout.</p>
                        </div>
                        <div className='p-4  border-[#81807E] border-2 py-4 border-dashed xl:p-14'>
                            <h1 className='text-white xl:text-2xl sm:text-lg text-sm tracking-wider'>How can I track my order?</h1>
                            <p className='text-[#81807E] xl:text-base text-sm'>Once your order is dispatched, you'll receive a tracking number via email. Use this number to track your package in real-time on our website.</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='p-4  border-[#81807E] border-2 py-4 border-dashed xl:p-14'>
                            <h1 className='text-white xl:text-2xl sm:text-lg text-sm tracking-wider'>How do I initiate a return?</h1>
                            <p className='text-[#81807E] xl:text-base text-sm'>We accept a variety of payment methods, including credit/debit cards, net banking, and select digital wallets. Choose the option that suits you best during checkout.</p>
                        </div>
                        <div className='p-4  border-[#81807E] border-2 py-4 border-dashed xl:p-14'>
                            <h1 className='text-white xl:text-2xl sm:text-lg text-sm tracking-wider'>Do you offer exchanges for products?</h1>
                            <p className='text-[#81807E] xl:text-base text-sm'>Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.</p>
                        </div>
                        <div className='p-4  border-[#81807E] border-2 py-4 border-dashed xl:p-14'>
                            <h1 className='text-white xl:text-2xl sm:text-lg text-sm tracking-wider'>Can I modify or cancel my order after placing it?</h1>
                            <p className='text-[#81807E] xl:text-base text-sm'>Unfortunately, once an order is confirmed, modifications or cancellations may not be possible. Please review your order carefully before completing the purchase.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Have
