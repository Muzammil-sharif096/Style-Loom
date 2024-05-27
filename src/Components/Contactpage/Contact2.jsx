import React from 'react'
import { second } from '../../Datacard'
import Card2 from '../../Cards/Card2'

export default function Contact2() {
  return (
   <>
     <div className=' bg-black xl:px-28 px-4'>
                <div>
                    <div  className='     pb-16 space-y-3 md:pr-12  flex md:flex-row flex-col justify-center md:justify-between items-center'>
                    
                        <h2 className=' text-3xl font-normal text-white'>RETURN POLICY</h2>
            <button className=' h-14 md:w-52 w-full text-sm bg-gray-800 text-white flex items-center justify-center gap-2 rounded-xl'>Read Return Policy <img src="../asets/img/Icon (5).png" alt="" /> </button>

                          
                        
                       
                    </div>
                    <div className=' flex  flex-wrap gap-6 xl:justify-between justify-center '>
                    {second.map((ele)=>{
                            return(
                                <>
                                {<Card2 Datacard={ele}/>}
                                </>
                            )
                        })}

                    </div>
                    </div>
                    </div>
   </>
  )
}
