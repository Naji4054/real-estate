import React, { useEffect, useState } from 'react'
// import { LatestData } from '../../../Data/latest'
import LatestCards from './LatestCards'
import Carousel from '../../../Components/ui/Carousel'
import axios from 'axios'

const LatestProperties = () => {

    const [latestData, setLatestData] = useState([])
    const featchData = async() =>{
        await axios.get('http://localhost:3000/latest/data').then(res => setLatestData(res.data.latestDatas)).catch(err => console.log(err))
    }
    useEffect (() => {
        featchData()
    },[])
    
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
                    latestData.map((item)=> <LatestCards key={item.id} data={item}/>)
                }     
                </Carousel>        
            </div>
        </section>
   </>
  )
}

export default LatestProperties
