import { Helmet } from "react-helmet-async";
import Banner from "../sections/Banner";
import Category from "../sections/Category";
import Featured from "../sections/Featured";
import PopularMenu from "../sections/PopularMenu";
import Testimonials from "../sections/Testimonials";



const Home = () => {
    return (
        <div><Helmet><title>Bistro Boss | Home</title></Helmet>
            <Banner></Banner>      
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;