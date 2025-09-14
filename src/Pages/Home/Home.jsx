import Banner from "./Banner";
import Categories from "./Categories/Categories";
import Features from "./Features/Features";
import LatestProperties from "./Latest/LatestProperties";
import Reviews from "./Reviews/Reviews";
import Services from "./Services/Services";

const Home = () => {
    return (
        <>
        <Banner/>
        <Features/>
        <LatestProperties/>
        <Services/>
        <Categories/>
        <Reviews/>
        </>
    )
}
export default Home;