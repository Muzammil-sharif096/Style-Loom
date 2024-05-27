import React from 'react'

export default function Productdetail4() {
  return (
   <>
   <div className=' xl:px-28 px-4 bg-black'>
    <div>
        <div className=' space-y-6'>
            <h2 className=' sm:text-5xl text-3xl font-normal text-white'>HAVE QUESTIONS? WE HAVE ANSWERS.</h2>
            <p className=' text-lg font-normal text-gray-500'>Ease into the world of StyleLoom with clarity. Our FAQs cover a spectrum of topics.</p>
            <div className=' flex flex-wrap gap-3'>
                 <button className=' h-12 w-16 rounded-2xl  text-gray-400 bg-gray-900 '>All</button>
                <button className=' h-12 w-24 rounded-2xl  text-gray-400 bg-gray-900 '>Ordering</button>
                <button className=' h-12 w-24 rounded-2xl  text-gray-400 bg-yellow-900 '>Shipping</button>
                <button className=' h-12 w-20 rounded-2xl  text-gray-400 bg-gray-900 '>Returns</button>
                <button className=' h-12 w-20 rounded-2xl  text-gray-400 bg-gray-900 '>Support</button>




            </div>
        </div>
        <div className=' grid xl:grid-cols-2 grid-cols-1 gap-14 pt-16'>
            <div className='  space-y-16 '>
                <div className=' space-y-3'>
                    <h2 className=' text-2xl font-normal text-white'>How can I place an order on StyleLoom?</h2>
                    <p className=' text-lg font-normal text-gray-500'>Ordering is easy! Simply browse our website,
                         add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.</p>
                </div>
                <div className=' space-y-3'>
                    <h2  className=' text-2xl font-normal text-white'>What payment methods do you accept?</h2>
                    <p className=' text-lg font-normal text-gray-500'>We accept a variety of payment methods, including credit/debit cards,
                         net banking, and select digital wallets. Choose the option that suits you best during checkout.</p>
                </div>
                <div className=' space-y-3'>
                    <h2  className=' text-2xl font-normal text-white'>How can I track my order?</h2>
                    <p className=' text-lg font-normal text-gray-500'>Once your order is dispatched, you'll receive a 
                        tracking number via email. Use this number to track your package in real-time on our website.</p>
                </div>
            </div>
            <div className='  space-y-16'>
            <div className=' space-y-3'>
                    <h2 className=' text-2xl font-normal text-white'>Can I modify or cancel my order after placing it?</h2>
                    <p className=' text-lg font-normal text-gray-500'>Unfortunately, once an order is confirmed, modifications or
                     cancellations may not be possible. Please review your order carefully before completing the purchase.</p>
                </div>
                <div className=' space-y-3'>
                    <h2  className=' text-2xl font-normal text-white'>How do I initiate a return?</h2>
                    <p className=' text-lg font-normal text-gray-500'>Visit our Returns page and follow the provided instructions.
                     Ensure your item meets our return criteria, and our team will guide you through the process.</p>
                </div>
                <div className=' space-y-3'>
                    <h2  className=' text-2xl font-normal text-white'>Do you offer exchanges for products?</h2>
                    <p className=' text-lg font-normal text-gray-500'>At this time, we don't offer direct product exchanges. 
                    If you'd like a different item, please initiate a return and place a new order..</p>
                </div>
            </div>

        </div>
    </div>
   </div>
   </>
  )
}
