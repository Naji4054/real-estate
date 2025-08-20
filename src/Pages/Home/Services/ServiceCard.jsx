const ServiceCard = (props) => {
const data = props.data
    return  (
        <>
       <div className="flex justify-center items-center flex-col shadow-[10px_8px_0px_30px_whitesmoke]">
            <div className="pt-9">
                <img className="pb-[25px]" src={data.image} alt="image" />
            </div>
            <div>
                <h3 className="text-[22px] mb-5">{data.title}</h3>
            </div>
            <div>
                <p className="max-w-[400px] text-center text-[#6a6767] mb-5 italic">over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
            </div>
            <div className="pb-7">
                <a href="#" className="bg-[#ff5a3c] text-white text-[12px] p-[2px_17px]">Find Home</a>
            </div>
       </div>
        </>
    )
}
export default ServiceCard;