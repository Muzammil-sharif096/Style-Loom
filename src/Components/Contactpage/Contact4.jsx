import React from 'react'
import { first } from '../../Datacard'
import Card1 from '../../Cards/Card1'


export default function Contact4() {
    return (
        <>
            <div className=' bg-black xl:px-28 px-4'>
                <div>
                    <div  className='    pb-16 space-y-3 '>
                    
                            <h2 className=' sm:text-5xl text-3xl font-normal text-white'>THE STYLELOOM TESTIMONIAL COLLECTION.</h2>
                            <p className=' text-lg font-normal text-gray-500'>At StyleLoom, our customers are the heartbeat of our brand.</p>
                        
                       
                    </div>
                    <div className='  flex flex-wrap xl:justify-between justify-center gap-12 '>
                        {first.map((ele)=>{
                            return(
                                <>
                                {<Card1 Data1={ele}/>}
                                </>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}
