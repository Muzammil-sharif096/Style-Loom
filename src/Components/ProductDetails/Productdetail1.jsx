import React from 'react'
import { useState } from 'react'

export default function Productdetail1() {
  const [showcompo, setshowcompo] = useState(false)

  const openpage = () => {
    setshowcompo(true)
}
  return (
  <>
  
  <div className='  bg-black xl:p-28 p-4 '>
    <div>
        <div className='   grid lg:grid-cols-2 grid-cols-1 gap-4 '>
            <div className='  space-y-4'>
                <h2 className=' sm:text-5xl text-3xl font-normal text-white'>ELEGANT EVENING GOWN</h2>
                <div className=' flex gap-3'>
                <p className=' text-gray-500 text-xl font-normal'>Fitted bodice, flowing skirt</p>
                <div className=' bg-green-950 h-9 w-20 rounded-2xl flex justify-center items-center'>
                    <p className=' text-green-400 text-base font-normal'>In stock</p>
                </div>
                </div>
            </div>
            <div className='  flex lg:justify-end justify-between items-center gap-5'>
                <button  onClick={openpage} className=' h-12 w-36  bg-gray-900 rounded-xl text-sm font-normal text-white flex justify-center gap-2 items-center'>
                <img src="../asets/img/Icon (2).png" alt="" />

                  Add To Cart</button>
                  {
                            showcompo && (
                                <div className='flex justify-center items-center h-screen absolute left-1/2'>
                                    <div className='fixed top-0 left-0 w-full h-full bg-gray-900 opacity-50 z-50'></div>
                                    <div className='bg-black fixed top-5 p-20 md:w-1/2 w-full space-y-1 h-[calc(100vh-40px)] rounded-lg z-50'>
                                        <h1 className='text-right absolute top-2 right-6 text-white cursor-pointer p-2' onClick={() => setshowcompo(false)}>X</h1>
                                        <div className='flex justify-between  items-center'>
                                            <div>
                                                <img src="./img/Group_1261152774_zjd1pb.svg" alt="" />
                                            </div>
                                            <div>
                                                <h4 className='text-3xl lg:text-5xl font-bold text-[#63B597]'>01</h4>
                                            </div>
                                        </div>
                                        <h4 className='text-xl lg:text-3xl font-bold text-white tracking-wider'>Usman Developer</h4>
                                        <p className='text-sm lg:text-base text-white tracking-wider'>At Creasoft, we're not just a service provider; we're your dedicated partner in success. Our commitment to excellence permeates every aspect of what we do. With a team of seasoned experts, a proven track record of delivering results, and a client-centric approach, we stand out in the industry. Choose us for unparalleled quality, reliability, and a personalized experience that goes beyond your expectations. Join hands with us and embark on a journey of service excellence that's tailored to your unique needs. Your success is our success, and we're here to make it happen.</p>
                                    </div>
                                </div>
                            )
                        }

                <button className=' h-12 w-36   bg-yellow-800 rounded-xl text-sm font-normal text-white flex gap-2 justify-center items-center'>
                  <img src="../asets/img/Icon (3).png" alt="" />
                  Shop Now</button>

            </div>

             </div>
              <div className='  grid  xl:grid-cols-3 grid-cols-1  xl:gap-12 gap-6 pt-12'>
                <div className='  col-span-2 flex justify-center'>
                  <img src="../asets/img/Image (6).png" alt="" />
                </div>
                <div className='   flex flex-col  col-span-2 xl:col-span-1 xl:justify-between  justify-center gap-6'>
                <img src="../asets/img/Image (7).png" alt="" />
                <img src="../asets/img/Image (8).png" alt="" />


                </div>



              </div>
    </div>
  </div>
  </>
  )
}
