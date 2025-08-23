import { FeatureData } from "../../../Data/features";
import FeaturedCard from "./FeaturedCard";

const   Features = (props)=> {

    console.log(props)
    return (
        <>
        <section className="mb-[80px]">
            <div className="flex flex-col justify-center items-center mb-[50px] ">
                <h3 className=" text-[#ff5a3c] bg-[#ffeae6] p-[2px_14px] rounded-[25px]">Our Services</h3>
                <h1 className="text-[41px] font-semibold">Our Main Focus</h1>
            </div>
            <div  className="grid grid-cols-4">
                {
                    FeatureData.map((item)=> <FeaturedCard key={item.id} data={item}/>)
                }             
            </div>
        </section>
        </>
    )
}
export default Features;
