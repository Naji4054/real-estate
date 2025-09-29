import { useEffect, useState } from "react";
import { FeatureData } from "../../../Data/features";
import FeaturedCard from "./FeaturedCard";
import axios from "axios";

const   Features = ()=> {

    const [FeatureData, setFeatureData] =  useState([])
    const featchData = async () => {
        await axios.get('http://localhost:3000/api/v1/features/data').then(res => setFeatureData(res.data.data)).catch(err => console.log(err))
    }
    useEffect(() => {
        featchData()
    },[])

    

    return (
        <>
        <section className="mb-[80px]">
            <div  className=" container mx-auto grid grid-cols-4">
                {
                    FeatureData.map((item)=> <FeaturedCard key={item.id} data={item}/>)
                }             
            </div>
        </section>
        </>
    )
}
export default Features;
