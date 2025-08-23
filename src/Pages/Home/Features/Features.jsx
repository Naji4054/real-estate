import { FeatureData } from "../../../Data/features";
import FeaturedCard from "./FeaturedCard";

const   Features = (props)=> {

    console.log(props)
    return (
        <>
        <section className="mb-[80px]">
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
