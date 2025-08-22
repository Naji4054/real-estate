import React from 'react'
import { LatestData } from '../../../Data/latest'
import LatestCards from './LatestCards'
import Carousel from '../../../Components/Carousel'

const LatestProperties = () => {
    
  return (
   <>
    <section className='mb-[70px]'>
            <div className="flex flex-col justify-center items-center mb-[50px]">
                <h3 className=" text-[#ff5a3c] bg-[#ffeae6] p-[2px_14px] rounded-[25px]">Featured Properties</h3>
                <h1 className="text-[41px] font-semibold">Featured & Latest Properties</h1>
            </div>
            <div className='container mx-auto ' >
                <Carousel>
                {
                    LatestData.map((item)=> <LatestCards key={item.id} data={item}/>)
                }     
                </Carousel>        
            </div>
        </section>
   </>
  )
}

export default LatestProperties
