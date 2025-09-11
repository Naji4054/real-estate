import axios from "axios";
// import { ServiceData } from "../../../Data/data";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = (props)=> {

    const [serviceData, setServiceData] = useState([])

    const fetchData = async ()=> {
        
        await axios.get('http://localhost:3000/service/data').then(res=>  setServiceData(res.data.data) ).catch(err=> console.log(err))
        
    }
    
    useEffect(()=> {
        fetchData()
    }, [])

    return (
        <>
        <section className="mb-[80px]">
            <div className="flex flex-col justify-center items-center mb-[50px] ">
                <h3 className=" text-[#ff5a3c] bg-[#ffeae6] p-[2px_14px] rounded-[25px]">Our Services</h3>
                <h1 className="text-[41px] font-semibold">Our Main Focus</h1>
            </div>
            <div  className="grid grid-cols-3 gap-11 shadow-[10px]">
                {
                    serviceData.map((item)=> <ServiceCard key={item.id} data={item}/>)
                }             
            </div>
        </section>
        </>
    )
}
export default Services;
