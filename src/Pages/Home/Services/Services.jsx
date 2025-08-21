import { ServiceData } from "../../../Data/data";
import ServiceCard from "./ServiceCard";

const Services = (props)=> {

    console.log(props)
    return (
        <>
        <section>
            <div className="flex flex-col justify-center items-center mb-[50px]">
                <h3 className=" text-[#ff5a3c] bg-[#ffeae6] p-[2px_14px] rounded-[25px]">Our Services</h3>
                <h1 className="text-[41px] font-semibold">Our Main Focus</h1>
            </div>
            <div  className="grid grid-cols-3 gap-11 shadow-[10px]">
                {
                    ServiceData.map((item)=> <ServiceCard key={item.id} data={item}/>)
                }             
            </div>
        </section>
        </>
    )
}
export default Services;
