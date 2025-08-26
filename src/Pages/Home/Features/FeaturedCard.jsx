const FeaturedCard = (props) => {
    const data = props.data
        return  (
            <>
           <div className="flex justify-center items-center flex-col max-w-[250px]">
                <div className="pt-9 max-w-[80px] min-h-[105px]">
                    <img className="pb-[25px]" src={data.image} alt="image" />
                </div>
                <div>
                    <h3 className="text-[20px] mb-5">{data.title}</h3>
                </div>
                <div>
                    <p className="max-w-[400px] text-[12px]  text-[#6a6767] mb-5 text-center">{data.des}</p>
                </div>
                
           </div>
            </>
        )
    }
    export default FeaturedCard;