const ServiceCard = (props) => {
const data = props.data
    return  (
        <>
       <div className="flex justify-center items-center flex-col">
            <div>
                <img src={data.image} alt="image" />
            </div>
            <div>
                <h3>{data.title}</h3>
            </div>
            <div>
                <p className="max-w-[400px] text-center">over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
            </div>
            <div>
                <a href="#">Find a home</a>
            </div>
       </div>
        </>
    )
}
export default ServiceCard;