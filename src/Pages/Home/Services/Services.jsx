import { ServiceData } from "../../../Data/data";
import ServiceCard from "./ServiceCard";
const Services =()=> {
    return (
        <>
        <section>
            <div className="flex flex-col justify-center items-center">
                <h3 className=" text-[#ff5a3c]">Our Services</h3>
                <h1>Our Main Focus</h1>
            </div>
            <div  className="grid grid-cols-3 gap-11">
                {
                    ServiceData.map((item)=> <ServiceCard key={item.id} data={item}/>)
                }
            </div>
        </section>
        </>
    )
}
export default Services;